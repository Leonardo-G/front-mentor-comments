import React, { useContext } from 'react'
import { Chat } from '../components/chat/Chat'

import { CommentsContainer } from '../components/comments/CommentsContainer'
import { LayoutPage } from '../components/layout/LayoutPage'
import { StateContext } from '../context/StateContext';

const HomePage = () => {

    const { isReply } = useContext( StateContext );

    return (
        <LayoutPage>
            <CommentsContainer />
            {
                !isReply.is &&
                <Chat />
            }
        </LayoutPage>
    )
}

export default HomePage