import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import WebAdminDashboardLayout from './layouts/webAdminDashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// import HomeLayout from './layouts/HomeLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgotPass';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Home from './pages/Home';
import Main from './pages/webAdmin/Main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/index',
      // element: <HomeLayout />,
      children: [
        { element: <Navigate to="/index/home" replace /> },
        { path: 'home', element: <Home /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/webadmin',
      element: <WebAdminDashboardLayout />,
      children: [
        { element: <Navigate to="/webadmin/main" replace /> },
        { path: 'main', element: <Main /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgotpass', element: <ForgotPass /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/index/home" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
