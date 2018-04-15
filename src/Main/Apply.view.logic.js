import React from 'react'
import Apply from './Apply.view.js'

const getChoiceAsNumber = ({ is0, is25, is50, is75, is100 }) =>
  is100 ? 100 : is75 ? 75 : is50 ? 50 : is25 ? 25 : 0

const getScores = ({ from }) => {
  return from.map((number, index) => ({
    id: index,
    text: (100 - getChoiceAsNumber(number)) / 100,
  }))
}

export default class ApplyLogic extends React.Component {
  state = {
    isOptIn: false,
    from: [
      {
        id: 'row1',
        text: 'Current A/c 1',
        is0: false,
        is25: true,
        is50: false,
        is75: false,
        is100: false,
      },

      {
        id: 'row2',
        text: 'Current A/c 2',
        is0: false,
        is25: false,
        is50: false,
        is75: true,
        is100: false,
      },

      {
        id: 'row3',
        text: 'Current A/c 3',
        is0: false,
        is25: false,
        is50: false,
        is75: false,
        is100: true,
      },
    ],
  }

  select0 = id => {
    this.setState({
      from: this.state.from.map(
        item =>
          item.id === id
            ? {
                ...item,
                is0: true,
                is25: false,
                is50: false,
                is75: false,
                is100: false,
              }
            : item
      ),
    })
  }

  select25 = id => {
    this.setState({
      from: this.state.from.map(
        item =>
          item.id === id
            ? {
                ...item,
                is0: false,
                is25: true,
                is50: false,
                is75: false,
                is100: false,
              }
            : item
      ),
    })
  }

  select50 = id => {
    this.setState({
      from: this.state.from.map(
        item =>
          item.id === id
            ? {
                ...item,
                is0: false,
                is25: false,
                is50: true,
                is75: false,
                is100: false,
              }
            : item
      ),
    })
  }

  select75 = id => {
    this.setState({
      from: this.state.from.map(
        item =>
          item.id === id
            ? {
                ...item,
                is0: false,
                is25: false,
                is50: false,
                is75: true,
                is100: false,
              }
            : item
      ),
    })
  }

  select100 = id => {
    this.setState({
      from: this.state.from.map(
        item =>
          item.id === id
            ? {
                ...item,
                is0: false,
                is25: false,
                is50: false,
                is75: false,
                is100: true,
              }
            : item
      ),
    })
  }

  toggleOptIn = () => {
    this.setState({
      isOptIn: !this.state.isOptIn
    })
  }

  render() {
    return (
      <Apply
        {...this.props}
        {...this.state}
        select0={this.select0}
        select25={this.select25}
        select50={this.select50}
        select75={this.select75}
        select100={this.select100}
        scores={getScores(this.state)}
        toggleOptIn={this.toggleOptIn}
      />
    )
  }
}