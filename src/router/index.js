import React , {Component} from 'react'
import { BrowserRouter , Route , Link , Switch , Redirect  } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

import Home from '../pages/home/Home'

export default class RouteConfig extends Component {
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/' component={ Home }></Route>
            </Switch>
        </BrowserRouter>
        )
    }
}