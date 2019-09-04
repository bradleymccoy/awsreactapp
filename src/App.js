import React from 'react';
import logo from './logo.svg';
import './App.css';

//adding amplify library and storage components
import Amplify, { Analytics, Storage } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



function App() {

    uploadFile = (evt) => {
        const file = evt.target.files[0];
        const name = file.name;

        Storage.put(name, file).then(() => {
          this.setState({ file: name });
        })
      }

     function componentDidMount() {
        Analytics.record('Amplify_CLI');
      }

    return (
        <div id="container" className="App">
          <p> Pick a file</p>
          <input type="file" onChange={this.uploadFile} />
          <S3Album level="private" path='' />
        </div>
        );

};

export default withAuthenticator(App, true);