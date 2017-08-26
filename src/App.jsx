import React from 'react';
import PropTypes from 'prop-types';

const Headline = () => {
    return <h1 className="title">Welcome to the React world!</h1>
}

const Greeting = (props) => {
    return <p>You will love it {props.name} ({props.age})!</p>
}

const Message = (props) => {
    const {name, age} = props;
    return <p>My name is {name} ({age})!</p>
}

Message.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export class App extends React.Component {
    render() {
        return (
            <div>
                <Headline />
                <Greeting name="John" age="25"/>
                <Message name="Sammy" age={30}/>
            </div>
        )
    }
}

export default App;