import React, { Component } from 'react';
import './App.css';

import Movie from './components/Movie';
import AddMovie from './components/AddMovie'

import _ from 'lodash'

// class component
class App extends Component {

  state = {
    movies: [
      { id: "AMLsriUkE", title: "2020", director: "Steven Spielberg", hasOscar: false },
      { id: "z2uykusRE", title: "Titanic", director: "James Cameron", hasOscar: true },
      { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante", hasOscar: false },
    ],
    filterByHasOscar: null
  }

  sortHandler = () => {

    // let copyMovies = [...this.state.movies]

    // let sortedList = copyMovies.sort((m1, m2) => m1.title < m2.title ? -1 : 1)
    // console.log(sortedList)

    // // state only ever should be changed via setState
    // this.setState({
    //   movies: sortedList
    // })

    // alternative
    this.setState({
      movies: _.sortBy(this.state.movies, 'title')
    })
  }

  deleteHandler = (id) => {

    // splice <- mutates the original array, so create a copy first !

    // slice <- does not mutate

    this.setState({
      movies: this.state.movies.filter((m) => m.id !== id) // include all movies except the one with `id`
    })
  }

  filterHandler = (bool) => {

    // this.setState({
    //   movies: this.state.movies.filter((m) => m.hasOscar === true)
    // })
    this.setState({
      filterByHasOscar: bool
    })
  }

  addMovieHandler = (newMovie) => {

    this.setState({
      movies: this.state.movies.concat(newMovie)
    })

  }

  render() {

    let movies = this.state.movies

    if (this.state.filterByHasOscar === true) {
      movies = movies.filter((m) => m.hasOscar === true)
    }

    return (
      <div className="App" >
        {movies.map((m) => <Movie
          key={m.id}
          movieId={m.id}
          title={m.title}
          director={m.director}
          deleteHandler={this.deleteHandler}
        />)}
        <button onClick={() => this.sortHandler()}>SORT THE LIST (by title)</button>
        <button onClick={() => this.filterHandler(true)}>FILTER THE LIST (only movies with oscars)</button>
        <button onClick={() => this.filterHandler(false)}>UNFILTER THE LIST</button>

        <AddMovie addMovieHandler={this.addMovieHandler}></AddMovie>
      </div >
    )
  };
}

export default App;
