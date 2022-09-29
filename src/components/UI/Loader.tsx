import React, {FC} from 'react'
import { LoaderWrapper, Spinner } from "../../styles/Loader.styled"

interface ILoaderProps {
  isLoading: boolean
}

const Loader: FC<ILoaderProps> = ({isLoading}) => {
  return (
    <LoaderWrapper isLoading={isLoading}>
        <Spinner>
        </Spinner>
    </LoaderWrapper>
  )
}

export default Loader