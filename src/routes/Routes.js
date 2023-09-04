import Home from './Home';
import Contact from './Contact';
import Admin from './Admin';
import About from './About';
import Login from './Login';
import Detail from './Detail';


const publicRoutes = [
{path :'/'  ,component : Home},
{path :'/contact',component:Contact},
{path :'/about',component:About},
{path:'/login', component:Login},
{path:'/detail', component:Detail}
];

const privateRoutes = [
    {path:'/admin',component:Admin},
];

export {publicRoutes, privateRoutes};