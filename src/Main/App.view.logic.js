import { Customers, Provider } from '../BlueBank.js'
import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    isMain: true,
    isApply: false,
  }

  next = () => {
    this.setState({
      isMain: false,
      isApply: true,
    })
  }

  render() {
    return (
      <Provider
        apiKey="e204109fd8e6450e9bfe1314ac997a44"
        userToken="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MjM3OTE0MjIsIm5iZiI6MTUyMzc4NzgyMiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6IjQ0OTc2MjgwLTRkNzgtNDhmZi05MzZkLTBjYjkyOGM5ZDI5NiIsImF1ZCI6IjQwOTU3YjljLTYzYmMtNGFiNC05ZWNiLTY3YjU0M2M4ZTRjYSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNTIzNzg3ODIyLCJhdXRoX3RpbWUiOjE1MjM3ODc4MjIsIm9pZCI6IjQ0OTc2MjgwLTRkNzgtNDhmZi05MzZkLTBjYjkyOGM5ZDI5NiIsIm5hbWUiOiJTdW1tZXIgV2ludGVycyIsImZhbWlseV9uYW1lIjoiV2ludGVycyIsImdpdmVuX25hbWUiOiJTdW1tZXIiLCJlbWFpbHMiOlsic3VtbWVyd2ludGVyc0B1eHRlbXBsZS5jb20iXSwidGZwIjoiQjJDXzFfQmx1ZUJhbmtTVVNJIn0.ZeBuN0msXO8zXUZAr53ltdNG8OSFwcRXiIp4qYFhbus6zP5BizpKYR5UmjRqcP_cqQLoT8SQaskZEcv7pLllyvzwGBGMLS8S_vBE0Js1gPOZ0KIT2YKPhw89PyvBurpPjo0LaiNaK7Ww9sDguV2V-RBFVZuHrACUqfcziw97jC2Mle-tRvqJYNJK6SNkphYsmVGPW4i9IoNXXSWa0UmkfAR90GzMx8K_2G0hL5657Xzht7q_ZkXOHrwvUSRkAO0C8ciTqNEbEDuNEmgVkN1uWdmpjHsrrpWE_yAjDRTST6ek2ytOSbOJxkHIGmUbjn-_IoOFjU56oSqFjectLYAseQ"
      >
        <Customers>
          {({ data, error, fetching }) => {
            const customer = data && data.results && data.results[0]

            return (
              <App
                {...this.props}
                {...this.state}
                customer={customer}
                next={this.next}
              />
            )
          }}
        </Customers>
      </Provider>
    )
  }
}
