
import React , {Component} from 'react';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../api/api'



class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1> 这是 Home 页面 </h1>
            </div>
        )
    }
}

export default Home