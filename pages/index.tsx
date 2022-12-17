import React from 'react'
import { Chat } from '../components/chat/Chat'

import { CommentsContainer } from '../components/comments/CommentsContainer'
import { LayoutPage } from '../components/layout/LayoutPage'

const HomePage = () => {
    return (
        <LayoutPage>
            <CommentsContainer />
            <Chat />
        </LayoutPage>
    )
}

export default HomePage