import React from "react";
import ReactDOM from "react-dom";
import SearchValue from "./SearchValue.js";
import Header from "./Header.js";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  serverdanMalumotlarniOl = async (kalitsuz) => {
    const key = "AIzaSyBJBO1ECfSaBicIcch1b4pEtdUiEXBxuK8";

    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 20,
          key: key,
          q: kalitsuz,
        },
      }
    );
    console.log(data);
  };

  render() {
    return (
      <div className="containerBig">
        <SearchValue valueniOlibKel={this.serverdanMalumotlarniOl} />
        <Header />
        <div className="malumotlarWiew"></div>
      </div>
    );
  }
}

export default App;
