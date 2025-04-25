import './css/root.css';
import { RouterProvider } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
//import "./index.css"

import { ConfigProvider } from 'antd';
import routes from './Routes';
// import AuthProvider from './contexts/AuthContext';
// import defaultAppConfig from './config/ant.theme';
// import HeaderProvide from './contexts/AppContext';

// export const queryClient = new QueryClient();

function App() {
  return <RouterProvider router={routes} />;
}
export default App;
