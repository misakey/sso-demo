import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useMisakeyAuth } from "@misakey/sdk";

/** Copy this snippet in the config part of your app */
const authConfig = {
  clientId: 'e3519bcb-a898-4fe9-952d-fe3b87b2ebde',
  redirectUri: 'https://demo.sso.misakey.com/callback',
  buttonPlacement: 'top-right',
  userInfoRequirement: ['email', 'name', 'phone'],
}

function App() {
  /** Copy this snippet into your root component */
  const { isAuthCallback, isAuthenticated, userProfile } = useMisakeyAuth(authConfig);
  if (isAuthCallback) { return null; }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isAuthenticated ? (
            `Hello ${userProfile.name}`
          ) : (
            'Hello stranger, please signin !'
          )}
        </p>
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

export default App;
