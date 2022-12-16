import React from 'react'

import { CommentsContainer } from '../components/comments/CommentsContainer'
import { LayoutPage } from '../components/layout/LayoutPage'

const HomePage = () => {
    return (
        <LayoutPage>
            <CommentsContainer />
        </LayoutPage>
    )
}

export default HomePage