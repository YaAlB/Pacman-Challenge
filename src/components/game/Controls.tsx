import React, { useState} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import store from '../../redux/store';
import { initGame } from '../../redux/actions';

interface ControlProps {
  PacmanStore?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  score: {
    color: '#dd0',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  lineDir: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    marginBottom: theme.spacing(1)
  }
}));

const xy = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
];

const directions = [
  {
    label: 'North',
    value: 'NORTH',
  },
  {
    label: 'South',
    value: 'SOUTH',
  },
  {
    label: 'East',
    value: 'EAST',
  },
  {
    label: 'West',
    value: 'WEST',
  },
];

const Controls: React.FC<ControlProps> = ({PacmanStore}): JSX.Element => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [dir, setDirection] = useState('WEST');
  const styles = useStyles({});

  const handleNewGame = ():void => {
    store.dispatch(initGame(x, y, dir));
  };

  const handleReport = ():void => {
    alert(`${PacmanStore.piece.x  },${  PacmanStore.piece.y  },${  PacmanStore.compassDirection}`);
  };
  
  const handleChangeX = (e: any):void => {
    setX(Number(e.target.value));
  };

  const handleChangeY = (e: any):void => {
    setY(Number(e.target.value));
  };

  const handleChangeDirection = (e: any):void => {
    setDirection(String(e.target.value));
  };

  return (
    <>
      <div className={styles.score}>
        <Typography variant="body1">
          <b>X-Axis:</b>
          <div className="select-container">
            <select value={x} onChange={handleChangeX}>
              {xy.map(axis => (
                <option value={axis.value}>{axis.label}</option>
              ))}
            </select>
          </div>
        </Typography>
        <Typography variant="body1">
          <b>Y-Axis:</b>
          <div>
            <div className="select-container">
              <select value={y} onChange={handleChangeY}>
                {xy.map(axis => (
                  <option value={axis.value}>{axis.label}</option>
                ))}
              </select>
            </div>
          </div>
        </Typography>
        <Typography variant="body1">
          <b>Direction:</b>
          <div>
            <div className="select-container">
              <select value={dir} onChange={handleChangeDirection}>
                {directions.map(direction => (
                  <option value={direction.value}>{direction.label}</option>
                ))}
              </select>
            </div>
          </div>
        </Typography>
      </div>

      <Button
        onClick={handleNewGame}
        className={styles.button}
        fullWidth
        color="primary"
        variant="contained"
      >
        Place
      </Button>
      <Button
        onClick={handleReport}
        className={styles.button}
        disabled={PacmanStore.compassDirection === null}
        fullWidth
        variant="contained"
      >
        Report
      </Button>
    </>
  );
};

const mapStateToProps = (state: ReduxState): object => {
 
  const { PacmanStore } = state.game;

  return { PacmanStore };
};

export default connect(mapStateToProps)(Controls);