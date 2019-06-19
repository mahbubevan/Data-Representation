import React, { Component } from 'react';
import { Container } from 'reactstrap';
import DataPresentation from './../DataPresentation';

class DataTable extends Component{
    constructor(props){
        super(props)

        this.state = {
            result:this.props.datas,
            isLoaded:true
        }
    }
    
    render(){
        return(
            <Container>
             <DataPresentation data={this.state.result}/>
            </Container>
        )
    }
}

export default DataTable;