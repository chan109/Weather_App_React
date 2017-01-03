import React from 'react';
import axios from 'axios'
export class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state= {text: "", items: []};
    }

    handleSubmit(e){
        //browserHistory.push('result');
        e.preventDefault();
        console.log(this.state.text);
        const self = this;
        axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?appid=7d5aabe6b882b5edc29b687b404a1932&units=metric&cnt=5&q='+ self.state.text)
            .then(function (response) {
                console.log(response);
                self.props.hItems(response, self.state.text);
            });
    };

    handleChange(e){
        this.setState({text: e.target.value});
    };

    render(){
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Forecast by City</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.handleChange}/>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Get Forecast"/>
                    </form>
                </div>
            </div>
        )
    }
}