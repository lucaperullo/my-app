import Detail from '../../pages/Detail';
import Home from '../../pages/Home';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id/statistics', //TODO : This route should react /:id/statistics by performing a feth request to this service GET /photos/:id/statistics from unsplash (check : https://unsplash.com/documentation#get-a-photos-statistics)
    component: <Detail />,
  },
  // Additional routes can be added here
];
