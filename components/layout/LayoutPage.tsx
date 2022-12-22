import Head from 'next/document';
import React, { FC, ReactNode } from 'react'

import { BackgroundLite, Container } from '../../styled/globals/globals'

interface Props {
    children: ReactNode;
}

export const LayoutPage:FC<Props> = ({ children }) => {
    
    return (
        <main>
            <BackgroundLite>
                <Container>{ children }</Container>
            </BackgroundLite>
        </main>
    )
}
