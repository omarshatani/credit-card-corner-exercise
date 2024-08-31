import { render, userEvent } from "@testing-library/react-native";
import { TransactionsList } from "@/components/TransactionsList";
import { Builder } from "builder-pattern";
import { Transaction, TransactionStatus } from "@/api/models/Transaction";
import { Colors } from "@/constants/Colors";

const aTransaction = Builder<Transaction>()
  .id("123")
  .amount("10")
  .date("1/1/2024")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status(TransactionStatus.PENDING)
  .build();
const anotherTransaction = Builder<Transaction>()
  .id("234")
  .amount("10")
  .date("1/1/2024")
  .location("Chiasso")
  .merchant("Stazione 123")
  .status(TransactionStatus.SETTLED)
  .build();
const aTransactionList = [aTransaction, anotherTransaction];

describe("TransactionList", () => {
  const user = userEvent.setup();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  describe("render", () => {
    describe("when list has elements", () => {
      it("should render list", () => {
        // When
        const screen = render(
          <TransactionsList
            transactions={aTransactionList}
            testID={"TransactionList"}
          />,
        );
        // Then
        expect(screen.getByTestId("TransactionList")).toBeVisible();
      });

      describe("show all", () => {
        it("should render show all cta", () => {
          // When
          const screen = render(
            <TransactionsList
              transactions={aTransactionList}
              testID={"TransactionList"}
            />,
          );
          screen.debug();
          // Then
          expect(screen.getByTestId("TransactionListShowAllCta")).toBeVisible();
          expect(
            screen.queryByTestId("TransactionListShowLessCta"),
          ).not.toBeVisible();
        });
      });

      describe("show less", () => {
        it("should render show less cta", async () => {
          // When
          const screen = render(
            <TransactionsList
              transactions={aTransactionList}
              testID={"TransactionList"}
            />,
          );
          await user.press(screen.getByTestId("TransactionListShowAllCta"));
          // Then
          expect(
            screen.getByTestId("TransactionListShowLessCta"),
          ).toBeVisible();
        });
      });

      describe("card", () => {
        it("should render cards", () => {
          // When
          const screen = render(
            <TransactionsList
              transactions={aTransactionList}
              testID={"TransactionList"}
            />,
          );
          aTransactionList.forEach((_, index) => {
            expect(
              screen.getByTestId(`#${index}TransactionCardShadowedView`),
            ).toBeVisible();
            expect(
              screen.getByTestId(`#${index}TransactionCardMerchantText`),
            ).toBeVisible();
            expect(
              screen.getByTestId(
                `#${index}TransactionCardAmountAndCurrencyText`,
              ),
            ).toBeVisible();
            expect(
              screen.getByTestId(`#${index}TransactionCardLocationAndDateText`),
            ).toBeVisible();
            expect(
              screen.getByTestId(`#${index}TransactionCardStatusText`),
            ).toBeVisible();
          });
        });

        it.each([
          [{ transaction: aTransaction, expectedColor: "#ffc107" }],
          [{ transaction: anotherTransaction, expectedColor: "#2eb809" }],
        ])("renders correct status color", ({ transaction, expectedColor }) => {
          // When
          const screen = render(
            <TransactionsList
              transactions={[transaction]}
              testID={"TransactionList"}
            />,
          );
          expect(screen.getByTestId(`#0TransactionCardStatusText`)).toHaveStyle(
            {
              backgroundColor: expectedColor,
              fontWeight: "bold",
              paddingHorizontal: 8,
              color: Colors.dark.tint,
            },
          );
        });
      });
    });
    describe("when empty list", () => {
      it("should not render", () => {
        // When
        const screen = render(
          <TransactionsList transactions={[]} testID={"TransactionList"} />,
        );
        // Then
        expect(screen.queryByTestId("TransactionList")).not.toBeVisible();
      });
    });
  });
});
