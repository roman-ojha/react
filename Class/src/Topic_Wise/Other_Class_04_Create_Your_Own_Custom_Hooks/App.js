import React,{useState} from "react";
import useTitleCount from "./hooks/useTitleCount";

const App = () => {
  const [count,setCount]=useState(0);
  useTitleCount(count);
  // useEffect(()=>{
  //   if(count>=1){
  //     document.title=`Chats (${count})`;
  //   }else{
  //     document.title="Chat";
  //   }
  // },[count])
  // in this case we are trying the make a custom hooke of the useEffect because it could be repitative and rather then using the same peace of code in different file we can make a one hook and then use its any where
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <p style={{fontSize:"50px"}}>{count}</p>
      <button onClick={()=>{
        setCount(count+1);
      }} style={{width:"100px",height:"50px",cursor:"pointer"}}> Click</button>
      </div>
    </>
  );
};

export default App;
