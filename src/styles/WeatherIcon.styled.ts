import styled from "styled-components";


interface IconProps {
    big?: boolean;
    loupe?: boolean;
}

export const IconBlock = styled.div<IconProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${(props) => {
        if(props.loupe) {
            return `
                position: absolute;
                left: 5px;
            `
        }

        if(props.big) {
            return `
                @media (max-width: 666px) {
                    flex-direction: column;
                }
            `
        }

        if(!props.big) {
            return `
                margin-right: 22px;
                margin-bottom: 25px;
                @media (max-width: 430px) {
                    width: 40%;
                }
            `
        }
    }}
`

export const IconImg = styled.img<IconProps>`
    ${(props) => {
        if(props.loupe) {
            return`
                position: absolute;
                left: 20px;
                width: 34px;
                height: 34px;
            `
        }

        if(props.big) {
            return `
                width: 200px;
                height: 200px;
                margin-right: 40px;
                @media (max-width: 666px) {
                    margin-right: 0;
                    margin-bottom: 50px;

                }
            `
        } else {
            return `
                width: 44px;
                height: 44px;
            `
        }
    }}
`

export const IconText = styled.p<IconProps>`
    margin-left: 5px;

    ${(props) => {
        if(props.big) {
            return `
                font-size: 160px;
            `
        } else {
            return `
                font-size: 18px;
            `
        }
    }}
`