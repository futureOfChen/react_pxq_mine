
import React , {Component} from 'react';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../api/api';
import envConfig from '../../envConfig/envConfig';

import { saveFormData , saveImg , clearData } from '../../store/home/action';
import { clearSelected } from '../../store/production/action';
import PublicHeader from '../../components/header/Header'
import './home.css';





class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
           <main className='home-container'>
                <PublicHeader title='首页' record='record'/>
            </main>
        )
    }
}

export default Home