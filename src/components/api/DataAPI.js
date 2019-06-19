import React, { Component } from 'react';
import DataTable from './../layouts/DataTable';
import {Spinner} from 'reactstrap';

class DataAPI extends Component{
    constructor(props){
        super(props)

        this.state = {
            data:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(result => this.setState({
            data:result,
            isLoaded:true
        }))
    }

    render(){
        return(
            <div>
               { this.state.isLoaded ?  <DataTable datas={this.state.data}/> : <div className="text-center"><Spinner color="warning" /></div>}
            </div>
        );
    }
}

export default DataAPI;