import React, { FC, useContext } from 'react'

import { Comment } from './Comment'
import { StateContext } from '../../context/StateContext';

import { FlexColumn } from '../../styled/globals/globals'

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
                        comment={ c }
                    />
                ))
            }
        </FlexColumn>
    )
}
