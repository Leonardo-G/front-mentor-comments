export interface IComment {
    id: string;
    comment: string;
    idUser: number;
    rate: number;
    date: number;
    idComment?: string | null
}

export interface IReply {
    id: string;
    idComment: string;
    comment: string;
    idUser: number;
    rate: number;
    date: number;
}

export interface IUser {
    id: number;
    user: string;
    urlImage: string;
}

export interface IUpvote {
    idMessage: string;
    upvote: boolean;
} 

export interface IDownvote{
    idMessage: string;
    downvote: boolean;
}