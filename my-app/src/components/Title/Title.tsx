import React, {FC} from 'react'

interface ITitle {
  text: string;
}

const Title: FC<ITitle> = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

export default Title