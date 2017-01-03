import React from 'react';

export class Result extends React.Component{
    convertDate(time){
        let tempD = new Date(time*1000);
        debugger
        return tempD.toDateString();
    }

    render(){
        const self = this;
        const temp = this.props.items.data.list;
        debugger;
        console.log(temp);
        const listItems = temp.map((item) =>(
        <div className="row" key={item.dt}>
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{self.convertDate(item.dt)} </h3>
                    </div>
                    <div className="panel-body">
                        Daytime temperature: {item.temp.day}&deg;C
                    </div>
                </div>
            </div>
        </div>)
        );

        return(
            <div className="container">
                <h3>Forecast for {self.props.city}</h3>
                <br/>
                <a onClick={this.props.hDisplay}><h4>Back to search</h4></a>
                <br/>
                <hr/>

                {listItems}
            </div>
        )
    }
}