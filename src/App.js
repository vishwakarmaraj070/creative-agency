import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Work from './components/Work'
import Culture from './components/Culture'
import Contact from './components/Contact'
import Service from './components/Service'
import Magzine from './components/Magzine'
import PageNotFound from './components/PageNotFound'




export default class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/work" component={Work}/>
                    <Route path="/services" component={Service}/>
                    <Route path="/culture" component={Culture}/>
                    <Route path="/magazine" component={Magzine}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}
