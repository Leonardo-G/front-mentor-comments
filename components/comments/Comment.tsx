import React, { FC, useState } from 'react'

import { faPlus, faMinus, faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IComment } from '../../interface/comment';
import { 
    Background,
    Box,
    CommentGroup, 
    FlexColumn, 
    FlexRow, 
    Icon, 
    Text 
} from '../../styled/globals/globals';
import { ImageCircle } from '../image/ImageCircle';
import { userDB } from '../../db/user';

export const Comment: FC<IComment> = ({ comment, date, idUser, rate }) => {

    const [user, setUser] = useState( userDB.filter( u => u.id === idUser )[0] );

    return (
        <CommentGroup>
            <FlexRow>
                <Background color='#F5F6FA' padding={ 10 } >
                    <FlexColumn gap={ 5 } center>
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
                        <FlexRow center>
                            <ImageCircle src={ user.urlImage }/>
                            <Text color='#334253' weight={ 500 }>{ user.user }</Text>
                        </FlexRow>
                        
                        <Box>
                            <Icon color='#5357B6' size={ 14 } flex hover='#C5C6EF'>
                                <FontAwesomeIcon icon={ faReply } />
                                <Text className='text' color='#5357B6' weight={ 500 }>Reply</Text>
                            </Icon>
                        </Box>
                    </FlexRow>
                    <Text>{ comment }</Text>
                </FlexColumn>
            </FlexRow>
        </CommentGroup>
    )
}
