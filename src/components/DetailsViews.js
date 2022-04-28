import React from "react";

import "../Style.css";
class DetailsViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.ekrangaChiqarish.data?.items.map((val) => {
      console.log(val);
      return (
        <div className="container2">
          <div className="imageLeft">
            <img src={val.snippet.thumbnails.medium.url} />
          </div>
          <div className="content">
            <a className="header">{val.snippet.title}</a>
            <div className="meta">
              <span className="date">{val.snippet.channelTitle}</span>
            </div>
            <div className="description">{val.snippet.publishTime}</div>
            <div>{val.snippet.description}</div>
          </div>
        </div>

        // <div className="cardContainer">
        //   <div className="ui card">
        //     <div className="image">
        //       <img src={val.snippet.thumbnails.default.url} />
        //     </div>
        //     <div className="content">
        //       <a className="header">{val.snippet.title}</a>
        //       <div className="meta">
        //         <span className="date">{val.snippet.channelTitle}</span>
        //       </div>
        //       <div className="description">{val.snippet.publishTime}</div>
        //     </div>
        //     <div className="extra content">
        //       <div>
        //         {/* <i className="user icon"></i> */}
        //         <img
        //           className="imageAccount"
        //           src={val.snippet.thumbnails.default.url}
        //           alt="rasm bor"
        //         />
        //         22 Friends
        //       </div>
        //     </div>
        //   </div>
        // </div>
      );
    });
  }
}

export default DetailsViews;
