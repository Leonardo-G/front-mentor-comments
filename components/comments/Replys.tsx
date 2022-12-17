import React, { FC } from 'react'
import styled from 'styled-components'
import { IReply } from '../../interface/comment'

import { FlexColumn, FlexRow } from '../../styled/globals/globals'
import { Comment } from './Comment'

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
                            { ...c }
                        />
                    ))
                }
            </FlexColumn>
        </FlexRow>
    )
}
