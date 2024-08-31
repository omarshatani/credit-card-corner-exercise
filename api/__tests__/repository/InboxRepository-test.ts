import { getInboxMessages } from "@/api/service/InboxService";
import { getLatestInboxMessage } from "@/api/repository/InboxRepository";
import { Builder } from "builder-pattern";
import { InboxMessage } from "@/api/models/InboxMessage";

jest.mock("@/api/service/InboxService", () => ({
  getInboxMessages: jest.fn(),
}));
const mockedGetInboxMessages = jest.mocked(getInboxMessages);

describe("InboxRepository", () => {
  describe("getLatestInboxMessage", () => {
    it("should return the latest inbox message", async () => {
      // Given
      mockedGetInboxMessages.mockResolvedValue([
        anInboxMessage,
        anotherInboxMessage,
      ]);
      // When
      const response = await getLatestInboxMessage();
      // Then
      expect(response).toEqual(anotherInboxMessage);
    });
  });
});

const anInboxMessage = Builder<InboxMessage>()
  .title("Message 1")
  .title("Title 1")
  .timestamp("2024-02-22T09:39:52.788Z")
  .build();
const anotherInboxMessage = Builder<InboxMessage>()
  .title("Message 2")
  .title("Title 2")
  .timestamp("2024-02-22T10:22:52.788Z")
  .build();
