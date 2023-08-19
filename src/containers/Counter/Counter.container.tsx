import { Button, Container, Typography } from '@mui/material'
import { useCounterActions } from './Counter.hook'

const Counter = () => {
  const { counter, onDecrementCounter, onIncrementCounter } = useCounterActions()

  return (
    <Container>
      <Typography variant="h1">Counter: {counter}</Typography>

      <Button onClick={onDecrementCounter} variant="contained">
        Decrementear
      </Button>

      <Button onClick={onIncrementCounter} variant="contained">
        Incrementear
      </Button>
    </Container>
  )
}

export default Counter
