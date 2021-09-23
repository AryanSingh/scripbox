import React from "react";
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

  ret


}

export default LoginScreen;