import React, { FC, useContext } from 'react'

import { Comment } from './Comment'

import { commentsDB } from '../../db/comment'
import { FlexColumn } from '../../styled/globals/globals'
import { StateContext } from '../../context/StateContext';

interface Props {
    reply?: boolean;
}

export const CommentsContainer: FC<Props> = ({ reply }) => {

    const { comments } = useContext( StateContext );

    return (
        <FlexColumn>
            {
                comments.map( c => (
                    <Comment  
                        key={ c.id }
                        { ...c }
                    />
                ))
            }
        </FlexColumn>
    )
}
