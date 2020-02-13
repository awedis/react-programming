import React from 'react';
import Pro_1 from './components/Pro_1';
import Pro_2 from './components/Pro_2';
import Pro_3 from './components/Pro_3';
import Pro_4 from './components/Pro_4';
import Pro_5 from './components/Pro_5';
import Pro_6 from './components/Pro_6';
import Pro_7 from './components/Pro_7';
import Pro_8 from './components/Pro_8';
import Pro_9 from './components/Pro_9';
import Pro_10 from './components/Pro_10';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      {/* <Pro_1 />
      <Pro_2 />
      <Pro_3 />
      <Pro_4 />
      <Pro_5 />
      <Pro_6 />
      <Pro_7 />
      <Pro_8 /> */}
      {/* <Pro_9 /> */}

      <ErrorBoundary>
        <Pro_10 heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Pro_10 heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Pro_10 heroName="Joker" />
      </ErrorBoundary>


    </div>
  );
}

export default App;
