import React, { useState } from 'react';



//main 
class Main extends React.Component {
    constructor(props) {
        // Just do this, don't ask why yet
        super(props);

        // The only time you can assign this.state
        this.state = {
            count: 0,
            value: 0,
            colorClass: "zero",
        };
    }

    // Event Handling is fun
    IncreaseClick = (event) => {
        event.preventDefault();
        var previousCount = this.state.count;
        var count = this.state.count + 1;
        this.colorChange(previousCount, count);
        this.setState({ count });
    }
    DecreaseClick = (event) => {
        event.preventDefault();
        var previousCount = this.state.count;
        var count = this.state.count - 1;
        this.colorChange(previousCount, count);

        this.setState({ count });
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState({ value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var previousCount = this.state.count;
        var count = this.state.value;
        this.colorChange(previousCount, count);
        this.setState({ count });
        var value = 0;
        this.setState({ value });
    }
    colorChange = (previousCount, count) => {
        var colorChange;

        //negative 
        if (previousCount === 0 && count < 0) {
            colorChange = "negative";
            this.setState({ colorChange });
        }
        //zero
        else if (count === 0) {
            colorChange = "zero";
            this.setState({ colorChange });
        }
        //between 1-10
        else if (previousCount === 0 && count > 0 && count < 10) {
            colorChange = "betweenOneAndTen";
            this.setState({ colorChange });
        }
        //10-20
        else if (previousCount === 10 && count > 10 && count < 20) {
            colorChange = "betweenOneAndTen";
            this.setState({ colorChange });
        }
        //20-30
        else if (previousCount === 20 && count > 20 && count < 30) {
            colorChange = "betweenOneAndTen";
            this.setState({ colorChange });
        }
        //30-40
        //40-50
        //50+ 




    }










    render() {
        // Re-rendering is automatic when state changes


        // Stretch form goal
        return (

            <div className="wrapper">
                <div className="Name">
                
                </div>
                <h2>Main!</h2>
                <h3 className={this.state.colorClass}>the Count = {this.state.count}</h3>
                <button id="increase" onClick={this.IncreaseClick}>Click To Increase!</button>
                <button id="decrease" onClick={this.DecreaseClick}>Click To Decrease!</button>
            </div>
        )
    }
}

export default Main; 