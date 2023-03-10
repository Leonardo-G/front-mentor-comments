import styled from "styled-components";

/////////Fondos/////////
export const BackgroundLite = styled.div`
    background: #F5F6FA;
    width: 100%;
    height: 100vh;
    padding-top: 60px;
`

export const Background = styled.div`
    position: relative;
    background: ${ ({ color }: { color?: string, radius?: number, padding?: number, paddingX?: number, widthContent?: boolean }) => color ? color: "#fff" };
    border-radius: ${ ({ radius } ) => radius ? `${ radius }px` : "10px" };
    padding: ${ ({ padding, paddingX }) => padding ? `${ padding }px` : paddingX ? `0px ${ paddingX }px` : "0px" };
    height: 100%;
    width: ${ ({ widthContent }) => widthContent ? "fit-content" : "auto" };
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
    position: relative;
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

    @media (max-width: 620px){
        position: absolute;
        bottom: ${ ({ bottom }: { bottom?: number }) => bottom ? `${ bottom }px` : "30px" };
        right: 20px;
    }
`

/////////// FLEX ////////////
export const FlexRow = styled.div`
    display: flex;
    column-gap: ${ ({ gap }: { gap?: number, center?: boolean, between?: boolean, responsive?: boolean, gapResponsive?: number }) => gap ? `${ gap }px` : "24px" };
    align-items: ${ ({ center }: { center ?: boolean }) => center ? "center" : ""  };
    justify-content: ${ ({ between }) => between ? "space-between" : "normal" };
    row-gap: ${ ({ gap }) => gap ? `${ gap }px` : "24px" };

    @media (max-width: 620px){
        flex-direction: ${ ({ responsive }) => responsive ? "column-reverse" : "row" };
        column-gap: ${ ({ gap, gapResponsive }) => gapResponsive ? `${ gapResponsive }px` : gap };
    };
`

export const FlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${ ({ center }: { center ?: boolean, gap ?: number, responsive?: boolean, widthResponsive?: number }) => center ? "center" : ""  };
    row-gap: ${ ({ gap }: { gap?: number }) => gap ? `${ gap }px` : "20px" };
    column-gap: ${ ({ gap }) => gap ? `${ gap }px` : "24px" };
    @media (max-width: 620px){
        flex-direction: ${ ({ responsive }) => responsive ? "row" : "column" };
        width: ${ ({ widthResponsive }) => widthResponsive ? `${ widthResponsive }px` : "auto"}
    }
`

///////////// TEXTOS ////////////////
export const Text = styled.div`
    font-style: normal;
    font-weight: ${ ({ weight }: { weight?: 400 | 500 | 700, size?: number }) => weight ? weight : 400 };
    font-size: ${ ({ size }: { size?: number }) => size ? `${ size }px` : "16px" };
    line-height: 24px;
    color: ${ ({ color }) => color ? color : "#67727E"};

    @media (max-width: 420px){
        font-size: 13px;
    }
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

export const TextArea = styled.textarea`
    border: 1px solid #E9EBF0;
    border-radius: 8px;
    background: #FFFFFF;
    outline: none;
    min-height: 90px;
    max-height: 90px;
    padding: 12px 24px;
    flex: auto;
    font-size: 16px;
`

export const Btn = styled.button`
    background: #5357B6;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px 30px;
    color: #fff;
    height: 48px;
    border: none;
    font-weight: 700;
`

export const Position = styled.div`
    padding: ${ ({ padding }: { padding?: number }) => padding !== undefined && padding >= 0 ? `${ padding }px` : "20px 0 50px 0" };
` 