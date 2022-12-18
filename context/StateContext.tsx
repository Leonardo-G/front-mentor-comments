import { createContext } from 'react';
import { IComment, IReply, IUser } from '../interface/comment';

export interface ContextProps {
    comments: IComment[];
    replies: IReply[];
    user: IUser;

    ///METHODS
    addReply: ( message: string, idComment: string ) => void;
    newMessage: ( message: string ) => void;
    deleteMessage: ( type: "message" | "reply", id: string ) => void;
};

export const StateContext = createContext({} as ContextProps);