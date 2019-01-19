import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../../books.json';
import BookCard from '../components/BookCard';
import CategoriesCard from '../components/CategoriesCard';
import AuthorCard from '../components/AuthorCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [...data.books, ...this.props.myStore.bookReducer].reverse(),
            categoriesList: [...data.categories, ...this.props.myStore.categoryReducer].reverse(),
            authorsList: [...data.authors, ...this.props.myStore.authorReducer].reverse()
        };
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="col-md-12">
                        <div className="boxed-border">
                            <div className="headline">
                                <h4>Categories</h4>
                            </div>
                                <ul>
                                    {this.state.categoriesList.map(category => 
                                        <CategoriesCard key={category.id} {...category} />
                                    )}
                                </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="col-md-12">
                        <div className="boxed-border">
                            <div className="headline">
                                <h4>Authors</h4>
                            </div>
                                <ul>
                                    {this.state.authorsList.map(author => 
                                        <AuthorCard key={author.id} {...author} />
                                    )}
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    {this.state.bookList.map(book => <BookCard key={book.id} editModeProp={this.props.myStore.editModeReducer.map(post => post.data.editMode)} {...book} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (currentState) => {
    return {
        myStore: currentState,
    }
}
export default connect(mapStateToProps)(Home);