import React,{Component} from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import styled from 'styled-components';
import queryString from 'query-string';

import Form from './form';

let url = 'http://api.icndb.com/jokes/';

const Joke = styled.div`
  background-color:lightgrey;
`;

const Sidebar = styled(Col)`
  background-color:lightblue;
`;

class Main extends Component{
  constructor(){
    super();
    
    this.state = {
      response : {
        value:{
          id:0,
          joke:"Loading..."
        }
      },
      id : 'random',
      payload : {

      }
    }
  }
  componentWillMount(){
    this.sendRequest();
  }
  
  componentDidMount(){
    document.getElementById("id").focus(); 
  }

  sendRequest = () => {
    console.log(url+this.state.id);
    fetch(url+this.state.id+"?"+queryString.stringify(this.state.payload)).then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({response:json})
    })
  }

  childSetState = (data) => {
    // this.setState
    this.setState(data,this.sendRequest);
  }

  render(){
    return(
      <div>
        <Row>
          <Sidebar sm={3}>
            hello
          </Sidebar>
          
          <Col sm={9}>
            <Joke>
              <div>
                {this.state.response.value.id}
              </div>
              <div>
                {this.state.response.value.joke}
              </div>
            </Joke>
            <Form onSubmit={this.childSetState}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Main;