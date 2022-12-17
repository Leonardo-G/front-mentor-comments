import React, { FC } from 'react'

import { Comment } from './Comment'

import { commentsDB } from '../../db/comment'
import { FlexColumn } from '../../styled/globals/globals'

interface Props {
    reply?: boolean;
}

export const CommentsContainer: FC<Props> = ({ reply }) => {

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
