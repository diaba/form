

import React from "react";
import EditEmployee from "./EditEmployee";
class App extends React.Component {
  constructor() {
    super();this.state ={ 
      nameError:'',
      message:'test',
      isValid:true
    }
  }
  validateName = (event) => {
    var name = event.target.value;
    if(name.length < 5){
      this.setState({ nameError:"Name is invalid"})
    }else{
      this.setState({ nameError:''})
      this.setState({isValid:true})
    }
  };
  sendData=(event)=>{
    event.preventDefault()
   this.setState({ message:'Send with succes'})
  }
  render() {
    return (
      // <form onSubmit={this.sendData}>
      //   <input onChange={this.validateName} type="text" name="name" /><span>{this.state.nameError}</span> <br /> <br />
        
      //   <input type="text" name="name" />
      //   <span></span>
      //   <br /> <br />
      //   <button type="submit"  disabled ={!this.state.isValid}>Register</button>
      //   <p><strong>{this.message}</strong></p>
      // </form>
      <EditEmployee />
    );
  }
}

export default App;
