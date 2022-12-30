import { Reducer, useReducer } from 'react';
import { reducer } from './reducer';
import { ActionType, IReducer, IState, IUseActions } from './types';

export function useActions<Type>(): IUseActions<Type> {
  const [state, dispatch] = useReducer<Reducer<IState<Type>, IReducer<Type>>>(reducer, {
    array: [],
    pointer: 0,
  });

  function add(item: Type) {
    dispatch({ type: ActionType.Add, payload: item });
  }

  function undo() {
    dispatch({ type: ActionType.Undo, payload: undefined });
  }

  function reundo() {
    dispatch({ type: ActionType.Reundo, payload: undefined });
  }

  return { add, reundo, undo, array: state.array };
}
