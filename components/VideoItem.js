import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  return (
    <Grid item xs={12}>
      {video.map((value, index) => {
        return (
          <>
            <Paper
              stylr={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => onVideoSelect(value.id.videoId)}
            >
              <img
                style={{ marginRight: "20px" }}
                alt="thumbnail"
                src={value.snippet.thumbnails.medium.url}
              />
              <Typography variant="subtitle1">
                <b>{value.snippet.title}</b>
              </Typography>
            </Paper>
          </>
        );
      })}
    </Grid>
  );
};
