// import React, { useState, useEffect } from "react";
// import { get, create } from "lodash";
// import axios from "axios";

// // COMPONENTS
// import CowList from "./CowList.jsx";
// import Description from "./Description.jsx";
// import Form from "./Form.jsx";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cows: [],
//       clickedCow: {},
//       wasCowClicked: false,
//     };
//     this.onClick = this.onClick.bind(this);
//     this.createCow = this.createCow.bind(this);
//   }

//   // Q: LIFE CYCLE METHODS
//   componentDidMount() {
//     this.getCows();
//   }

//   // REQUESTS
//   getCows() {
//     return axios
//       .get("/api/cows")
//       .then(({ data }) => {
//         this.setState({ cows: data });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   createCow(name, description) {
//     return axios
//       .post("/api/cows", {
//         name: name,
//         description: description,
//       })
//       .then(() => {
//         return this.getCows();
//       })
//       .catch((err) => console.error(err));
//   }

//   // EVENT HANDLERS
//   onClick(cow) {
//     this.setState({
//       clickedCow: cow,
//       wasCowClicked: true,
//     });
//   }

//   render() {
//     if (this.state.wasCowClicked) {
//       return (
//         <div>
//           <Description clickedCow={this.state.clickedCow} />
//           <Form createCow={this.createCow} />
//           <CowList cows={this.state.cows} onClick={this.onClick} />
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>Cow List</h1>
//           <Form createCow={this.createCow} />
//           <CowList cows={this.state.cows} onClick={this.onClick} />
//         </div>
//       );
//     }
//   }
// }

// export default App;
