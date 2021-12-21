// NOTE: We have to use 'use' at the first to make a hooks 
import {useEffect} from "react";

const useTitleCount=(count)=>{
    // here we are creating the custom hooks called 'useTitleCount'
    useEffect(()=>{
        if(count>=1){
          document.title=`Chats (${count})`;
        }else{
          document.title="Chat";
        }
      },[count])
}

export default useTitleCount;