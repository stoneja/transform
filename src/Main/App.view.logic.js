import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    isMain: true,
    isApply: false,
  }

  render() {
    return (
      <App
        {...this.props}
        {...this.state}
        next={() => {
          this.setState({
            isMain: false,
            isApply: true,
          })
        }}
      />
    )
  }
}
