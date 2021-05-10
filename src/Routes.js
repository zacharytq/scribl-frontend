import React from 'react';

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const NewScribl = () => {
  return (
    <h1>New Scribl</h1>
  )
}

const Scribls = () => {
  return (
    <h1>My Scribls</h1>
  )
}

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/newscribl',
    sidebarName: 'New Scribl',
    component: NewScribl
  },
  {
    path: '/scribls',
    sidebarName: 'My Scribls',
    component: Scribls
  }
]

export default Routes;
