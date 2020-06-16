import React from 'react';
import '../sass/Main.scss';


//main 
class Main extends React.Component {
    constructor(props) {
        // Just do this, don't ask why yet
        super(props);
        //Text input
        this.textInput = React.createRef();
        // The only time you can assign this.state this also set base state..i think
        this.state = {
            count: 0,
            value: 0,
            colorClass: "zero",
            name: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        this.setState({ name: this.textInput.current.value });
    }
    colorChange = (previousCount, count) => {
        var colorClass;

        //negative 
        if (count < 0) {
            colorClass = "negative";
            this.setState({ colorClass });
        }
        //zero
        else if (count === 0) {
            colorClass = "zero";
            this.setState({ colorClass });
        }
        //between 1-10
        else if (count > 0 && count < 10) {
            colorClass = "betweenOneAndTen";
            this.setState({ colorClass });
        }
        //10-20
        else if (previousCount === 10 && count > 10 && count < 20) {
            colorClass = "betweenTenAndTwenty";
            this.setState({ colorClass });
        }
        //20-30
        else if (previousCount === 20 && count > 20 && count < 30) {
            colorClass = "betweenTwentyAndThirty";
            this.setState({ colorClass });
        }
        //30-40
        //40-50
        //50+ 




    }
    render() {
        // Re-rendering is automatic when state changes


        // Stretch form goal
        return (
            <body>
                <main>

                    <div className="wrapper">
                        <div>

                        </div>
                        <h2>Welcome to the Clicker! </h2>

                        <div className="FormBox">

                            <form className="form" onSubmit={this.handleSubmit}>
                                <div class="field">
                                    <label for="name-1">Who are you? </label>
                                    <div class="control">
                                        <input
                                            type="text"
                                            ref={this.textInput}
                                            name="name-1"
                                            class="input"
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <div className="control">
                                        <button class="nameButton">Save</button>

                                    </div>
                                    <div className = "clicker-buttons">
                                        <button  onClick={this.IncreaseClick}>Click To Increase!</button>
                                        <button onClick={this.DecreaseClick}>Click To Decrease!</button>
                                    </div>
                                    <h3 className={this.state.colorClass}>You have clicked {this.state.count} times <span> {!!this.state.name ? this.state.name : ""}!</span></h3>
                                </div>
                            </form>




                        </div>



                       

                    </div>

                </main>


            </body>


        )
    }
}

export default Main; 