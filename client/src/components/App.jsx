import React, { useState } from "react";
import ReactDOM from "react-dom";

// AXIOS
import { get } from "lodash";
import axios from "axios";
import API from "../util/utils.js";

// COMPONENTS
import CowList from "./CowList.jsx";
import CowListEntry from "./CowListEntry.jsx";
import Description from "./Description.jsx";
import Form from "./Form.jsx";
import Button from "./Button.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      clickedCow: {},
      wasCowClicked: false,
    };
    this.onClick = this.onClick.bind(this);
    // Q: this.getCows = this.getCows.bind(this); ??
  }

  // Q: life cycle methods
  componentDidMount() {
    this.getCows();
  }

  getCows() {
    return axios
      .get("/api/cows")
      .then(({ data }) => {
        this.setState({ cows: data, clickedCow: data.name });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // make axios post request
  //   handleFormSubmit() {}

  onClick(cow) {
    this.setState({
      clickedCow: cow,
      wasCowClicked: true,
    });
  }

  render() {
    if (this.state.wasCowClicked) {
      return (
        <div>
          <h1>Cow List</h1>
          <Description clickedCow={this.state.clickedCow} />
          {/** search */} {/** button */}
          <CowList
            cows={this.state.cows}
            onClick={this.onClick}
            clickedCow={this.state.clickedCow}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Cow List</h1>
          {/**<Description clickedCow={this.state.clickedCow} />*/}
          {/** search */} {/** button */}
          <CowList
            cows={this.state.cows}
            onClick={this.onClick}
            clickedCow={this.state.clickedCow}
          />
        </div>
      );
    }
  }
}

export default App;
