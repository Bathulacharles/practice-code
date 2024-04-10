import React, { Component } from 'react'



 class ClassClick extends Component {



    constructor(props){
        super(props)
  //      this.state = {
   //         message: "hello",
              username: ''
   //     }
 //        this.onClickHandler = this.onClickHandler.bind(this)
 //   }

 //   onClickHandler(){
 //       this.setState({
 //           message: "GoodBye!"
 //       })
//     console.log(this)
//    }
        


 //   onClickHandler = () =>{
//     this.setState({
//          message: 'GoodBye!'
//      })
//  }

//   
//
//    onChangeInputValue = (event) =>{
 //       setValue(event.target.value)
 //   }

 onSubmitBtn = (event) =>{
  alert()
 }

  render() {
   const {username}=this.state
    return (
    <>
      <div>
        {/*<div>{this.state.message}</div>*/}
        *<button onClick={this.onClickHandler.bind(this)}>Click Me</button>
        {/*<button onClick={() => this.onClickHandler()}>Click Me</button>*/}
        {/*<button onClick={this.onClickHandler}>Click Me</button>*/}
        <form onSubmit={this.onSubmitBtn}>
          <lable>Username</lable>
          {/*<input type='text' placeholder='Enter Text' onChange={this.ChangeInputValue} value={username}/>*/}  
         {/*<button type="submit">Submit</button>*/}  
        </form>
        </div>
     </>
    )
  }
}
export default ClassClick