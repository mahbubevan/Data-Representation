import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DataPresentation extends Component{
    constructor(props){
        super(props)

        this.state = {
            data:this.props.data,
            modal:false,
            table:{
                userId:0,
                title:'',
                status:false,
                id:0
            }
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
          modal: !this.state.modal
        });
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
                <div>
                <ReactTable
                    columns={columns}
                    data={this.state.data}
                    defaultPageSize={15}
                    className="-striped -highlight hover"

                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                          onClick: () => {
                            console.log(rowInfo.original.title)
                            this.setState({
                                modal:true,
                                table:{
                                    title:rowInfo.original.title,
                                    userId:rowInfo.original.userId,
                                    status:rowInfo.original.completed,
                                    id:rowInfo.original.id
                                }
                            })
                          }
                        }
                      }}
                >
                </ReactTable>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>User Id: {this.state.table.userId}</ModalHeader>
                    <ModalBody>
                        ID: {this.state.table.id} <br/>Title: {this.state.table.title}
                    </ModalBody>
                    <ModalFooter>
                        <div> Status: </div> { this.state.table.completed ? <span className="text-success">Completed</span> : <span className="text-danger">Not Completed</span> }
                        <div>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </div>
                    </ModalFooter>
                    </Modal>
                </div>
            )
    }
}

export default DataPresentation;