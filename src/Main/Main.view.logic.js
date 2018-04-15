import Main from './Main.view.js'
import React from 'react'

const MainLogic = ({ customer, ...props }) => <Main {...customer} {...props} />
export default MainLogic
