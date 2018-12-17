import React from "react";

class ImageSearch extends React.Component {
  state = {
    query: ""
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.query);
  };
  onInputChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default ImageSearch;
