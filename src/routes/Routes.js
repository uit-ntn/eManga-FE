import Home from './Home';
import Contact from './Contact';
import Admin from './Admin';
import About from './About';


const publicRoutes = [
{path :'/'  ,component : Home},
{path :'/contact',component:Contact},
{path :'/about',component:About}
];

const privateRoutes = [
    {path:'/admin',component:Admin}
];

export {publicRoutes, privateRoutes};