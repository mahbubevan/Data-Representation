import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class DataPresentation extends Component{
    constructor(props){
        super(props)

        this.state = {
            data:this.props.data,
            modal:false
        }
    }

    render(){
        const columns = [
            {
                Header:'ID',
                accessor:'id',
                width:100
            },
            {
                Header:'User ID',
                accessor:'userId',
                width:100
            },
            {
                Header:'Title',
                accessor:'title',
                sortable:false,
            },
            {
                Header:'Status',
                accessor:'completed',
                sortable:false,
                width:150,
                Cell: row=> (
                    <span>
                        {row.value ? <span className="text-success">Completed</span> : <span className="text-danger">Not Completed</span> }
                    </span>
                )
            }
        ]
            return(
                <ReactTable
                    columns={columns}
                    data={this.state.data}
                    defaultPageSize={15}

                />
            )
    }
}

export default DataPresentation;