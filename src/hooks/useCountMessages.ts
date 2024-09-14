import { useCallback, useState } from "react";
import { API_URL } from "../constants/urls";
import { snackVar } from "../constants/snack";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "../constants/errors";

const useCountMessages = (chatId: string) => {
  const [messagesCount, setMessagesCount] = useState<number | undefined>();

  const countMessages = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/messages/count?chatId=${chatId}`);
      if (!res.ok) {
        snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
        return;
      }
      const text = await res.text();
      const data = text ? JSON.parse(text) : { messages: 0 };
      if (typeof data.messages === "number") {
        setMessagesCount(data.messages);
      } else {
        snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      }
    } catch (error) {
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  }, [chatId]);

  return { messagesCount, countMessages };
};

export { useCountMessages };
