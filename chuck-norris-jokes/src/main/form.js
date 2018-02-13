import React,{Component} from 'react';
import styled from 'styled-components';
// import {Button} from 'reactstrap';

// import '../static/buttons.css';
const FormItem = styled.div`
  margin : 10px 0px;
  display : block;
`;

const MyFormItem = styled(FormItem)`
  width : 80%;
`;


const Input = styled.input`
 width: 250px;
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
      <form onSubmit={this.onSubmit} style={{width:"100%"}}>
      <MyFormItem>
        Choose an id : <Input id="id" placeholder="leave blank for a random joke"/>
      </MyFormItem>
      <MyFormItem>
        Give me a name : <Input id="name"/>
      </MyFormItem>
      <MyFormItem>
        Last but not least, last name : <Input id="lastName"/>
      </MyFormItem>
      <button className="button button--nuka button--round-s button--text-thick"> Click me!! </button>
    </form>
    )
  }
}

export default Form;