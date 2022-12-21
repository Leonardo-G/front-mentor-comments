import React, { FC, ReactNode, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { commentsDB } from '../db/comment'
import { repliesDB } from '../db/reply';
import { userDB } from '../db/user';
import { IComment, IDownvote, IReply, IUpvote } from '../interface/comment';

import { StateContext } from './StateContext'

interface Props {
    children: ReactNode;
}

export const StateProvider: FC<Props> = ({ children }) => {
    
    const [comments, setComments] = useState( commentsDB );
    const [replies, setReplies] = useState( repliesDB );
    const [user, setUser] = useState( userDB.filter( u => u.id === 4 )[0] )
    const [isReply, setIsReply] = useState({
        idReply: "",
        is: false
    });
    const [upvote, setUpvote] = useState([] as IUpvote[]);
    const [downvote, setDownvote] = useState([] as IDownvote[]);

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
        setIsReply({
            idReply: "",
            is: false
        });
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

    const deleteMessage = ( type: "message" | "reply", id: string ) => {
        if ( type === "message" ) {
            setComments( comments.filter( c => c.id !== id ));
            return;
        }

        if ( type === "reply" ) {
            setReplies( replies.filter( c => c.id !== id ));
            return;
        }
    }

    const favoriteMessage = ( id: string, type: "REPLY" | "COMMENT" ) => {
        const existUpvote = upvote.some( u => u.idMessage === id );
        const commentUpvote = comments.filter( c => c.id === id )[0] || replies.filter( r => r.id === id )[0];
        const existDownvote = downvote.some( d => d.idMessage === id );

        if ( existDownvote ){
            commentUpvote.rate++;
            setDownvote( downvote.filter( d => d.idMessage !== id ) );
        }

        if ( existUpvote ){
            setUpvote( upvote.filter( u => u.idMessage !== id ) );
            commentUpvote.rate--
        } else {

            if ( type === "COMMENT" ){
                const newComments = comments.map( c => {
                    if ( id === c.id ){
                        c.rate++;
                    }

                    return c
                })
                setComments(newComments)
            }else {
                const newReplies = replies.map( r => {
                    if ( r.id === id ){
                        r.rate++;
                    }

                    return r
                })
                setReplies(newReplies)
            }

            const objUpvote = {
                idMessage: id,
                upvote: true
            }

            setUpvote([ ...upvote, objUpvote ]);
        }
    } 

    const removeFavoriteMessage = ( id: string, type: "REPLY" | "COMMENT"  ) => {
        const existUpvote = upvote.some( u => u.idMessage === id );
        const commentUpvote = comments.filter( c => c.id === id )[0] || replies.filter( r => r.id === id )[0];
        const existDownvote = downvote.some( d => d.idMessage === id );

        if ( existUpvote ){
            commentUpvote.rate--;
            setUpvote( upvote.filter( u => u.idMessage !== id ) );
        }
        
        if ( existDownvote ){
            setDownvote( downvote.filter( d => d.idMessage !== id ) );
            commentUpvote.rate++
        } else {
            if ( type === "COMMENT" ){
                const newComments = comments.map( c => {
                    if ( id === c.id ){
                        c.rate--;
                    }

                    return c
                })
                setComments(newComments)
            } else {
                const newReplies = replies.map( r => {
                    if ( r.id === id ){
                        r.rate--;
                    }

                    return r
                })
                setReplies(newReplies)
            }

            const objDownvote = {
                idMessage: id,
                downvote: true
            }
            
            setDownvote([ ...downvote, objDownvote ]);
        }
    
    }

    return (
        <StateContext.Provider value={{
            comments,
            replies,
            user,
            isReply,
            setReplies,
            upvote,
            downvote,

            ////METHODS
            addReply,
            newMessage,
            deleteMessage,
            setIsReply,
            favoriteMessage,
            removeFavoriteMessage
        }}
            {...{ children }}
        ></StateContext.Provider>
    )
}
