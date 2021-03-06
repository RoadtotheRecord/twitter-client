import CountText from './CountText'

export const INITIAL_STATUS = '\n#RttR\nhttps://www.twitch.tv/roadtotherecord';
export const INITIAL_DISCORD = '\n#RttR\nhttps://discord.gg/kNyCVR24jz';
export const INITIAL_COUNT = CountText(INITIAL_STATUS);
export const MAX_STATUS = 280;

export const TWITTER_API = process.env.REACT_APP_REST_API_IP + '/twitter';
export const SPREADSHEET_API = process.env.REACT_APP_REST_API_IP + '/spreadsheet';