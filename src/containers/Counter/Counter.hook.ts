import { decrement, increment } from './Counter.slice'
import { useDispatch, useSelector } from '@/hooks/redux'

export const useCounterActions = () => {
  const dispatch = useDispatch()

  const { counter } = useSelector(state => state.counter)

  const decrementCounter = () => dispatch(decrement())

  const incrementCounter = () => dispatch(increment())

  return {
    counter,
    onDecrementCounter: decrementCounter,
    onIncrementCounter: incrementCounter
  }
}
