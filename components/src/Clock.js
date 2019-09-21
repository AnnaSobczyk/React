import './Clock.css';
import React from 'react';

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() };

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }

    render() {
        console.log(this.state.time)
        return <h3>The time is: {this.state.time}</h3>
    }
}

export default Clock;