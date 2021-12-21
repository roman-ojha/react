import React,{useState} from "react";
import Child from "./React-components/Child";

const App = () => {
  const [state,setState]=useState({
    name: "",
  });

const handleCallback = (childData) =>{
    setState({name: childData})
}


    const {name} = state;
    return(
        <div>
            <Child parentCallback = {handleCallback}/>
            {name}
        </div>
);
};

export default App;
