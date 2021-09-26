/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Pacman from '../../common/Pacman';

interface ItemProps {
  item: GameBoardItem;
}

const useStyles = makeStyles(() => ({
  '@keyframes blinker': {
    from: {color: '#fff'},
    to: {color: '#dd0'}
  },
  super: {
    animationName: '$blinker',
    animationDuration: '.5s',
    animationTimingFunction: 'linear',
    animationIterationCount:'infinite',
  }
}));

const Item: React.FC<ItemProps> = ({item}): JSX.Element => {
  
  const styles = useStyles({});

  return (
    <Pacman className={classNames(styles.super)} />
  );
};

export default Item;