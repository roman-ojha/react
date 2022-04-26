import React from 'react';
import ComponentB from './ComponentB';

const ComponentA=()=>
{
    return <ComponentB/>;
}


// we are exporting the componentA and importing this component to the App
export default ComponentA;