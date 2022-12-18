import React, { ChangeEvent, FC, useContext, useState } from 'react'

import { Button } from '../button/Button'
import { ImageCircle } from '../image/ImageCircle'

import { StateContext } from '../../context/StateContext'

import { Background, FlexRow, Position, TextArea } from '../../styled/globals/globals'

interface Props {
    textButton?: string;
    padding?: number | undefined;
    idMessage?: string;
}

export const Chat: FC<Props> = ({ textButton = "SEND", padding, idMessage = "0" }) => {

    const { user, addReply, newMessage } = useContext( StateContext );
    const [message, setMessage] = useState("");
    
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage( e.currentTarget.value )
    }


    return (
        <Position padding={ padding }>
            <Background color='#fff' padding={ 24 }>
                <FlexRow gap={ 16 }>
                    <ImageCircle src={ user.urlImage }/>
                    <TextArea
                        placeholder='Add a comment...'
                        onChange={ changeMessage }
                        value={ message }
                    />
                    <Button 
                        title={ textButton }
                        event={ 
                            textButton === "SEND" 
                            ?
                                () => newMessage( message )
                            :
                                () => addReply( message, idMessage ) 
                        }
                    />
                </FlexRow>
            </Background>
        </Position>
    )
}
