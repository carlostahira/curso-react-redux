import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(propsarg) {
        super(propsarg);
        this.state = { counter: propsarg.value };
    }
    
    sum(informed) {
        this.setState({ counter: this.state.counter + informed });
    }
    
    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.counter }</h2>
                <button onClick={ () => this.sum(-1) }>Dec</button>
                <button onClick={ () => this.sum(+1) }>Inc</button>

            </div>
        )
    }
}