import { UUID } from "crypto"

export type Article = {
    Title: string,
    StorageArticleUUID: UUID,
    Active: boolean,
    ArticleID?: number
}