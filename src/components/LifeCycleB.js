import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Charlie"
      }
      console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(state, props){
        console.log('LifeCycleB getDrivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifeCylceB  ShouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB  GetSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB ComponentDidUpdate')
    }
  render() {
    console.log("LifeCycleB Render")
    return <div>LifeCycleB</div>
  }
}

export default LifeCycleB