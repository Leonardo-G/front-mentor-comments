export interface IComment {
    id: string;
    comment: string;
    idUser: number;
    rate: number;
    date: number;
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