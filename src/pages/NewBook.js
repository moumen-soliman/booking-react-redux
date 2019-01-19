import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import data from '../../books.json';
import uuidv4 from 'uuid/v4';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            title: '',
            author: '',
            description: '',
            isbn: '',
            publishYear: '',
            pagesNumber: '',
            image: '',
            category: '',
            categoryList: [...data.categories, ...this.props.myStore.categoryReducer],
            authorList: [...data.authors, ...this.props.myStore.authorReducer],
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
            type:'ADD_BOOK',
            data
        });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h2>Add new Book</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            onChange={this.handleChange} 
                            name="title" 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="Enter Title" 
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label htmlFor="category">Category</label>
                            <select 
                                onChange={this.handleChange} 
                                name="category" 
                                id="category" 
                                className="form-control"
                                required
                            >
                                <option>Select Category</option>
                                {
                                    this.state.categoryList.map(category => 
                                        <option value={category.id}>{category.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="author">Author</label>
                            <select 
                                onChange={this.handleChange} 
                                name="author" 
                                id="author" 
                                className="form-control"
                                required
                            >
                                <option>Select Author</option>
                                {
                                    this.state.authorList.map(author => 
                                        <option value={author.id}>{author.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            onChange={this.handleChange} 
                            name="description" 
                            id="description" 
                            type="text" 
                            rows="20" 
                            className="form-control" 
                            placeholder="Enter Description"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="isbn">ISBN</label>
                        <input 
                            onChange={this.handleChange} 
                            name="isbn" 
                            type="text" 
                            id="isbn" 
                            className="form-control" 
                            placeholder="Enter ISBN"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label htmlFor="pagesNumber">No of pages</label>
                            <input 
                                onChange={this.handleChange} 
                                name="pagesNumber" 
                                id="pagesNumber" 
                                type="number" 
                                className="form-control" 
                                placeholder="Enter Number of pages"
                                required
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="publishYear">Year Publish</label>
                            <input 
                                onChange={this.handleChange} 
                                name="publishYear" 
                                id="publishYear" 
                                type="number" 
                                className="form-control" 
                                placeholder="Enter Year Publish" 
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input 
                            onChange={this.handleChange} 
                            name="image" 
                            id="image" 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Image URL" 
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button> &nbsp;&nbsp;
                    <Link to={`/`}><button className="btn">Cancel</button></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (currentState) => {
    return {
        myStore: currentState,
    }
}
export default connect(mapStateToProps)(NewBook);