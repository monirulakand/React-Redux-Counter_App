import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../redux/state/counter/counterSlice";

const Counter = () => {

    const myNumber=useRef();
    const count=useSelector((state)=> state.counter.value);
    const dispatch=useDispatch();

    return (
        <div className="card">
            <div className="card-header bg-primary">
                <h4 className="text-white">Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={()=>{dispatch(increment())}} className="btn btn-success">Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className="btn mx-2 btn-danger">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={myNumber} className="form-control w-100" type="number"/>
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="btn btn-dark my-2 btn-block w-100">Custom Value</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;