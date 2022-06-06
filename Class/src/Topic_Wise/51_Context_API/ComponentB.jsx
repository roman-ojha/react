import React from 'react';
import ComponentC from './ComponentC';

const ComponentB=()=>
{
    return <ComponentC/>;
}


// we are exporting the componentB and importing this component to the ComponentA
export default ComponentB;