import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qrUri: ''
    }
  }

  componentDidMount = async () => {
    this.setState({
      qrUri: await this.generateQR('https://www.google.co.th')
    })
    console.log(this.state.qrUri)
  }

  generateQR = async text => {
    try {
      let qrUri = await QRCode.toDataURL(text)
      return qrUri
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return <img src={this.state.qrUri} alt="eiei" />
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
