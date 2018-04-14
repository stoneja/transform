/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars */
import React from 'react';

import { css } from 'react-emotion';

const App_hwzx0an = css({
  alignItems: 'center',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
  justifyContent: 'center',
});
const Text_hvpf4iv = css({ fontSize: 18 });

const App = props => {
  return (
    <div
      data-test-id={`${props['data-test-id'] || 'App'}|`}
      className={`views-block ${App_hwzx0an}`}
    >
      <span
        data-test-id={`App.Text|`}
        className={`views-block ${Text_hvpf4iv}`}
      >
        {props.text}
      </span>
      {props.children}
    </div>
  );
};

App.defaultProps = { text: 'Hello Views Tools!' };
export default App;
