import React from 'react'
import Accountrow from './Accountrow.view.js'

export default class AccountrowLogic extends React.Component {
  select0 = () => {
    this.props.select0(this.props.id)
  }

  select25 = () => {
    this.props.select25(this.props.id)
  }

  select50 = () => {
    this.props.select50(this.props.id)
  }

  select75 = () => {
    this.props.select75(this.props.id)
  }

  select100 = () => {
    this.props.select100(this.props.id)
  }

  render() {
    return (
      <Accountrow
        {...this.props}
        {...this.state}
        select0={this.select0}
        select25={this.select25}
        select50={this.select50}
        select75={this.select75}
        select100={this.select100}
      />
    )
  }
}
