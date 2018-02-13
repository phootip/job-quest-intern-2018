import React,{Component} from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';

const FormItem = styled.div`
  margin : 10px 0px;
  display : block;
`;

class Form extends Component{
  constructor(){
    super();
  }

  onSubmit = (e) => {
    let id = document.getElementById("id").value || "random";
    let name = document.getElementById("name").value || "Chuck";
    let lastName = document.getElementById("lastName").value || "Norris";
    e.preventDefault();
    
    // change parent's state
    this.props.onSubmit({id:id,payload:{firstName:name,lastName:lastName}});
    return false;
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
      <FormItem>
        Choose an id : <input id="id" placeholder="leave blank for a random joke"/>
      </FormItem>
      <FormItem>
        Give me a name : <input id="name"/>
      </FormItem>
      <FormItem>
        Last but not least, last name : <input id="lastName"/>
      </FormItem>
      <Button color="info"> Click me!! </Button>
    </form>
    )
  }
}

export default Form;