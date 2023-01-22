import React from 'react'
import styled from 'styled-components'
import { Button } from '@mantine/core'

const Intro = styled.div`
margin-top: 8em;
text-align:center;
`
export const Start = ({props}) => {
    const StartQuiz = () =>props(true)
  return (
    <Intro>
        <h1>Welcome to Quizzer</h1>
        <h2>An Quiz App consisting of 10 questions</h2><h2>based on the General Knowledge</h2>
        <Button onClick={StartQuiz} variant='gradient' size='lg' radius={15} mt={35}>Click to begin</Button>
    </Intro>
  )
}
