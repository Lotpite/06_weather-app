import styled from "styled-components";

interface ICityProps {
    isActive?: boolean;
}

export const SuggestionsWrapper = styled.div<ICityProps>`
    display: none;
    align-self: flex-start;
    margin-left: 50px;
    z-index: 2;

    ${(props) => {
        if(props.isActive) {
            return `
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 10px;
            background-color: white;
        `
        }
    }}
    
`

export const City = styled.div`
    margin-bottom: 5px;
    color: grey;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;

    :hover {
        cursor: pointer;
        background-color: lightgrey;
    }
`