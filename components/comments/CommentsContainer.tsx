import React from 'react'

import { Comment } from './Comment'

import { commentsDB } from '../../db/comment'
import { FlexColumn } from '../../styled/globals/globals'

export const CommentsContainer = () => {

    return (
        <FlexColumn>
            {
                commentsDB.map( c => (
                    <Comment  
                        key={ c.id }
                        { ...c }
                    />
                ))
            }
        </FlexColumn>
    )
}
