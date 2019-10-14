import { post } from '../src/check-service';
import React from 'react';
const App = () => (
    <div>
        <div><button
            onClick={() => post({ type: 'a' })}
        >A</button></div>
        <div><button
            onClick={() => post({ type: 'b' })}
        >B</button></div>
        <div><button
            onClick={() => {
                post({ type: 'a' });
                post({ type: 'b' });
            }}
        >both</button></div>
    </div>
)

export default App;
