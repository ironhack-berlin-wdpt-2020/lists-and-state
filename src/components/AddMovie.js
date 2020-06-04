import React from 'react';



class AddMovie extends React.Component {

  state = {
    title: "",
    director: "",
    id: String(Math.random())
  }

  titleChangeHandler = (event) => {
    let currentInputValue = event.target.value

    this.setState({
      title: currentInputValue
    })

  }

  directorChangeHandler = (event) => {
    let currentInputValue = event.target.value

    this.setState({
      director: currentInputValue
    })
  }

  formSubmitHandler = (event) => {
    // we stop the browser from its normal behaviour 
    // which would be to generate GET request to backend
    event.preventDefault()

    let newMovie = this.state

    // we need to pass an object that looks like { title: "askldjhasd", director: "alkdhlkashj" }
    this.props.addMovieHandler(newMovie) // TODO: pass the newly created movie

    // reset to initial (empty) state
    this.setState({
      title: "",
      director: "",
      id: String(Math.random()) // temp 
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          Title: <input name="title" value={this.state.title} onChange={this.titleChangeHandler}></input>
        Director: <input name="director" value={this.state.director} onChange={this.directorChangeHandler}></input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }

}


export default AddMovie;