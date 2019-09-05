import React from 'react'
import Context from '../context'


export default class Results extends React.Component{

    static contextType = Context


    render(){

        let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 
            53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 
            45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 
            73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 
            23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 
            7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69,
            90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
            49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

        let linear = this.context.indexOf(data, parseInt(this.context.searchTerm))

        let sorted = data.sort(function(a, b){return a-b})
        console.log(sorted)

        let binary = this.context.binarySearch(sorted, parseInt(this.context.searchTerm))

        //console.log(this.context.searchTerm)

        return(
            <div>
                <p>Linear Method: {linear}</p>
                <br/>
                <p>Binary Method: {binary}</p>
            </div>
        )
    }
}