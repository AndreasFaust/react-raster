import React, { useState } from 'react'
import Header from './header'

import './scss/reset.scss'
import './index.scss'

const Layout = ({
  location, data, children
}) => {
  return (
    <>
      {children}
      <Header />
    </>
  )
}

export default Layout
