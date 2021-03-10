import React from 'react';

import { ReactComponent as Logo } from './logo.svg';
import { StyledApp } from './App.styled';
import { IntlProvider } from 'react-intl';
import { Main } from './Main';
import locEN from '../locale/en.json';
import locNL from '../locale/nl.json';

const currentLocale = navigator.language;
const getMessages = (locale) => {
  console.debug(locale);
  switch (locale) {
    case 'en':
      return locEN;
    case 'nl':
      return locNL;
  }
};

export function App() {
  return (
    <IntlProvider locale={currentLocale} messages={getMessages(currentLocale)}>
      <StyledApp>
        <header className="flex">
          <Logo width="75" height="75" />
          <h1>Welcome to app!</h1>
        </header>
        <Main />
      </StyledApp>
    </IntlProvider>
  );
}

export default App;
