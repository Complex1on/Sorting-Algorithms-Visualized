import React from 'react';
import Bar from './Bar';

import { mergeSort } from '../../algorithms/mergeSort';

let test = [231, 72, 13, 60, 199, 56];
//let test2 = [231, 72, 13, 60, 199, 56];
const result = mergeSort(test);
class ArrayList extends React.Component {
    state = { array: result };

    renderArray() {
        return this.state.array.map(el => {
            return <Bar key={el} width={el} />;
        });
    }
    render() {
        return this.renderArray();
    }
}

export default ArrayList;
