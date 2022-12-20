import { createContext } from 'react';
import { IComment, IReply, IUser } from '../interface/comment';

export interface ContextProps {
    comments: IComment[];
    replies: IReply[];
    user: IUser;
    isReply: { idReply: string, is: boolean };
    setReplies: React.Dispatch<React.SetStateAction<IReply[]>>;

    ///METHODS
    addReply: ( message: string, idComment: string ) => void;
    newMessage: ( message: string ) => void;
    deleteMessage: ( type: "message" | "reply", id: string ) => void;
    setIsReply: React.Dispatch<React.SetStateAction<{
        idReply: string;
        is: boolean;
    }>>
};

export const StateContext = createContext({} as ContextProps);