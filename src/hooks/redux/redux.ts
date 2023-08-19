import {
  type TypedUseSelectorHook,
  useDispatch as BaseUseDispatch,
  useSelector as BaseUseSelector
} from 'react-redux'
import type { RootState, Dispatch } from '@/redux'

export const useDispatch: () => Dispatch = BaseUseDispatch

export const useSelector: TypedUseSelectorHook<RootState> = BaseUseSelector
