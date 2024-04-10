import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Charlie"
      }
      console.log("LifeCycleA Constructor")
    }

    static getDerivedStateFromProps(state, props){
        console.log("LifeCylceA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
        
    }

    shouldComponentUpdate(){
        console.log("LifeCylceA  ShouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA  GetSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA ComponentDidUpdate')
    }

    changeState = () =>{
        this.state({
            name: 'CodeEvalution'
        })
    }

  render() {
    console.log("LifeCycleA Render")
    return(
        <div>
            <div>LifeCycleA</div>
            <button onClick={this.changeState}>Change state</button>
            <LifeCycleB />
        </div>
    ) 
    
  }
}

export default LifeCycleA