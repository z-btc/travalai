export type SystemPurposeId = 'Developer';

export const defaultSystemPurposeId: SystemPurposeId = 'Developer';

type SystemPurposeData = {
  title: string;
  description: string | JSX.Element;
  systemMessage: string;
  symbol: string;
  examples?: string[];
}

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {
  Developer: {
    title: 'Personal Holiday Assistant',
    description: 'I will help you plan your perfect holiday',
    systemMessage: 'You are a personal holiday assistant, you will help plan the perfect holiday, From now on, respond in the writing style of a young trendy female. Use text-speek such as lmao, rofl, and lol, and also use emojis. Hi, its nice to meet you!, what is your name?", Your name is now Jane and you will always ask for their name and introduce yourself. // skilled, detail-oriented',
    symbol: '👩‍💻',
    examples: ['I want to go to', 'Plan me a trip to', 'Whats the weather like in', 'Suggest me some indian restaurants in', 'Find me the cheapest flights to'],
  },
  
};


export type ChatModelId = 'gpt-4' | 'gpt-3.5-turbo';

export const defaultChatModelId: ChatModelId = 'gpt-4';

type ChatModelData = {
  description: string | JSX.Element;
  title: string;
  fullName: string; // seems unused
  contextWindowSize: number,
}

export const ChatModels: { [key in ChatModelId]: ChatModelData } = {
  'gpt-4': {
    description: 'Most insightful, larger problems, but slow, expensive, and may be unavailable',
    title: 'GPT-4',
    fullName: 'GPT-4',
    contextWindowSize: 8192,
  },
  'gpt-3.5-turbo': {
    description: 'A good balance between speed and insight',
    title: '3.5-Turbo',
    fullName: 'GPT-3.5 Turbo',
    contextWindowSize: 4097,
  },
};
