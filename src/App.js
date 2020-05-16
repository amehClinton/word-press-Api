import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Posts from "./components/post/Posts";
import { Provider } from "react-redux";
import store from "./store";
import Post from "./components/post/Post";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div classname='App'>
          <Navbar />
          <div className='container'>
            <Route exact path='/' component={Posts} />

            <Switch>
              <Route exact path='/post/:id' component={Post} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
