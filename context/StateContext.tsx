import { createContext } from 'react';
import { IComment, IDownvote, IReply, IUpvote, IUser } from '../interface/comment';

export interface ContextProps {
    comments: IComment[];
    replies: IReply[];
    user: IUser;
    isReply: { idReply: string, is: boolean };
    setReplies: React.Dispatch<React.SetStateAction<IReply[]>>;
    upvote: IUpvote[];
    downvote: IDownvote[];

    ///METHODS
    addReply: ( message: string, idComment: string ) => void;
    newMessage: ( message: string ) => void;
    deleteMessage: ( type: "message" | "reply", id: string ) => void;
    setIsReply: React.Dispatch<React.SetStateAction<{
        idReply: string;
        is: boolean;
    }>>
    favoriteMessage: ( id: string ) => void;
    removeFavoriteMessage: ( id: string ) => void;
};

export const StateContext = createContext({} as ContextProps);