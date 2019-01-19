import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthorCard extends Component {
    render() {
        const {id, name} = this.props
        return (
            <li><Link to={`/author/${id}`}>{name}</Link></li>
        )
    }
}

export default AuthorCard;