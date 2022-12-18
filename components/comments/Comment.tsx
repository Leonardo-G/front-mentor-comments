import React, { FC, useContext, useState } from 'react'

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
    Text 
} from '../../styled/globals/globals';
import { userDB } from '../../db/user';
import { Chat } from '../chat/Chat';

interface Props {
    comment: IComment | IReply
}

export const Comment: FC<Props> = ({comment: { comment, date, idUser, rate, id, idComment = null }  }) => {

    const { user, replies, addReply } = useContext( StateContext );
    const [users, setUsers] = useState( userDB.filter( u => u.id === idUser )[0] );
    const [isReply, setIsReply] = useState(false);


    return (
        <>
            <CommentGroup>
                <FlexRow>
                    <Background color='#F5F6FA' padding={ 10 } >
                        <FlexColumn gap={ 15 } center>
                            <Icon color='#C5C6EF' size={ 15 } hover="#5357B6">
                                <FontAwesomeIcon icon={ faPlus } />
                            </Icon>
                            <Text color='#5357B6' weight={ 700 }>{ rate }</Text>
                            <Icon color='#C5C6EF' size={ 15 } hover="#5357B6">
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
                                        onClick={ () => setIsReply( !isReply ) }
                                    >
                                        <Icon color='#5357B6' size={ 14 } flex hover='#C5C6EF'>
                                            <FontAwesomeIcon icon={ faReply } />
                                            <Text className='text' color='#5357B6' weight={ 500 }>Reply</Text>
                                        </Icon>
                                    </Box>
                                :
                                <FlexRow gap={ 24 }>
                                    <Icon color='#5357B6' size={ 14 } flex hover='#C5C6EF'>
                                        <FontAwesomeIcon icon={ faTrash } color="#000"/>
                                        <Text className='text' color='#ED6368' weight={ 500 }>Delete</Text>
                                    </Icon>
                                    <Icon color='#5357B6' size={ 14 } flex hover='#C5C6EF'>
                                        <FontAwesomeIcon icon={ faPen } color="#000"/>
                                        <Text className='text' color='#5357B6' weight={ 500 }>Edit</Text>
                                    </Icon>
                                </FlexRow>
                            }
                        </FlexRow>
                        <Text>{ comment }</Text>
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
                isReply &&
                <Chat 
                    textButton="REPLY"
                    padding={ 0 }
                    idMessage={ idComment ? idComment : id  }
                />
            }
        </>
    )
}
