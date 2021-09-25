import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Challenge from '../components/Challenge';
import useChallengeService from './useChallengesService';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  wrapper: {
    // margin: 'auto'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  challengesContainer: {
    flexGrow: 1,
    // display:'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap'
  },
}));

interface IProps {

}

const HomeScreen = (props:IProps) => {
  const classes = useStyles();
  const challenges = useChallengeService();

  const renderChallenges = () => challenges.map((challenge) => <Challenge key={challenge.id} challenge={challenge} />);
  return (
    <Grid container className={classes.root}>
      <Grid justifyContent="center" className={classes.wrapper} item container xs={12}>
        <Typography variant="h3">All Challenges</Typography>
      </Grid>
      <Grid direction="row" className={classes.challengesContainer} container justifyContent="center">
        {renderChallenges()}
      </Grid>
    </Grid>

  );
};

export default HomeScreen;
