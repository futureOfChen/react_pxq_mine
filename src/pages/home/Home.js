
import React , {Component} from 'react';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../api/api';
import envConfig from '../../envConfig/envConfig';

import { saveFormData , saveImg , clearData } from '../../store/home/action';
import { clearSelected } from '../../store/production/action';
import PublicHeader from '../../components/header/Header'




class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <PublicHeader title='首页' record/>
                <h1> 这是 Home 页面 </h1>
            </div>
        )
    }
}

export default Home