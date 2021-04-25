import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return <div>Welcome Yash !</div>
        }
        else {
            return <div>Welcome Sahith !</div>
        } 
    }
}

export default UserGreeting
