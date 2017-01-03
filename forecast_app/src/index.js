import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import Root from './App';
import {Home} from './home'
import {User} from './user'
import './index.css';
import {Result} from './result'

class WrappedResult extends React.Component{
    constructor(props){
        super(props);
        this.state={result: "", display: false}
        this.handleItems=this.handleItems.bind(this);
        this.handleDisplay=this.handleDisplay.bind(this);
    }

    handleItems (data, city){
        console.log(city);
        this.setState({result: data, display: true, cy: city })
    }

    handleDisplay (){
        this.setState({display: false})
    }

    render(){
        var self = this;
        if(this.state.display===false)
            return(
                <Home hItems={self.handleItems}/>
            )
        else
            return(
                <Result items={self.state.result} city={self.state.cy} hDisplay={self.handleDisplay}/>
            )

    }
}

class App extends React.Component{
    render(){
        return(
        <Router history={browserHistory}>
            <Route path={"/"} component={Root}>
                    <IndexRoute component={WrappedResult}/>
                    <Route path={"user"} component={User}/>
                    <Route path={"home"} component={WrappedResult}/>
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);