import React from 'react';

const Counter = () => {
    return (
        <div className="card">
            <div className="card-header bg-primary">
                <h4 className="text-white">Counter App</h4>
            </div>
            <div className="card-body">
                <h1>00</h1>
                <div className="my-4">
                    <button className="btn btn-success">Increase</button>
                    <button className="btn mx-2 btn-danger">Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;