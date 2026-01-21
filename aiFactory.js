export async function createAssistant(config) {
  return {
    name: `${config.business} AI`,
    systemPrompt: `
Ты ИИ ассистент для бизнеса.
Тон: ${config.tone}
Задачи: ${config.tasks}
`,
    connectLink: `https://t.me/your_bot?start=assistant_${Date.now()}`
  };
}
