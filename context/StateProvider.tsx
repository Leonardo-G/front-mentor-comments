import React, { FC, ReactNode, useState } from 'react'
import { commentsDB } from '../db/comment'
import { repliesDB } from '../db/reply';
import { StateContext } from './StateContext'
import { userDB } from '../db/user';

interface Props {
    children: ReactNode;
}

export const StateProvider: FC<Props> = ({ children }) => {
    
    const [comments, setComments] = useState( commentsDB );
    const [replies, setReplies] = useState( repliesDB );
    const [user, setUser] = useState( userDB.filter( u => u.id === 4 )[0] )
    
    return (
        <StateContext.Provider value={{
            comments,
            replies,
            user
        }}
            {...{ children }}
        ></StateContext.Provider>
    )
}
