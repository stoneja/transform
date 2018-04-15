import { CustomerAccounts } from '../BlueBank.js'
import Spinner from './Spinner.js'
import React from 'react'
import Apply from './Apply.view.js'
import makeFormat from 'format-number'

const getChoiceAsNumber = ({ is0, is25, is50, is75, is100 }) =>
  is100 ? 100 : is75 ? 75 : is50 ? 50 : is25 ? 25 : 0

const calculateNumber = (n, index) => {
  return index === 0
    ? (100 - n) / 10 * 1.05
    : index === 1
      ? n * 9.875
      : index === 2
        ? (100000 * (1 + n / 9989)) ^ 10
        : n
}

const format = makeFormat({ truncate: 2 })

const getScores = ({ from }) => {
  return from
    .map((number, index) => ({
      id: index,
      title: number.title,
      number: format(calculateNumber(getChoiceAsNumber(number), index)),
    }))
    .filter(item => item.title)
}

const getVariants = index => {
  switch (index) {
    case 0:
      return {
        title: 'Rate',
        is0: false,
        is25: true,
        is50: false,
        is75: false,
        is100: false,
      }

    case 1:
      return {
        title: 'Setup fee',
        is0: false,
        is25: false,
        is50: false,
        is75: true,
        is100: false,
      }

    case 2:
      return {
        title: 'Repayment amount',
        is0: false,
        is25: false,
        is50: false,
        is75: false,
        is100: true,
      }

    default:
      return {
        title: null,
        is0: false,
        is25: false,
        is50: false,
        is75: false,
        is100: true,
      }
  }
}

const getFrom = props =>
  props.accounts.map((account, index) => ({
    id: account.id,
    text: `${account.accountFriendlyName} (€ ${account.accountBalance})`,
    ...getVariants(index),
  }))

class ApplyLogic extends React.Component {
  state = {
    isOptIn: false,
    from: getFrom(this.props),
  }

  static getDerivedStateFromProps(next) {
    return {
      from: getFrom(next),
    }
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
      isOptIn: !this.state.isOptIn,
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

const AccountLogic = props => (
  <CustomerAccounts id={props.customer.id}>
    {({ data, error, fetching }) => {
      if (fetching) return <Spinner width="100%" />

      const accounts =
        data && data.results
          ? data.results
          : [
              {
                id: 1,
                accountFriendlyName: 'Current A/c 1',
                accountBalance: 5010,
              },
              {
                id: 2,
                accountFriendlyName: 'Current A/c 2',
                accountBalance: 15300,
              },
              {
                id: 3,
                accountFriendlyName: 'Current A/c 3',
                accountBalance: 34020,
              },
            ]
      return <ApplyLogic {...props} accounts={accounts} />
    }}
  </CustomerAccounts>
)
export default AccountLogic
