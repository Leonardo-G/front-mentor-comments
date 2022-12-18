import React, { FC } from 'react';
import { Btn } from '../../styled/globals/globals';

interface Props {
    title: string;
    padding?: number | null;
    event: any;
}

export const Button: FC<Props> = ({ title, padding, event }) => {
    return (
        <Btn onClick={ event }>{ title }</Btn>
    )
}
