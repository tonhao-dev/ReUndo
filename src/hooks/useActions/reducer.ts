import { IReducer, IState } from './types';
import * as functions from './functions';

export function reducer<Type>(state: IState<Type>, action: IReducer<Type>): IState<Type> {
  const { type, payload } = action;
  return functions[type](state, payload as Type);
}
