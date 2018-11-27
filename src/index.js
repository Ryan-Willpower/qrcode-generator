import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode'
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [ uri, setUri ] = useState('')

  useEffect(() => {
    (async () => {
      setUri(await QRCode.toDataURL('https://www.google.co.th'))
    })()
  })

  return <img src={uri} alt="google" />
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
