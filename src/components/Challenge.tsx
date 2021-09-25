import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { IChallenge } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
    },
    wrapper: {
      height: "300px",
      border: "1px solid",
      borderColor: theme.palette.primary.main,
      margin: "15px",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    tag: {
      margin: "0 5px",
    },
  })
);

interface IProps {
  challenge: IChallenge;
}
const Challenge = (props: IProps) => {
  const { challenge } = props;
  const classes = useStyles();
  const renderTags = (tags: string[]) =>
    tags.map((tag) => (
      <Grid key={tag} item className={classes.tag}>
        <Typography data-testid={`${challenge.id}${tag}`} variant="body1">
          {tag}
        </Typography>
      </Grid>
    ));
  return (
    <Grid
      container
      item
      key={challenge.id}
      xs={12}
      md={5}
      lg={4}
      className={classes.wrapper}
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography variant="h4">{challenge.title}</Typography>
      <Typography variant="body1">{challenge.description}</Typography>
      <Grid direction="row" container justifyContent="center">
        <Typography variant="body1">Created at:</Typography>
        <Typography variant="body1">{challenge.createdAt}</Typography>
      </Grid>
      <Grid direction="row" container justifyContent="center">
        <Grid item container xs={6} direction="row" justifyContent="flex-end">
          <ThumbUpIcon />
          <Typography data-testid={`upvotes${challenge.id}`} variant="body1">
            {challenge.upVotes}
          </Typography>
        </Grid>
        <Grid item container xs={6} direction="row" justifyContent="flex-start">
          <ThumbDownIcon />
          <Typography data-testid={`downvotes${challenge.id}`} variant="body1">
            {challenge.downVotes}
          </Typography>
        </Grid>
      </Grid>
      <Grid direction="row" container justifyContent="center">
        <Typography variant="body1">Created by:</Typography>
        <Typography variant="body1">{challenge.createdBy}</Typography>
      </Grid>

      <Grid container item justifyContent="center" alignItems="center">
        <Typography variant="body1">Tags:</Typography>{" "}
        {renderTags(challenge.tags)}
      </Grid>
    </Grid>
  );
};

export default Challenge;
