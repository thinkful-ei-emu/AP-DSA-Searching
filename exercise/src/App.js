import React from 'react';
import './App.css';
import SearchForm from './components/search-form'
import Results from './components/results'
import Context from './context'


class App extends React.Component{

  state={
    searchTerm: ''
  }

  handleSearch = e =>{

    e.preventDefault()
    console.log(this.state.searchTerm)

  }

  setSearchTerm = searchTerm => {
    this.setState({
      searchTerm
    })
  }
  
  indexOf(array, value) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
      count++
        if (array[i] === value) {
            return `${array[i]} was found in ${count} step(s)`;
        }
    }
    return `This number could not be found in ${count} step(s)`;
};

binarySearch(array, value, start, end, count) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  var count = count === undefined ? 0 : count

  if (start > end) {
      return  `Number not found after ${count} step(s)`;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value) {
      return `${value} was found ${count} step(s)`;
  }
  else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, count + 1);
  }
  else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, count + 1);
  }
};

  render(){
    return (
      <Context.Provider
        value={{
          searchTerm: this.state.searchTerm,
          setSearchTerm: this.setSearchTerm,
          handleSearch: this.handleSearch,
          indexOf: this.indexOf,
          binarySearch: this.binarySearch
        }}
        >
      <div className="App">
        <SearchForm/>
        <Results/>
      </div>
      </Context.Provider>
    );
  }
}

export default App;
