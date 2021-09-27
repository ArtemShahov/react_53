import React from 'react';
import About from '../components/pages/About/About';
import Dialogs from '../components/pages/Dialogs';
import Examples from '../components/pages/Examples';
import KanbanBoard from '../components/pages/KanbanBoardCompanent/KanbanBoard';
import Users from '../components/pages/Users';

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
