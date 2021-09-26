import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { IChallenge } from "../types";
import { upVote, downVote } from "../services/dataService";

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
      padding: "0 10px",
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
    icon: {
      cursor: "pointer",
    },
  })
);

interface IProps {
  challenge: IChallenge;
  fetchChallenges: () => void;
}
const Challenge = (props: IProps) => {
  const { challenge } = props;
  const classes = useStyles();

  const restrictLength = (str: string, length: number) => {
    return str.slice(0, length) + (str.length > length ? "..." : "");
  };

  const renderTags = (tags: string[]) =>
    tags.map((tag) => (
      <Grid
        data-testid={`${challenge.id}${tag}`}
        key={tag}
        item
        className={classes.tag}
      >
        <Typography variant="body1">{tag}</Typography>
      </Grid>
    ));
  return (
    <Grid
      container
      item
      key={challenge.id}
      data-testid={`challenge${challenge.id}`}
      xs={12}
      md={5}
      lg={4}
      className={classes.wrapper}
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography variant="h4">
        {restrictLength(challenge.title, 17)}
      </Typography>
      <Typography variant="body1">
        {restrictLength(challenge.description, 300)}
      </Typography>
      <Grid direction="row" container justifyContent="center">
        <Typography variant="body1">{`Created at: ${" "}`}</Typography>
        <Typography variant="body1">
          {new Date(challenge.createdAt).toLocaleString()}
        </Typography>
      </Grid>
      <Grid direction="row" container justifyContent="center" spacing={1}>
        <Grid item container xs={6} direction="row" justifyContent="flex-end">
          <Box data-testid={`thumbup${challenge.id}`}>
            <ThumbUpIcon
              className={classes.icon}
              onClick={() => {
                upVote(challenge.id);
                props.fetchChallenges();
              }}
            />
          </Box>
          <Typography data-testid={`upvotes${challenge.id}`} variant="body1">
            {challenge.upVotes}
          </Typography>
        </Grid>
        <Grid item container xs={6} direction="row" justifyContent="flex-start">
          <Box>
            <ThumbDownIcon
              className={classes.icon}
              onClick={() => {
                downVote(challenge.id);
                props.fetchChallenges();
              }}
            />
          </Box>

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
