import { OpenAIChatMessage } from '@/types/openai/chat';

export const insertBlankDialogues = (dialogues: OpenAIChatMessage[]) => {
  const modifiedDialogues: OpenAIChatMessage[] = [];
  dialogues.forEach((dialogue, index) => {
    // 将当前对话添加到修改后的数组中
    modifiedDialogues.push(dialogue);

    // 检查是否需要在当前对话和下一个对话之间插入一个空白内容的对象
    if (index < dialogues.length - 1 && dialogue.role === dialogues[index + 1].role) {
      const blankDialogue: OpenAIChatMessage = {
        content: '',
        role: dialogue.role === 'user' ? 'assistant' : 'user',
      };
      modifiedDialogues.push(blankDialogue);
    }
  });

  return modifiedDialogues;
};
