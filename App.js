import { React } from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import Videodetails from "./components/Videodetails";
import "./App.css";
import { Component } from "react";
import VideoList from "./components/VideoList";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideos: null,
  };

  componentDidMount() {
    this.handleSubmit("code with harry");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideos: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAuUEYdIvwk_Zi3ZRv4FqLiiv8PvFqcYm8",
        search: searchTerm,
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideos: response.data.items[0],
    });
  };
  render() {
    const { selectedVideos, videos } = this.setState;
    return (
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={8}>
          <Grid container spacing={10}>
            <Grid item xs={10}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={6}>
              <Videodetails videos={this.state.selectedVideos} />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
