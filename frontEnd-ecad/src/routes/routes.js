import Loadable from 'react-loadable';
import Loading from '../utils/loading';
import DefaultLayout from '../containers/defaultLayout';

export const navItemsLeftMenu = [
  {
    name: 'Titulo',
    url: '/titulo',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
    },
    attributes: { hidden: false },
    LevyTitle: Loadable({
      loader: () => import('../views/levyTitle/levyTitle'),
      loading: Loading,
    }),
  },
];

function getComponentByNavItems(componentName) {
  return navItemsLeftMenu.find(item => item[componentName] !== undefined)[componentName];
}

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: DefaultLayout,
  },
  {
    path: '/titulo',
    exact: true,
    name: 'Cobranca',
    component: getComponentByNavItems('LevyTitle'),
  },

];

export default routes;
