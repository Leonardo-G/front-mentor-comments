import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

import { BackgroundLite, Container } from '../../styled/globals/globals'

export const LayoutPage:FC<Props> = ({ children }) => {
    
    return (
        <BackgroundLite>
            <Container>{ children }</Container>
        </BackgroundLite>
    )
}
