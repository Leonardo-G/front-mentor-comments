import React, { FC } from 'react'
import styled from 'styled-components'

import { Comment } from './Comment'

import { IReply } from '../../interface/comment'
import { FlexColumn, FlexRow } from '../../styled/globals/globals'

const Line = styled.div`
    background: #E9EBF0;
    width: 5px;
    margin-left: 45px;
`

interface Props {
    replies: IReply[];
}

export const Replys: FC<Props> = ({ replies }) => {
    return (
        <FlexRow gap={ 42 }>
            <Line></Line>
            <FlexColumn>
                {
                    replies.map( c => (
                        <Comment  
                            key={ c.id }
                            comment = { c }
                        />
                    ))
                }
            </FlexColumn>
        </FlexRow>
    )
}
