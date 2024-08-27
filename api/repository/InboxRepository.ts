import { getInboxMessages } from "@/api/service/InboxService";

export const getLatestInboxMessage = async () => {
  const inboxMessages = await getInboxMessages();
  const sortedInboxMessages = inboxMessages.sort((a, b) =>
    new Date(a.timestamp).getTime() > new Date(b.timestamp).getTime() ? 1 : -1,
  );
  return sortedInboxMessages[sortedInboxMessages.length - 1];
};
