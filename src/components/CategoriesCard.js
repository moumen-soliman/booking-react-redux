import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoriesCard extends Component {
    render() {
        const {id, name} = this.props
        return (
            <li><Link to={`/category/${id}`}>{name}</Link></li>
        )
    }
}

export default CategoriesCard;