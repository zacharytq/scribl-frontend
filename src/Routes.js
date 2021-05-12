import Home from './components/Home';
import NewScribl from './components/NewScribl';
import Scribls from './components/Scribls';

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/newscribl',
    sidebarName: 'New Scribl',
    component: NewScribl
  },
  {
    path: '/scribls',
    sidebarName: 'My Scribls',
    component: Scribls
  }
]

export default Routes;
