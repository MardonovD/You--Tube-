import React from "react";

import SearchValue from "./SearchValue.js";
import Header from "./Header.js";
import DetailsViews from "./DetailsViews.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpKey: "",
      videos: [],
      accoutImage: [],
    };
  }

  serverdanMalumotlarniOl = async (kalitsuz) => {
    const key = "AIzaSyBJBO1ECfSaBicIcch1b4pEtdUiEXBxuK8";

    let channelData = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet",
          id: "UCyLicD9UtfSo5t5_wPT7WHQ",
          key: key,
        },
      }
    );
    this.setState({ accoutImage: channelData });

    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 49,
          key: key,
          q: kalitsuz,
        },
      }
    );

    this.setState({ videos: data });
  };

  render() {
    return (
      <div className="containerBig">
        <SearchValue valueniOlibKel={this.serverdanMalumotlarniOl} />
        <Header />
        <div className="malumotlarWiew">
          <DetailsViews ekrangaChiqarish={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
