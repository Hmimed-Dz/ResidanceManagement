import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../Layout/PublicLayout';
import Home from '../Pages/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicLayout>
        <Home />
      </PublicLayout>
    ),
  },
]);
export default router;
