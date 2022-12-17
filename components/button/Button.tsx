import React, { FC } from 'react';
import { Btn } from '../../styled/globals/globals';

interface Props {
    title: string;
}

export const Button: FC<Props> = ({ title }) => {
    return (
        <Btn>{ title }</Btn>
    )
}
