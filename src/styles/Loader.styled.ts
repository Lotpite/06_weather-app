import styled from "styled-components";

interface ILoaderProps {
  isLoading: boolean
}

export const LoaderWrapper = styled.div<ILoaderProps>`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    opacity: 0.9;
    display: ${({isLoading}) => isLoading ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const Spinner = styled.div`
    // background-color: white;
    width: 200px;
    height: 200px;
    border-right: 5px dashed black;
    animation: dash 1.5s ease-in-out infinite;
    z-index: 5;

    border-radius: 100px;
    animation: rotate 3s linear infinite;
    @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

`