import React, { FC, ReactNode, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { commentsDB } from '../db/comment'
import { repliesDB } from '../db/reply';
import { userDB } from '../db/user';

import { StateContext } from './StateContext'

interface Props {
    children: ReactNode;
}

export const StateProvider: FC<Props> = ({ children }) => {
    
    const [comments, setComments] = useState( commentsDB );
    const [replies, setReplies] = useState( repliesDB );
    const [user, setUser] = useState( userDB.filter( u => u.id === 4 )[0] )

    const addReply = ( message: string, idComment: string ) => {
        const reply = {
            id: uuidv4(),
            date: Date.now(),
            idUser: 4,
            comment: message,
            idComment,
            rate: 0,
        }
        
        setReplies([...replies, reply])
    }

    const newMessage = ( message: string ) => {

        const messageBody = {
            comment: message,
            date: Date.now(),
            rate: 0,
            id: uuidv4(),
            idUser: 4
        }

        setComments( [ ...comments, messageBody ] )
    }

    return (
        <StateContext.Provider value={{
            comments,
            replies,
            user,

            ////METHODS
            addReply,
            newMessage
        }}
            {...{ children }}
        ></StateContext.Provider>
    )
}
