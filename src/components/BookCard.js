import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookCard extends Component {
    render() {
          const {id, title, image, description, author} = this.props
          return (
            <Link className="card-link" to={`/book/${id}`}> 
                <div className="card">
                    <div className="media">
                        <img className="mr-3" src={image} alt={title} width="200px"/>
                        <div className="media-body">
                            <h4 className="mt-0">{title}</h4> <span className="editmode-button" style={{display: this.props.editModeProp == 'false' ? 'inline-block' : 'none'}}>edit</span>
                            <p>{description}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </Link>
        )
    }
}

export default BookCard;