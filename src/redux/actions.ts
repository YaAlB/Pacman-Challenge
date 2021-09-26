export enum ActionTypes {
  SET_ITEMS = 0,
  TIC = 1,
  INIT = 2,
}

export const initGame = (x: number, y: number, dir: string) => ({
  type: ActionTypes.INIT,
  payload: { x, y, dir}
});

export const setItems = (items:GameBoardItem[][]) => ({
  type: ActionTypes.SET_ITEMS,
  payload: {
    items
  }
});

export const tic = () => ({
  type: ActionTypes.TIC,
  payload: {}
});