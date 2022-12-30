import { add, reundo, undo } from './functions';
import { IState } from './types';

describe('hooks/useActions', () => {
  it('Should add an item in items array', () => {
    const array = [1, 2, 3];
    const item = 4;

    const state: IState<number> = {
      array,
      pointer: 3,
    };

    expect(add(state, item)).toEqual({
      array: [1, 2, 3, 4],
      pointer: 4,
    });
  });

  it('Should add an item in array after undo', () => {
    const array = [1, 2, 3, 4];
    const item = 5;

    const state: IState<number> = {
      array,
      pointer: 4,
    };

    expect(add(undo(state), item)).toEqual({
      array: [1, 2, 3, 5],
      pointer: 4,
    });
  });

  it('Should not make anything after undo on empty list', () => {
    const state: IState<number> = {
      array: [],
      pointer: 0,
    };

    expect(undo(state)).toEqual(state);
  });

  it('Should undo an item', () => {
    const array = [1, 2, 3];

    const state: IState<number> = {
      array,
      pointer: 3,
    };

    expect(undo(state)).toEqual({
      array: [1, 2, 3],
      pointer: 2,
    });
  });

  it('Should making anything after re undo an state with pointer in the length of list', () => {
    const state: IState<number> = {
      array: [1, 2, 3],
      pointer: 3,
    };

    expect(reundo(state)).toEqual(state);
  });

  it('Should re undo an item', () => {
    const array = [1, 2, 3];

    const state: IState<number> = {
      array,
      pointer: 3,
    };

    expect(reundo(undo(state))).toEqual(state);
  });
});
