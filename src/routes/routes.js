import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Home from '../components/frontend/Home';
import Login from '../components/frontend/auth/Login';
import Register from '../components/frontend/auth/Register';

          
const routes = [
    // { path: '/', exact: true, name: 'Home' , component : Home},
    // { path: '/login', exact: true, name: 'Login' , component : Login},
    // { path: '/register', exact: true, name: 'Register' , component : Register},
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile }
];

export default  routes;