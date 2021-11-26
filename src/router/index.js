import NewProgrem from '../pages/newProgrem';
import Management from '../pages/manage';
import Charts from '../pages/charts'

const routerConfig = [{
    path: '/',
    component: NewProgrem,
},{
    path: '/manage',
    component: Management,
},{
    path: '/charts',
    component: Charts
}]

export default routerConfig