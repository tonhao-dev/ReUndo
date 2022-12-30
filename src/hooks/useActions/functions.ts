import { IState } from './types';

export function truthArray<Type>({ array, pointer }: IState<Type>): Type[] {
  return array.slice(0, pointer);
}

export function add<Type>(state: IState<Type>, item: Type): IState<Type> {
  return {
    array: [...truthArray(state), item],
    pointer: state.pointer + 1,
  };
}

export function undo<Type>(state: IState<Type>): IState<Type> {
  if (state.pointer === 0) return state;

  return {
    ...state,
    pointer: state.pointer - 1,
  };
}

export function reundo<Type>(state: IState<Type>): IState<Type> {
  if (state.pointer + 1 > state.array.length) return state;

  return {
    ...state,
    pointer: state.pointer + 1,
  };
}
