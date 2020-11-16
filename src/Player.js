
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Player extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      Information:[]
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  componentDidMount(){

    axios.get(`http://localhost:8080/cricket/players`).then(response => {

        this.setState({Information:response.data});
  },

  error => {
      console.log(error);
  }
  
  )

  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    const items = this.state.Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    })
    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default Player;