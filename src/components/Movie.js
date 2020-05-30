import React from 'react';


class Movie extends React.Component {

  deleteHandler = () => {
    this.props.deleteHandler(this.props.movieId)
  }

  render() {
    return (
      <div>
        {this.props.title} – Director: {this.props.director}
        <button onClick={this.deleteHandler}>DELETE THIS MOVIE</button>
      </div>
    )
  }

}


export default Movie;