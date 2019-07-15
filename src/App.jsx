import React from 'react';
import './App.css';
import axios from 'axios';
import SplashPage from './SplashPage';
import IssueIndex from './IssueIndex';
import IssueShow from './IssueShow';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {
    issues: []
  }

  componentDidMount() {
    const gitApi = 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=100'
    axios.get(gitApi).then((response) => {
      this.setState({ issues: response.data})
      console.log(response)
    })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <nav className='position-relative js-header-wrapper'> 
            
            <Link to='/' className='link'><i className='fab fa-github'></i></Link>{' '}
            <input type="search" placeholder='Search or jump to   / '></input>
            <Link to='/pullrequests' className='link'>Pull Requests</Link>{' '}
            <Link to='/issues' className='link'>Issues</Link>{' '}
            <Link to='/marketplace' className='link'>Marketplace</Link>{' '}
            <Link to='/explore' className='link'>Explore</Link>{' '}
          </nav>
          <Route path='/' component={SplashPage} />
          <Route exact path='/issues' render={ () => <IssueIndex issues={this.state.issues}/>} />
          <Route exact path='/issue/:id' render={ (props) => <IssueShow issues={this.state.issues}{...props}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
