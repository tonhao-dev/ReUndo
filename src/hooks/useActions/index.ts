import { Reducer, useReducer } from 'react';
import { truthArray } from './functions';
import { reducer } from './reducer';
import { ActionType, IReducer, IState, IUseActions } from './types';

export function useActions<Type>(): IUseActions<Type> {
  const [{ array, pointer }, dispatch] = useReducer<Reducer<IState<Type>, IReducer<Type>>>(
    reducer,
    {
      array: [],
      pointer: 0,
    }
  );

  function add(item: Type) {
    dispatch({ type: ActionType.Add, payload: item });
  }

  function undo() {
    dispatch({ type: ActionType.Undo, payload: undefined });
  }

  function reundo() {
    dispatch({ type: ActionType.Reundo, payload: undefined });
  }

  return { add, reundo, undo, array: truthArray({ array, pointer }) };
}
