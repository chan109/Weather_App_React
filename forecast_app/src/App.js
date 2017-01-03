import React, { Component } from 'react';
import {Link} from 'react-router';
class Root extends Component {

    render(){
        return(
            <div>
                <Headerbar/>
                {this.props.children}
            </div>

        )
    }

}



class Headerbar extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">React Weather</a>
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to={"/home"} activeStyle={{color: "red"}}> Home</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}


export default Root ;