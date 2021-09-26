import React from 'react';
import About from '../components/About/About';
import Dialogs from '../components/Dialogs';
import Examples from '../components/Examples';
import KanbanBoard from '../components/KanbanBoardCompanent/KanbanBoard';
import Users from '../components/Users';

const route = [
  {
    url: '',
    title: 'Home',
    component: <KanbanBoard />,
    exact: true,
  },
  {
    url: 'about',
    title: 'About',
    component: <About />,
  },
  {
    url: 'users',
    title: 'Users',
    component: <Users />,
  },
  {
    url: 'dialogs',
    title: 'Dialogs',
    component: <Dialogs />,
  },
  {
    url: 'examples',
    title: 'Examples',
    component: <Examples />,
  },
];

export default route;
