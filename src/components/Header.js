import React from "react";

import SearchValue from "./SearchValue.js";

import "../Style.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  tema = () => {
    console.log(12);
  };

  render() {
    return (
      <>
        <div className="headerContainer">
          <div className="leftmenu">
            <i className="align justify icon " id="ulcham"></i>
            <i className="youtube icon ulcham" id="ulcham"></i>
            <b className="youtub">YOU TUBE</b>
          </div>
          <div>{/* <SearchValue /> */}</div>
          <div className="right-account" id="ulcham">
            <i className="adjust icon" id="tema" onClick={this.tema}></i>
            <i className="qrcode icon"></i>
            <i className="table icon" id="ulcham"></i>
            <i className="bell slash icon " id="ulcham"></i>
            <i className="user circle icon " id="ulcham"></i>
          </div>
        </div>
        <div className="line"></div>
      </>
    );
  }
}

//<i class="align justify icon"></i> menu
//<i class="youtube icon"></i> you tube icon
//<i class="bell icon"></i> qungiroq

//<i class="bell slash icon"></i> qungiroq no
//<i class="user circle icon"></i> account
export default Header;
