import React, { useContext } from 'react'
import { StateContext } from '../../context/StateContext'
import { Background, Circle, FlexRow, TextArea } from '../../styled/globals/globals'
import { Button } from '../button/Button'
import { ImageCircle } from '../image/ImageCircle'

export const Chat = () => {

    const { user } = useContext( StateContext );

    return (
        <Background color='#fff' padding={ 24 }>
            <FlexRow gap={ 16 }>
                <ImageCircle src={ user.urlImage }/>
                <TextArea
                   placeholder='Add a comment...'
                />
                <Button title='SEND'/>
            </FlexRow>
        </Background>
    )
}
