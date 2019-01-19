import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';

class AuthorDetails extends Component {
    constructor (props) {
        super(props);
        this.book = this.props.book;
        this.author = this.props.author;
        this.state = {
            id: this.author.id,
            name: this.author.name,
            jobTitle: this.author.jobTitle,
            bio: this.author.bio,
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
        const jobTitle = this.state.jobTitle;
        const bio = this.state.bio;
        const data = {
            id,
            name,
            jobTitle,
            bio,
        }
        this.props.dispatch({
            type:'UPDATE_AUTHOR',
            data
        });
        this.props.history.push('/');
    }
    render() {
        const {id, name, jobTitle, bio} = this.author;
        const currentName = (id == this.props.myStore.authorReducer.map(post=>post.id) ? this.props.myStore.authorReducer.map(post=>post.name) : name);
        const currentJobTitle = (id == this.props.myStore.authorReducer.map(post=>post.id) ? this.props.myStore.authorReducer.map(post=>post.jobTitle) : jobTitle);
        const currentBio = (id == this.props.myStore.authorReducer.map(post=>post.id) ? this.props.myStore.authorReducer.map(post=>post.bio) : bio);
        return (
            <div>
                <div className="details row" style={{display: this.props.editModeProp == 'false' ? 'none' : 'inline-flex'}}>
                    <h3>{currentName}</h3>
                    <p className="w-100">{currentJobTitle}</p>
                    <p>{currentBio}</p>
                    <div>
                        {
                            this.book
                            .filter(book => this.author.id === book.author)
                            .map(book => <BookCard key={book.id} {...book} />)
                        }
                    </div>
                </div>
                
                <div className="col-md-12" style={{display: this.props.editModeProp == 'false' ? 'inline' : 'none'}}>
                <h2>Edit : {currentName}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Author Name</label>
                        <input  
                            onChange={this.handleChange}
                            defaultValue={currentName}
                            id="name"
                            name="name"
                            type="text" 
                            className="form-control"
                            placeholder="Enter Author Name" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Author Job title</label>
                        <input  
                            onChange={this.handleChange}
                            defaultValue={currentJobTitle}
                            id="jobTitle"
                            name="jobTitle"
                            type="text" 
                            className="form-control"
                            placeholder="Enter Author Job Title" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Author Bio</label>
                        <input  
                            onChange={this.handleChange}
                            defaultValue={currentBio}
                            id="bio"
                            name="bio"
                            type="text" 
                            className="form-control"
                            placeholder="Enter Author Bio" 
                        />
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
export default connect(mapStateToProps)(AuthorDetails);
