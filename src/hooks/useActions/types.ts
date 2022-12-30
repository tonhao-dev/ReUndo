export enum ActionType {
  Add = 'add',
  Undo = 'undo',
  Reundo = 'reundo',
}

export interface IReducer<T> {
  type: ActionType;
  payload: undefined | T;
}

export interface IState<T> {
  array: T[];
  pointer: number;
}

export interface IUseActions<T> {
  array: IState<T>['array'];
  add: (item: T) => void;
  undo: () => void;
  reundo: () => void;
}
