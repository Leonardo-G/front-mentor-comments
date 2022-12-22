import React, { FC } from 'react'
import Image from 'next/image';

import { Circle } from '../../styled/globals/globals';

interface Props {
    src: string;
    description?: string;
    role?: string;
}

export const ImageCircle: FC<Props> = ({ src, description = "Imagen comment", role = "contentImage" }) => {
    return (
        <Circle role={ role }>
            <Image 
                src={ src }
                fill
                alt={ description }
            />
        </Circle>
    )
}
