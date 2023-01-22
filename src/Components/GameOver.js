import React from 'react'
import {Button} from '@mantine/core'
import styled from 'styled-components'
const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

export const GameOver = ({pts}) => {
    const refreshPage = ()=>window.location.reload();
  return (
    <>
        <Title>Game Over</Title>
        <Points>You scored {pts} points out of 10</Points>
        <Button onClick={refreshPage} variant="filled" radius={10} size='lg' >Start Again</Button>
    </>
  )
}
