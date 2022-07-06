import React, {Component} from 'react';

class PersonCard extends Component {
    // Declare constructor to override our default constructor so that we can initially set the state object
    constructor(props){
        // super() gives us functionality of the default constructor that comes with Component
        super(props);
        this.state = {
            personAge: this.props.age
        }

    }

    changeAge = (e) => {
        this.setState({personAge: this.props.age + 1});
    }

    render(){
        return(
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age: {this.state.personAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick = {this.changeAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;