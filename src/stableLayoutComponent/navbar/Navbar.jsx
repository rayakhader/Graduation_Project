import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useToken } from '../../globalContext/TokenContext'
import NavbarUser from './navbarUser/NavbarUser'
import NavbarGuest from './navbarGuest/NavbarGuest'

function Navbar() {
    const {token}=useToken()

  return (
    token ? <NavbarUser /> : <NavbarGuest />
  )
}

export default Navbar
