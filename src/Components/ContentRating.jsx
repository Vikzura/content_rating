import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. 
            React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.</p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p>Total Ratings: {this.state.totalRatings}</p>
     </div>
     </>
    );
  }
}

export default ContentRating;
