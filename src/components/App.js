import React from "react";
import ImageSearch from "./ImageSearch";
import unsplash from "../api/unsplash";
import ImageGrid from "./ImageGrid";

class App extends React.Component {
  state = {
    query: "",
    images: []
  };
  onFormSubmit = async term => {
    const response = await unsplash.get("/photos", {
      params: {
        query: term
      }
    });
    console.log(response.data.results);
    this.setState({
      query: term,
      images: response.data.results
    });
  };
  render() {
    return (
      <div className="ui container">
        <ImageSearch onFormSubmit={this.onFormSubmit} />
        <div className="image-grid">
          <ImageGrid images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
