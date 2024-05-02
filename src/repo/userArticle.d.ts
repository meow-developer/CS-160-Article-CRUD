import { UUID } from "crypto"

export type UserArticle = {
    ArticleID?: number,
    UserUUID: UUID | string
}