import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

class NewAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            name: '',
            jobTitle: '',
            bio: ''
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
            bio
        }
        this.props.dispatch({
            type:'ADD_AUTHOR',
            data
        });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h2>Add new Author</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Author Name</label>
                        <input  
                            onChange={this.handleChange}
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
                            id="bio"
                            name="bio"
                            type="text" 
                            className="form-control"
                            placeholder="Enter Author Bio" 
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

export default connect()(NewAuthor);