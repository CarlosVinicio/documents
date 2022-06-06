import { Home } from '../../pages/Home/Home.component';
import { Details } from '../../pages/Details/Details.component';

export const ROUTES = [
  {
    path: '/',
    key: 'home',
    element: <Home />,
    name: 'Home'
  },
  {
    path: '/details/:id',
    key: 'details',
    element: <Details />,
    name: 'Details'
  }
];