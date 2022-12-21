import React, { ChangeEvent, FC, useContext, useState } from 'react'

import { faPlus, faMinus, faReply, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ImageCircle } from '../image/ImageCircle';
import { Replys } from './Replys';

import { StateContext } from '../../context/StateContext';
import { IComment, IReply } from '../../interface/comment';
import { 
    Background,
    Box,
    CommentGroup, 
    FlexColumn, 
    FlexRow, 
    Icon, 
    Text, 
    TextArea
} from '../../styled/globals/globals';
import { userDB } from '../../db/user';
import { Chat } from '../chat/Chat';

interface Props {
    comment: IComment | IReply
}

export const Comment: FC<Props> = ({comment: { comment, date, idUser, rate, id, idComment = null }  }) => {

    const { user, replies, deleteMessage, setIsReply, isReply, setReplies, favoriteMessage, removeFavoriteMessage, upvote, downvote } = useContext( StateContext );
    const [users, setUsers] = useState( userDB.filter( u => u.id === idUser )[0] );
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState( comment );
    
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage( e.currentTarget.value )
    }

    const editMessage = () => {
        const findReply = replies.filter( r => r.id === id )[0];
        const TotalReplies = replies.filter( r => r.id !== id );
        const reply = {
            ...findReply,
            comment: message
        }

        setReplies([
            ...TotalReplies,
            reply
        ])

        setIsEdit(false);
    }

    const changeFavorite = ( type: "DOWNVOTE" | "UPVOTE" ) => {

        if ( type === "DOWNVOTE" ){
            removeFavoriteMessage( id, idComment ? "REPLY" : "COMMENT" );

        } else {
            favoriteMessage( id, idComment ? "REPLY" : "COMMENT" );
        }

    }

    return (
        <>
            <CommentGroup>
                <FlexRow>
                    <Background color='#F5F6FA' padding={ 10 } >
                        <FlexColumn gap={ 15 } center>
                            <Icon 
                                color={ upvote.some( u => u.idMessage === id ) ? "red" : '#C5C6EF'} 
                                size={ 15 } 
                                hover="#5357B6"
                                onClick={ () => changeFavorite("UPVOTE") }
                            >
                                <FontAwesomeIcon icon={ faPlus } />
                            </Icon>
                            <Text color='#5357B6' weight={ 700 }>{ rate }</Text>
                            <Icon 
                                color={ downvote.some( u => u.idMessage === id ) ? "red" : '#C5C6EF'} 
                                size={ 15 } 
                                hover="#5357B6"
                                onClick={ () => changeFavorite("DOWNVOTE") }    
                            >
                                <FontAwesomeIcon icon={ faMinus } />
                            </Icon>
                        </FlexColumn>
                    </Background>
                    <FlexColumn>
                        <FlexRow center between>
                            <FlexRow center gap={ 16 }>
                                <ImageCircle src={ users.urlImage }/>
                                <FlexRow gap={ 8 } center>
                                    <Text color='#334253' weight={ 500 }>{ users.user }</Text>
                                    {
                                        idUser === 4 &&
                                        <Background color='#5357B6' paddingX={ 6 } radius={ 4 }>
                                            <Text weight={ 500 } size={ 13 } color='#fff'>you</Text>
                                        </Background>
                                    }
                                </FlexRow>
                                <Text>{ new Date(date).toLocaleString( "en-AR", { month: "long" }) }</Text>
                            </FlexRow>
                            
                            {
                                idUser !== user.id
                                ?
                                    <Box
                                        onClick={ () => setIsReply({
                                            idReply: id,
                                            is: !isReply.is
                                        }) }
                                    >
                                        <Icon color='#5357B6' size={ 14 } flex hover='#C5C6EF'>
                                            <FontAwesomeIcon icon={ faReply } />
                                            <Text className='text' color='#5357B6' weight={ 500 }>Reply</Text>
                                        </Icon>
                                    </Box>
                                :
                                    <FlexRow gap={ 24 }>
                                        <Icon 
                                            onClick={ () => deleteMessage( idComment ? "reply" : "message", id ) }
                                            color='#5357B6' 
                                            size={ 14 } 
                                            flex 
                                            hover='#C5C6EF'
                                        >
                                            <FontAwesomeIcon icon={ faTrash } color="#000"/>
                                            <Text className='text' color='#ED6368' weight={ 500 }>Delete</Text>
                                        </Icon>
                                        <Icon 
                                            color='#5357B6' 
                                            size={ 14 } 
                                            flex 
                                            hover='#C5C6EF'
                                            onClick={ () => isEdit ? editMessage() : setIsEdit( !isEdit ) }
                                        >
                                            <FontAwesomeIcon icon={ faPen } color="#000"/>
                                            <Text className='text' color='#5357B6' weight={ 500 }>Edit</Text>
                                        </Icon>
                                    </FlexRow>
                            }
                        </FlexRow>
                        {
                            isEdit 
                            ? 
                                <TextArea
                                    value={ message }
                                    onChange={ changeMessage }
                                />
                            :
                                <Text>{ comment }</Text>

                        }
                    </FlexColumn>
                </FlexRow>
            </CommentGroup>
            {
                replies.some( r => r.idComment === id ) &&
                <Replys 
                    replies={ replies.filter( r => r.idComment === id) }
                />
            }
            {
                isReply.idReply === id && isReply.is &&
                <Chat 
                    textButton="REPLY"
                    padding={ 0 }
                    idMessage={ idComment ? idComment : id  }
                />
            }
        </>
    )
}
