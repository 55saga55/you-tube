import React from "react";
import { Grid } from "@material-ui/core";
import { VideoItem } from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  /*  console.log(videos);
  console.log(onVideoSelect); */
  const listOfVid = videos.map((value, id) => (
    <VideoItem key={id} video={videos} onVideoSelect={onVideoSelect} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVid}
    </Grid>
  );
};
export default VideoList;
