import React,{Component} from 'react';
import {Container,Row,Col,Button,Table} from 'reactstrap';
import styled from 'styled-components';
import queryString from 'query-string';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

let url = 'http://api.icndb.com/jokes';

const dr = {
  width:"100%",
  borderRadius:"0",

}

class Sidebar extends Component{
  constructor(){
    super()

    this.state = {
      dropdownOpen: false,
      category: 'All',
      response:{
        value:[
          {
            id:0,
            joke:"Loading...",
            categories:[]
          }
        ]
      },
    }
  }

  componentWillMount(){
    this.sendRequest()
  }
  
  sendRequest = () => {
    console.log(url);
    fetch(url).then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({response:json})
    })
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  createRow = () => {
    if(this.state.category === "All"){
      return(
        this.state.response.value.map((obj,index) => {
        return(
          <tr key={index}>
            <th>
              {obj.id}
            </th>
            <td>
              {obj.joke}
            </td>
          </tr>
          )
        })
      )
    }
    else{
      return(
        this.state.response.value.filter(obj => obj.categories.includes(this.state.category.toLowerCase())).map((obj,index) => {
          return(
            <tr key={index}>
          <th>
            {obj.id}
          </th>
          <td>
            {obj.joke}
          </td>
        </tr>
        )
      })
    )
    }
  }

  handleClick = (event) => {
    let text = event.target.innerText
    this.setState({category:text})
  }

  render(){
    return(
      <div style={{margin:"auto"}}>
        <Row>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{width:"80%",margin:"auto"}}>
            <DropdownToggle caret style={dr}>
              {this.state.category}
            </DropdownToggle>
            <DropdownMenu style={{width:"100%"}}>
              <DropdownItem onClick={this.handleClick}>All</DropdownItem>
              <DropdownItem onClick={this.handleClick}>Nerdy</DropdownItem>
              <DropdownItem onClick={this.handleClick}>Explicit</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row>
          <Table striped style={{marginTop:"20px"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Jokes</th>
              </tr>
            </thead>
            <tbody>
              {this.createRow()}
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}

export default Sidebar