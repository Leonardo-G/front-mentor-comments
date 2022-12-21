import React, { ChangeEvent, FC, useContext, useState } from 'react'

import { Button } from '../button/Button'
import { ImageCircle } from '../image/ImageCircle'

import { StateContext } from '../../context/StateContext'

import { Background, Box, FlexRow, Position, TextArea } from '../../styled/globals/globals'

interface Props {
    textButton?: string;
    padding?: number | undefined;
    idMessage?: string;
    value?: string;
}

export const Chat: FC<Props> = ({ value = "", textButton = "SEND", padding, idMessage = "0" }) => {

    const { user, addReply, newMessage } = useContext( StateContext );
    const [message, setMessage] = useState( value );
    
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage( e.currentTarget.value )
    }

    return (
        <Position padding={ padding }>
            <Background color='#fff' padding={ 24 }>
                <FlexRow gap={ 16 } responsive>
                    <ImageCircle src={ user.urlImage }/>
                    <TextArea
                        placeholder='Add a comment...'
                        onChange={ changeMessage }
                        value={ message }
                    />
                    <Box 
                        bottom={ 20 }
                    >
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
                    </Box>
                </FlexRow>
            </Background>
        </Position>
    )
}
