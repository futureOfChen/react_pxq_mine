import React , {Component} from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import 

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            navState : false,
        }
    }

    static PropTypes = {
        record: PropTypes.any,
        title: PropTypes.string.isRequired,
        confirm: Props.any,
    }

    render() {
        return (
            <div>
                <h1> 這是公用的header</h1>
            </div>
        )
            
       
    }
}

export default Header