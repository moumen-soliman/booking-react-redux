import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BookDetails extends Component {
    constructor (props) {
        super(props);
        this.book = this.props.book;
        this.author = this.props.author;
        this.authorData = this.props.authorData
        this.category = this.props.category;
        this.state = {
            id: this.book.id,
            title: this.book.title,
            author: this.book.author,
            description: this.book.description,
            isbn: this.book.isbn,
            publishYear: this.book.publishYear,
            pagesNumber: this.book.pagesNumber,
            image: this.book.image,
            category: this.book.category,
        };
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const id = this.state.id;
        const title = this.state.title;
        const author = this.state.author;
        const description = this.state.description;
        const isbn = this.state.isbn;
        const publishYear = this.state.publishYear;
        const pagesNumber = this.state.pagesNumber;
        const image = this.state.image;
        const category = this.state.category;
        const data = {
            id,
            title,
            author,
            description,
            isbn,
            publishYear,
            pagesNumber,
            image,
            category
        }
        this.props.dispatch({
            type:'UPDATE_BOOK',
            data
        });
        this.props.history.push('/');
    }
    render() {
        const {id, title, author, description, isbn, pagesNumber, publishYear, image, category} = this.book;
        const currentTitle = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.title) : title);
        const currentAuthor = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.author) : author);
        const currentDescription = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.description) : description);
        const currentISBN = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.isbn) : isbn);
        const currentPagesNumber = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.pagesNumber) : pagesNumber);
        const currentPublishYear = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.publishYear) : publishYear);
        const currentImage = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.image) : image);
        const currentCategory = (id == this.props.myStore.bookReducer.map(post=>post.id) ? this.props.myStore.bookReducer.map(post=>post.category) : category);
        return (
            <div>
                <div className="details row" key={id} style={{display: this.props.editModeProp == 'false' ? 'none' : 'inline-flex'}}>
                    <div className="col-md-8">
                        <h3>{currentTitle}</h3>
                        <p><b>By:</b></p>
                        <p><b>Number of pages:</b> {currentPagesNumber}</p>
                        <p><b>Publish Year:</b> {currentPublishYear}</p>
                        <p><b>ISBN:</b> {currentISBN}</p>
                        <p><b>Classification:</b> 
                            <Link to={`/category/${currentCategory}`} >
                                {
                                    this.props.category
                                    .filter(post => post.id === category)
                                    .map(cat => cat.name)
                                }
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img className="float-right" src={currentImage} width="150px"/>
                    </div>
                    <p>{currentDescription}</p>
                </div>

                <div className="col-md-12" style={{display: this.props.editModeProp == 'false' ? 'inline' : 'none'}}>
                <h2>Edit Book: {currentTitle}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={this.handleChange} defaultValue={currentTitle} name="title" type="text" className="form-control" id="title" placeholder="Enter Title" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="category">Category</label>
                                <select onChange={this.handleChange} defaultValue={currentCategory} name="category" id="category" className="form-control">
                                    <option>Select Category</option>
                                    {
                                        this.category.map(category => 
                                            <option value={category.id}>{category.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="author">Author</label>
                                <select onChange={this.handleChange} defaultValue={currentAuthor} name="author" id="author" className="form-control">
                                    <option>Select Author</option>
                                    {
                                        this.authorData.map(author => 
                                            <option value={author.id}>{author.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={this.handleChange} defaultValue={currentDescription} name="description" id="description" type="text" rows="20" className="form-control" placeholder="Enter Description"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN</label>
                            <input onChange={this.handleChange} defaultValue={currentISBN} name="isbn" type="text" id="isbn" className="form-control" placeholder="Enter ISBN" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="pagesNumber">No of pages</label>
                                <input onChange={this.handleChange} defaultValue={currentPagesNumber} name="pagesNumber" id="pagesNumber" type="number" className="form-control" placeholder="Enter Number of pages"/>
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="publishYear">Year Publish</label>
                                <input onChange={this.handleChange} defaultValue={currentPublishYear} name="publishYear" id="publishYear" type="number" className="form-control" placeholder="Enter Year Publish" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input onChange={this.handleChange} defaultValue={currentImage} name="image" id="image" type="text" className="form-control" placeholder="Enter Image URL" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button> &nbsp;&nbsp;
                        <Link to={`/`}><button className="btn">Cancel</button></Link>
                    </form>
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
export default connect(mapStateToProps)(BookDetails);