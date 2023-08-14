import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/add" component={PostForm} />
        <Route path="/edit/:id" component={PostForm} />
      </Switch>
    </Router>
  );
}




export default App;
