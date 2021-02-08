import { HomeOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { BerryIcon } from '../components/icon-components/Icons';
import { LazyExoticComponent, lazy, ComponentType, ReactNode } from 'react';

export interface IRoute {
  path: string;
  exact: boolean;
  name: string;
  fallback: NonNullable<ReactNode> | null;
  icon?: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
}

export const defaultFallback = <div>Loading...</div>;

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    fallback: defaultFallback,
    icon: <HomeOutlined />,
    component: lazy(() => import('../components/pages/home/Home')),
  },
  {
    path: '/berries',
    exact: false,
    name: 'Berries',
    fallback: defaultFallback,
    icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/berries/Berries')),
  },
  {
    path: '/contests',
    exact: false,
    name: 'Contests',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/contests/Contests')),
  },
  {
    path: '/encounters',
    exact: false,
    name: 'Encounters',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/encounters/Encounters')),
  },
  {
    path: '/evolutions',
    exact: false,
    name: 'Evolutions',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/evolutions/Evolutions')),
  },
  {
    path: '/games',
    exact: false,
    name: 'Games',
    fallback: defaultFallback,
    icon: <PlaySquareOutlined />,
    component: lazy(() => import('../components/pages/games/Games')),
  },
  {
    path: '/items',
    exact: false,
    name: 'Items',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/items/Items')),
  },
  {
    path: '/locations',
    exact: false,
    name: 'Locations',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/locations/Locations')),
  },
  {
    path: '/machines',
    exact: false,
    name: 'Machines',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/machines/Machines')),
  },
  {
    path: '/moves',
    exact: false,
    name: 'Moves',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/moves/Moves')),
  },
  {
    path: '/pokemon',
    exact: false,
    name: 'Pokémon',
    fallback: defaultFallback,
    // icon: <BerryIcon />,
    component: lazy(() => import('../components/pages/pokemon/Pokemon')),
  },
];
