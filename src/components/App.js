import React from "react";
import ReactDOM from "react-dom";
import SearchValue from "./SearchValue.js";
import Header from "./Header.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div className="containerBig">
        {/* <SearchValue /> */}
        <Header />
        <div className="malumotlarWiew">
          
        </div>
      </div>
    );
  }
}

export default App;
