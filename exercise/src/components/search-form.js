import React from 'react'
import Context from '../context'

export default class SearchForm extends React.Component{

    static contextType = Context

    render(){
        return(
            <div>
                <form onSubmit={this.context.handleSearch}>
                    <label>Enter a number between 0 and 100</label>
                    <input type='number' value={this.context.searchTerm} onChange={e=>this.context.setSearchTerm(e.target.value)}></input>
                </form>
                <button type='submit' onClick={this.context.handleSearch}>Enter</button>
            </div>
        )
    }
}