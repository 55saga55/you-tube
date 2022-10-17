import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function Videodetails({ videos }) {
  console.log(videos);
  if (!videos) {
    return <div>...Loading</div>;
  }
  //   console.log(videos.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`;
  //   console.log(videoSrc);
  return (
    <>
      <Paper elevation={6} style={{ height: "28rem" }}>
        <iframe
          frameBorder={0}
          height="100%"
          width="100%"
          title="Video player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="subtitle1">
          {videos.snippet.title} - {videos.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {videos.snippet.description}
        </Typography>
      </Paper>
    </>
  );
}
