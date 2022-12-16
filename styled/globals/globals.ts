import styled from "styled-components";

/////////Fondos/////////
export const BackgroundLite = styled.div`
    background: #F5F6FA;
    width: 100%;
    height: 100vh;
    padding-top: 60px;
`

export const Background = styled.div`
    background: ${ ({ color }) => color ? color: "#fff" };
    border-radius: 10px;
    padding: ${ ({ padding }: { padding?: number }) => padding ? `${ padding }px` : "0px" };
    height: 100%;
`

export const Container = styled.div`
    width: min(750px, 95%);
    margin: 0 auto;
`

export const CommentGroup = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 24px;
    width: 100%;
`

export const Circle = styled.div`
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

export const Box = styled.div`

    .color:hover{        
        color: #C5C6EF;
    }
`

/////////// FLEX ////////////
export const FlexRow = styled.div`
    display: flex;
    column-gap: ${ ({ gap }: { gap?: number, center?: boolean, between?: boolean }) => gap ? `${ gap }px` : "24px" };
    align-items: ${ ({ center }: { center ?: boolean }) => center ? "center" : ""  };
    justify-content: ${ ({ between }) => between ? "space-between" : "normal" };
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${ ({ center }: { center ?: boolean, gap ?: number }) => center ? "center" : ""  };
    row-gap: ${ ({ gap }: { gap?: number }) => gap ? `${ gap }px` : "20px" };
`

///////////// TEXTOS ////////////////
export const Text = styled.div`
    font-style: normal;
    font-weight: ${ ({ weight }: { weight?: 400 | 500 | 700 }) => weight ? weight : 400 };
    font-size: 16px;
    line-height: 24px;
    color: ${ ({ color }) => color ? color : "#67727E"};
`

///////////// ICONOS ////////////////

export const Icon = styled.div`
    color: ${ ({ color }: { color?: string, hover?: string, size?:number, flex?: boolean }) => color ? color : "#000" };
    font-size: ${ ({ size }: { size?: number }) => size ? `${ size }px` : "10px" };
    cursor: pointer;
    font-weight: 700;
    display: ${ ({ flex }: { flex?: boolean }) => flex ? "flex" : "inherit" };
    align-items: ${ ({ flex }: { flex?: boolean }) => flex ? "center" : "" };
    column-gap: 10px;

    &:hover, &:hover .text{
        color: ${ ({ color, hover }: { color?: string, hover?: string }) => hover ? hover : color };
    }
    
`
