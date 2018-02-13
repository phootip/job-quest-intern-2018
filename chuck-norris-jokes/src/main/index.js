import React,{Component} from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import styled from 'styled-components';
import queryString from 'query-string';

import Sidebar from '../sidebar';
import Form from './form';

let url = 'http://api.icndb.com/jokes/';

const Joke = styled.div`
  background-color:lightgrey;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: auto;
  margin-top: 20px;
`;
const MyRow = styled(Row)`
  margin-bottom: 20px;
`

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
      this.setState({response:json})
    })
  }
  childSetState = (data) => {
    // this.setState
    this.setState(data,this.sendRequest);
  }

  render(){
    return(
      <Container style={{backgroundColor:"white",padding:"0 50px"}}>
        <MyRow>
          <Joke>
            <div>
              {this.state.response.value.id}
            </div>
            <div>
              {this.state.response.value.joke}
            </div>
          </Joke>
        </MyRow>
        <MyRow>
          <Form onSubmit={this.childSetState}/>
        </MyRow>
        <MyRow>
            <Sidebar/>
        </MyRow>
      </Container>
    )
  }
}

export default Main;