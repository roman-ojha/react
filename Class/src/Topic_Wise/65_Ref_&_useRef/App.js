import React,{useRef,useState} from "react";

// https://youtu.be/t2ypzz6gJm0

const App = () => {
  // it like a useState only and it preserve the value. No rerender
  // NOTE: 'useRef' hooks doesn't rerender the component

  let initialvalue=null;
  const input_filed=useRef(initialvalue);
  // useRef(<initial_state>)
  //  'useRef' hooks return one object which will container 'current' value
  let name;
  const [show, setshow]=useState(false);
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(input_filed.current.value);
    // using input_fild.current.value now we can get the value from the input field
     name=input_filed.current.value;
     name===""?alert("Plese fill the data"):setshow(true);
  }
  return (
    <>
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="luckyName">Enter Your luckyName: </label>
      <input type="text" id="input_filed" ref={input_filed}></input>
      //   The another usecase of useRef is to refreance element inside of our html
      //  so, each element inside of your html will have ref attribute, whenever the element in this case 'input' ref get rendered it's going to set 'input_field' equal to this document element 
      {/* now to get the data from the input field, we need the refrence of the input field and using that refrence we can get the data from the value attribute from the input field */}
      {/* now in react js we have a 'ref' attribute in input field through that we can get the data */}
      </div>
      <button>Submit</button>
    </form>
    <p>{show?` Your Name is ${name}`:""}</p>
    </>
  );
};

export default App;
