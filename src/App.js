import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import data from '../books.json';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NewBook from './pages/NewBook';
import NewAuthor from './pages/NewAuthor';
import NewCategory from './pages/NewCategory';
import BookDetails from './pages/BookDetails';
import AuthorDetails from './pages/AuthorDetails';
import CategoryDetails from './pages/CategoryDetails';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <BrowserRouter>
          <div className="app">
            <Navbar />
            <div className="container main-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/newbook" component={NewBook} />
                <Route path="/newauthor" component={NewAuthor} />
                <Route path="/newcategory" component={NewCategory} />
                <Route path="/author/:id" component={props => {
                  const selectedAuthor = [...data.authors, ...this.props.myStore.authorReducer].find(author => props.match.params.id === author.id);
                  const selectedBook = [...data.books, ...this.props.myStore.bookReducer];
                  const selectedEditMode = this.props.myStore.editModeReducer.map(post => post.data.editMode);
                  return <AuthorDetails book={selectedBook} editModeProp={selectedEditMode} author={selectedAuthor} {...props} />;
                }} />
                <Route path="/book/:id" component={props => {
                  const selectedBook = [...data.books, ...this.props.myStore.bookReducer].find(book => props.match.params.id === book.id);
                  const selectedAuthor = [...data.authors, ...this.props.myStore.authorReducer].find(author => props.match.params.id === author.id);
                  const authorData = [...data.authors, ...this.props.myStore.authorReducer];
                  const selectedEditMode = this.props.myStore.editModeReducer.map(post => post.data.editMode);
                  const selectedCategory = [...data.categories, ...this.props.myStore.categoryReducer];
                  return <BookDetails book={selectedBook} author={selectedAuthor} category={selectedCategory} editModeProp={selectedEditMode} authorData={authorData} {...props} />;
                }} />
                <Route path="/category/:id" component={props => {
                  const selectedCategory = [...data.categories, ...this.props.myStore.categoryReducer].find(category => props.match.params.id === category.id);
                  const selectedBook = [...data.books, ...this.props.myStore.bookReducer];
                  const selectedEditMode = this.props.myStore.editModeReducer.map(post => post.data.editMode);
                  return <CategoryDetails book={selectedBook} category={selectedCategory} editModeProp={selectedEditMode} {...props} />;
                }} />
                <Route component={FourOhFour} />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = currentState => {
  return {
      myStore: currentState,
  }
}
export default connect(mapStateToProps)(App);
