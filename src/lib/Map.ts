
export enum GameDirection {
  UP = 0,
  DOWN = 1,
  LEFT = 2,
  RIGHT = 3,
  NONE = 4,
}

const GameDirectionToKeys = (direction: GameDirection): string => {

  switch (direction) {
    case GameDirection.UP: return 'up';
    case GameDirection.DOWN: return 'down';
    case GameDirection.LEFT: return 'left';
    case GameDirection.RIGHT: return 'right';
    default: return 'none';
  }
};

export { GameDirectionToKeys };

export const GameDirectionMap:GameDirectionMap = {
  up: GameDirection.UP,
  down: GameDirection.DOWN,
  left: GameDirection.LEFT,
  right: GameDirection.RIGHT,
  none: GameDirection.NONE,
};
    
export enum GameBoardPieceType {
  WALL = 0,
  EMPTY = 1,
}
    
export enum GameBoardItemType {
  EMPTY = 0,
  PACMAN = 1,
}

export enum GameBoardPieceDirection {
  UP = 1,
  LEFT = 2,
  DOWN = 3,
  RIGHT = 4,
}

export enum GameMode {
  WAITING = 0,
  PLAYING = 1,
  FINISHED = 2  
}