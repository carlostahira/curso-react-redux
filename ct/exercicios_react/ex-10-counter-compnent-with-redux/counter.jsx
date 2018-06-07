import React from 'react';

import { inc, dec, changeStep } from './counterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>{props.counter.number}</h1>
            <input onChange={props.changeStep} value={props.counter.step} type="number"/>
            <button onClick={props.inc}>Inc</button>
            <button onClick={props.dec}>Dec</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { counter: state.counter }  
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ inc, dec, changeStep }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
