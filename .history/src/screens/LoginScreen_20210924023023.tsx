import React from "react";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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


const LoginScreen = () => {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  return(
    <Grid></Grid>

  )


}

export default LoginScreen;