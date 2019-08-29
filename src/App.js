import React from 'react';
import logo from './logo.svg';
import './App.css';

//adding amplify library and storage components
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
Amplify.configure(awsconfig);

//Adding react component for form
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
 }
}

function App() {
    Storage.put('test.txt', 'Hello')
    .then (result => console.log(result)) // {key: "test.txt"}
    .catch(err => console.log(err));
  function NameForm() {
      return(
             <form onSubmit={this.handleSubmit}>
               <label>
                 Student Name:
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <label>
                 Bus Route:
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <textarea>

               </textarea>
               <input type="submit" value="Submit" />
              </form>
             );
      }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Student Form
        </p>
        <div className="NameForm">
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);

