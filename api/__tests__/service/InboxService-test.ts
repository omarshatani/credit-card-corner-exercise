import INBOX_MESSAGES from "@/api/response/inbox.json";
import { getInboxMessages } from "@/api/service/InboxService";

describe("InboxService", () => {
  describe("getInboxMessages", () => {
    it("should return a list of inbox messages", async () => {
      // When
      const response = await getInboxMessages();
      // Then
      expect(response).toEqual(INBOX_MESSAGES);
    });
  });
});
