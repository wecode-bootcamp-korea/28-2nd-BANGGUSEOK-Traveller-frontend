import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <GlobalStyle>
    <Router />
  </GlobalStyle>,
  document.getElementById('root')
);
