import React , {Component} from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {is , fromJS} from 'immutable'
import './header.css'

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
        confirm: PropTypes.any,
    }

    render() {
        return (
            <header className='header-container'>
                <span className='header-slide-icon icon-catalog'></span>
                <span className='header-title'> { this.props.title } </span>
                { 
                    this.props.record && <NavLink to='/record'exact className='header-link icon-record ' ></NavLink>
                 }
                 {
                     this.props.confirm&& <NavLink to='/' exact className='header-link header-link-confirm'>确定</NavLink>
                 }
                 <ReactCSSTransitionGroup
                    component={ this.firstChild }
                    transitionName='nav'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>

                    {
                        this.state.navState && <aside key='nav-aside' className='nav-slide-list'>
                            <NavLink to='/' exact className='nav-link icon-arrow-copy-copy'>首页</NavLink>
                            <NavLink to='/brokerage' exact className='nav-link icon-arrow-copy-copy'>提现</NavLink>
                            <NavLink to='/helpcenter' exact className='nav-link icon-arrow-copy-copy'>帮助中心</NavLink>
                        </aside>
                    }

                 </ReactCSSTransitionGroup>
            
            
            
            
            </header>
        )
            
       
    }
}

export default Header