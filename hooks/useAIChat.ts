import { aiChat } from "@/redux/message";
import { RootState } from "@/redux/type";
import React, { Dispatch, useEffect } from "react";
import { useSelector } from "react-redux";
const OPENROUTER_API_KEY =
  "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";

export default function useAIChat(dispatch: Dispatch<any>) {
  const chat = useSelector((state: RootState) => state.message.chat);
  const mode = useSelector((state: RootState) => state.message.mode);
  const messageLength = useSelector(
    (state: RootState) => state.message.messageLength
  );

  const [status, setStatus] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const call = async () => {
    const lastChat = chat[chat.length - 1];
    const lastUserChat = lastChat.userMessage;
    console.log(lastUserChat);
    setLoader(true);
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",
            chat_mode: mode,
            temperature: 0.7,
            max_tokens: parseInt(messageLength),
            messages: [{ role: "user", content: lastUserChat }],
          }),
        }
      );

      if (response.status === 200) {
        response.json().then((data) => {
          setStatus(true);
          setLoader(false);
          dispatch(aiChat(data.choices[0].message.content));
          console.log(data.choices[0].message.content);
        });
      } else {
        setLoader(false);
        setStatus(false);
      }
    } catch (error) {
      setLoader(false);
      setStatus(false);
    }
  };

  useEffect(() => {
    call().then(() => {
      console.log("AI Chat");
    });
  }, [chat]);

  return {
    status,
    loader,
  };
}
