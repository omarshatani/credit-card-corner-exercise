import INBOX_JSON from "@/api/response/inbox.json";
import { InboxMessage } from "@/api/models/InboxMessage";

export const getInboxMessages = (): Promise<InboxMessage[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(INBOX_JSON);
    }, 400);
  });
};
