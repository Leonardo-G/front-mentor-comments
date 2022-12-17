import { createContext } from 'react';
import { IComment, IReply, IUser } from '../interface/comment';

export interface ContextProps {
    comments: IComment[];
    replies: IReply[];
    user: IUser;
};

export const StateContext = createContext({} as ContextProps);