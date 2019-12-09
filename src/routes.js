import React from 'react';

const Inicio = React.lazy(() => import('./Components/Inicio/Inicio'));

const routes = [
	{ id: '0', path: '/', exact: true, name: 'Inicio' },
	{ id: '1', path: '/inicio', exact: true, name: 'Inicio', component: Inicio }
];

export default routes;