import React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {IChallenge} from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh'
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);



interface IProps{
  challenge: IChallenge
}
const Challenge = (props:IProps) => {
  const {challenge} = props;
  const classes = useStyles();
  return(
    <Grid item xs={12} className={classes.wrapper}>
      <Typography variant='body1'>
        {challenge.title}
      </Typography>
      <Typography variant='body1'>
        {challenge.description}
      </Typography>
    </Grid>
  )

}

export default Challenge;