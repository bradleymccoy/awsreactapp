import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import logo from './logo.svg';
import App from "./App.js"

import Amplify, { Analytics, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export default withAuthenticator(App, true);
ReactDOM.render(<App />, document.getElementById("root"));