import React from 'react';
import { 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {mainRouter} from './routes'
const App = () => (
  <div className="App">
    <Switch>
            {mainRouter.map(r=>{
                return <Route 
                key={r.pathname}
                path={r.pathname} 
                component={r.component}
                />
            })}
            <Redirect exact from="/" to="/home" />
            <Redirect exact from="/home1" to="/home" />
    </Switch>
  </div>
);

export default App;