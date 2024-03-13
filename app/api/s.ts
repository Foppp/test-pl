export const queryAiMobileFakeSearch = async ({
  messages,
}: {
  messages: string;
}) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      const assistantMessage = {
        role: "assistant",
        content: "Assistant answer",
      };
      resolve([...messages, assistantMessage]);
    }, 3000)
  );
};
