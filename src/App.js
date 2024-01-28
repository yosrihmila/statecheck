import React, { Component } from 'react'

export default class App extends Component {
  state ={
    Person:{
      fullName: "Yosri Hmila",
      bio: "React.js student",
      imgSrc : "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" ,
      profession : "Student"
    },
    show: false
  }
  showContent =()=> {
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div> <div>
          {this.state.show?<><h1>{this.state.Person.fullName}</h1>
          <h2>{this.state.Person.bio}</h2>
          <img width={"150px"} src={this.state.Person.imgSrc}></img>
          </>:null}
          </div>
          <div><button onClick={this.showContent}>Show</button>
          </div>
          </div>
    )
  }
}