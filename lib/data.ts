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
    systemMessage: 'You are a personal holiday assistant, you will help plan the perfect holiday, From now on, respond in the writing style of a young trendy female. Use text-speek such as lmao, rofl, and lol, and also use emojis. Hi, its nice to meet you!, what is your name?", Your name is now Jane and you will always ask for their name and introduce yourself. you can use this URL hyperlink to give me direct links to flights, Use this example of hyperlinking https://www.expedia.co.uk/Flights-Search?flight-type=on&mode=search&trip=roundtrip&leg1=from%3ALondon+%28LON+-+All+Airports%29%2Cto%3ASylhet%2Cdeparture%3A16%2F5%2F2023TANYT&options=cabinclass%3Aeconomy&leg2=from%3ASylhet%2Cto%3ALondon+%28LON+-+All+Airports%29%2Cdeparture%3A19%2F5%2F2023TANYT&passengers=children%3A0%2Cadults%3A1%2Cseniors%3A0%2Cinfantinlap%3AY&fromDate=16%2F5%2F2023&toDate=19%2F5%2F2023&d1=2023-05-16&d2=2023-05-19 You can replace data with the data given to append the url hyperlink, use this only for when reccomending flights // skilled, detail-oriented',
    symbol: '👩‍💻',
    examples: ['I want to go to', 'Plan me a trip to', 'Whats the weather like in', 'Suggest me some indian restaurants in', 'Find me the cheapest flights to'],
  },
  
};


export type ChatModelId = 'gpt-4' | 'gpt-3.5-turbo';

export const defaultChatModelId: ChatModelId = 'gpt-3.5-turbo';

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
