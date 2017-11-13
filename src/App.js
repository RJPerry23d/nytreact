import React, { Component } from 'react';
import Header from "./components/Header";
import ArticleSearch from "./components/ArticleSearch";
import Articles from "./components/Articles";
import SavedArticles from "./components/SavedArticles";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-12">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <ArticleSearch />
          </div>
          <div className="row">
            <Articles />
          </div>
          <div className="row">
            <SavedArticles />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
