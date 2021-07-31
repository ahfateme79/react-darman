import ReactDOM from 'react-dom';
import Header from './component/header/header';
import './index.css'
import './css/css/fontello-embedded.css'
//import Main from './component/main/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Aside from './component/sidebar/sidebar';
import Routes from './setting/route';

const Index = () => {
  const arr = [
    { path: '/', iconName: 'home' },
    { path: '/carts/cart', iconName: 'box' },
    { path: '/products', iconName: 'cog' },
    { path: '/users', iconName: 'users' }, 
    { path: '/setting', iconName: 'bag' },
    { path: '/login', iconName: 'logout' }, 
    { path: "", iconName: 'moon' }]

  return (
    <>
      <Header />
      <Router>
        <Aside arr={arr}/>
        <Switch>
          {
            Routes.map(({ containerpath, name, path }) => {
              <Route key={name} exact path={path}>
                {
                  props => {
                    let Container = require(`${containerpath}`).default
                    return (
                      <Container {...props} />
                    )
                  }
                }
              </Route>
            })
          }
        </Switch>
      </Router>
    </>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'))

