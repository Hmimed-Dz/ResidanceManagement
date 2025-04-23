import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([{
    path: "/",
    element: <PrivateRoute />,
}]);
export default router;
