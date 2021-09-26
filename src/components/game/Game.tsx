import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { tic } from '../../redux/actions';
import GameBoard from './Board';
import Controls from './Controls';

interface GameProps {
  dispatch: Function;
  layout?: GameBoardPiece[][];
};

const useStyles = makeStyles((theme: Theme) => ({
  base: {
    marginBottom: theme.spacing(2),
  },
}));

const Game: React.FC<GameProps> = ({ dispatch, layout }): JSX.Element => {
  
  const styles = useStyles({});

  useEffect(() => {
    setInterval(() => {dispatch(tic());}, 250);
  }, [dispatch]);
  
  return (
    <Grid container alignContent="center" justify="center" className={styles.base} spacing={3}>
      <Grid item>
        <GameBoard boardState={layout} />
      </Grid>
      <Grid item>
        <Controls />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: ReduxState): object => {
 
  const { layout } = state.game;

  return { layout };
};

export default connect(mapStateToProps)(Game);