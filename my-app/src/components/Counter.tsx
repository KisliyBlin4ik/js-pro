import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREMENT_CREATOR } from 'src/actions/actions';

class Counter extends Component {
    render() {
        const state = this.props;

        console.log(state);
        
        return (
            <div>
                {/* @ts-expect-error */}
                <button onClick={() => state.dispatch(INCREMENT_CREATOR(5   ))}>
                    Increment
                </button>
                {/* @ts-expect-error */}
                <button onClick={() => state.dispatch({ type: 'DECREMENT'})}>
                    Decrement
                </button>
                <br />
                {/* @ts-expect-error */}
                <span>Counter {state.count}</span>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        count: state.count,
    }
}

export default connect(mapStateToProps)(Counter)


// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// const Counter = () => {
//     const counter = useSelector((state: any) => state.count)

//     const dispatch = useDispatch();
//   return (
//     <div>
//         <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//         <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         <br />
//         <span>Counter {counter}</span>
//     </div>
//   )
// }

// export default Counter

