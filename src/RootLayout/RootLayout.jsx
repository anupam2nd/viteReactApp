import React from 'react';
import './RootLayout.css'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav';

export default function RootLayout() {
  return (
    <div className="container-fluid layout">
        <Nav />
        <Outlet />
    </div>
  )
}
