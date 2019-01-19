import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            editMode: false,
            backgroundcolor: '',
            backgroundButtonColor: '',
            editModeWord: 'Edit Mode',
            displayNone: 'none'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    handleInputChange(e) {   
        this.setState({
            editMode: !this.state.editMode
        });

        if (this.state.editMode === false) {
            this.setState({ 
                backgroundcolor: '#970000', 
                backgroundButtonColor: 'green', 
                editModeWord: 'Exit Edit Mode',
                displayNone: 'inline-block'
            });
          } else {
            this.setState({
                backgroundcolor: '', 
                backgroundButtonColor: '', 
                editModeWord: 'Edit Mode',
                displayNone: 'none'
            });
          }
        this.handleSubmit()
    }
    handleSubmit = () =>{
        const id = this.state.id;
        const editMode = this.state.editMode;
        const data = {
            id,
            editMode
        }
        this.props.dispatch({
            type:'EDIT_MODE',
            data
        });
    };
    render() {
        const { backgroundcolor, backgroundButtonColor, editModeWord, displayNone } = this.state
        return (
            <div>
                <div className="topnav" style={{backgroundColor: backgroundcolor}}>
                    <div className="nav-brand">
                        <h1><Link to="/">Book Listing <span className="editmode-button" style={{display: displayNone}}>Edit mode</span></Link></h1>
                    </div>
                    <div className="nav-tabs">
                        <Link to="/newbook">New Book</Link>
                        <Link to="/newauthor">New Author</Link>
                        <Link to="/newcategory">New Category</Link>
                        <a
                            name="editMode"
                            type="checkbox"
                            onClick={this.handleInputChange}
                            style={{backgroundColor: backgroundButtonColor}}
                        >
                            {editModeWord}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Navbar);