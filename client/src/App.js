import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import _ from 'lodash'
import { connect } from 'react-redux'

import Home from './components/common/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import { startRemoveUser } from './actions/user'
import List from './components/contacts/List'
import Show from './components/contacts/Show'
import New from './components/contacts/New'
import Edit from './components/contacts/Edit'

function App(props) {

  const handleLogout = () => {
    props.dispatch(startRemoveUser())
  }

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:3000/">Contact Manager</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {
              _.isEmpty(props.user) ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/register">Register</Link>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts">Contacts</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout} to="/">Logout</Link>
                  </li>
                </React.Fragment>
              )
            }
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/register" component={Register} />
        <Route path="/contacts" component={List} exact={true} />
        <Route path="/contacts/new" component={New} />
        <Route path="/contacts/show/:id" component={Show} />
        <Route path="/contacts/:id" component={Edit} />
        
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)