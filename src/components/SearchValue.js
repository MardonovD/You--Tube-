import React from "react";
import ReactDOM from "react-dom";
import "../Style.css";
class SearchValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchValueniOl: "",
    };
  }

  onSubmitBolganda = (e) => {
    e.preventDefault();
    this.props.valueniOlibKel(this.state.SearchValueniOl);
  };

  valueniOlTez = (event) => {
    this.setState({ SearchValueniOl: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <form className="ui category search" onSubmit={this.onSubmitBolganda}>
          <div className="ui icon input">
            <input
              onChange={this.valueniOlTez}
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}

export default SearchValue;

//<i class="align justify icon"></i> menu
//<i class="youtube icon"></i> you tube icon
//<i class="bell icon"></i> qungiroq

//<i class="bell slash icon"></i> qungiroq no
//<i class="user circle icon"></i> account
