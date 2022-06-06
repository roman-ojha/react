import React from 'react'

const Child = (props) => {
    const onTrigger = (event) => {
        event.preventDefault();
        props.parentCallback(event.target.myname.value);
    }
  
return(
        <div>
            <form onSubmit = {onTrigger}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
        );
}

export default Child
