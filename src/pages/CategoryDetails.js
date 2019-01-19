import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { connect } from 'react-redux';

class CategoryDetails extends Component {
    constructor (props) {
        super(props);
        this.book = this.props.book;
        this.category = this.props.category;
        this.state = {
            id: this.category.id,
            name: this.category.name,
        };
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const id = this.state.id;
        const name = this.state.name;
        const data = {
            id,
            name,
        }
        this.props.dispatch({
            type:'UPDATE_CATEGORY',
            data
        });
        this.props.history.push('/');
    }
    render() {
        const {id, name} = this.state;
        const currentMasterState = (id == this.props.myStore.categoryReducer.map(post=>post.id) ? this.props.myStore.categoryReducer.map(post=>post.name) : name);
        return (
            <div>
                <div className="details row" style={{display: this.props.editModeProp == 'false' ? 'none' : 'inline-flex'}}>
                    <h3>{currentMasterState}</h3>
                    {
                        this.book
                        .filter(book => this.category.id === book.category)
                        .map(book => <BookCard key={book.id} {...book} />)
                    }
                </div>
                <div className="col-md-12" style={{display: this.props.editModeProp == 'false' ? 'inline' : 'none'}}>
                    <h2>Edit Category: {currentMasterState}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Category Name</label>
                            <input  
                                defaultValue={currentMasterState}
                                onChange={this.handleChange}
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter Category Name" 
                            />
                            <br /><br />    
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
export default connect(mapStateToProps)(CategoryDetails);
