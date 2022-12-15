export interface IComment {
    id: string;
    comment: string;
    idUser: number;
    top: number;
    down: number;
    date: number;
}

export interface IUser {
    id: number;
    user: string;
    urlImage: string;
}