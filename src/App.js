import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List'
import Movie from './components/Movie';

import _ from 'lodash'

// const movies = [
//   { id: "AMLsriUkE", title: "2020", director: "Steven Spielberg" },
//   { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
//   { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
// ];

// class component
class App extends Component {

  state = {
    movies: [
      { id: "AMLsriUkE", title: "2020", director: "Steven Spielberg" },
      { id: "z2uykusRE", title: "Titanic", director: "James Cameron" },
      { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
    ]
  }

  sortHandler = () => {

    let copyMovies = [...this.state.movies]

    let sortedList = copyMovies.sort((m1, m2) => m1.title < m2.title ? -1 : 1)
    console.log(sortedList)

    // state only ever should be changed via setState
    this.setState({
      movies: sortedList
    })

    // alternative
    this.setState({
      movies: _.sortBy(this.state.movies, 'title')
    })
  }

  render() {
    return (
      <div className="App" >
        <List></List>
        {this.state.movies.map((m) => <Movie key={m.id} title={m.title} director={m.director}></Movie>)}
        <button onClick={this.sortHandler}>SORT THE LIST</button>
      </div >
    )
  };
}

export default App;
