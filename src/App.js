import React, { Component } from 'react';
import Header from "./components/Header";
import ArticleSearch from "./components/ArticleSearch";
import SavedArticles from "./components/SavedArticles";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header /> 
       <ArticleSearch />
       <SavedArticles />
      </div>
    );
  }
}

export default App;
