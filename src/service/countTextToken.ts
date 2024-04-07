import openAiTokenCounter, { ModelType } from 'openai-gpt-token-counter';

export default class TextTokenCounterService {
    CHATGPT_MODEL: ModelType = "gpt-3.5-turbo";
    TOKEN_LIMIT = 3500;
    articleText: string;

    constructor(articleText: string) {
        this.articleText = articleText;
    }

    public countTokens(){
        const tokenCount = openAiTokenCounter.text(this.articleText, this.CHATGPT_MODEL);
        return tokenCount;
    }
}