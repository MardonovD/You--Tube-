import React from "react";
import ReactDOM from "react-dom";

class DetailsViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // olibKeldi = () => {
  //   console.log(this.props.ekrangaChiqarish);
  //   this.props.ekrangaChiqarish.data?.items.map((val) => {
  //     console.log(val);
  //   });
  // };

  render() {
    return this.props.ekrangaChiqarish.data?.items.map((val) => {
      console.log(val);
      return (
        <div className="cardContainer">
          <div className="ui card">
            <div className="image">
              <img src={val.snippet.thumbnails.default.url} />
            </div>
            <div className="content">
              <a className="header">{val.snippet.title}</a>
              <div className="meta">
                <span className="date">Joined in 2013</span>
              </div>
              <div className="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default DetailsViews;
// return (
// <div className="cardContainer">
//   <div className="ui card">
//     <div className="image">
//       <img src="/images/avatar2/large/kristy.png" />
//     </div>
//     <div className="content">
//       <a className="header">Kristy</a>
//       <div className="meta">
//         <span className="date">Joined in 2013</span>
//       </div>
//       <div className="description">
//         Kristy is an art director living in New York.
//       </div>
//     </div>
//     <div className="extra content">
//       <a>
//         <i className="user icon"></i>
//         22 Friends
//       </a>
//     </div>
//   </div>
// </div>
// );

// class DetailsViews extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default DetailsViews;
