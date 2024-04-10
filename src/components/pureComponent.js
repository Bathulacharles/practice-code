import React, { PureComponent } from 'react'
import RegCom from './RegCom'

class pureComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Charlie'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Charlie'
            })
        }, 2000)
    }
  render() {
    return (
      <div>
        pureComponent
        <RegCom name={this.state.name}/>
        <parentCom name={this.state.name}/>
     </div>
    )
  }
}

export default pureComponent