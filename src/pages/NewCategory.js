import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault(); 
        const name = this.state.name;
        const id = this.state.id;
        const data = {
            id,
            name
        }
        this.props.dispatch({
            type: 'ADD_CATEGORY',
            data
        });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h2>Add new Category</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Category Name</label>
                        <input  
                            onChange={this.handleChange}
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Category Name" 
                            required
                        />
                        <br /><br />    
                        </div>
                    <button type="submit" className="btn btn-primary">Save</button> &nbsp;&nbsp;
                    <Link to={`/`}><button className="btn">Cancel</button></Link>
                </form>
            </div>
        );
    }
}
export default connect()(NewCategory);