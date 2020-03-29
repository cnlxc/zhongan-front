import React, { Component }  from 'react';
import { 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {ACCESS_TOKEN} from './constant'
import {Profile,LoadingIndicator} from './views'
import {mainRouter} from './routes'
import {getCurrentUser} from './requests'
import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Zhongan App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Zhongan App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <div className="App">
        <Switch>
                {mainRouter.map(r=>{
                    return <Route 
                    key={r.pathname}
                    path={r.pathname} 
                    component={r.component}
                    />
                })}
                <Route path='/account/myAccount' 
                      render={(props)=><Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props} /> }>
                  
                </Route>
                <Redirect exact from="/" to="/home" />
                <Redirect exact from="/home1" to="/home" />
        </Switch>
      </div> )
  }

 
}

 


export default App;