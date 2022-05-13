import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { MoralisProvider } from 'react-moralis';
import store from 'redux/store';
import reportWebVitals from './reportWebVitals';
import 'assets/styles/index.css';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <MoralisProvider appId='MLKkxpQBFAry1TNtRJ3CFAhpjSDHZJKHakE40EM7' serverUrl='https://nkjcf0mpwrkw.usemoralis.com:2053/server'>
          <App />
        </MoralisProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
