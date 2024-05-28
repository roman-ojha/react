import {
  experimental_useEffectEvent as useEffectEvent,
  useEffect,
  use,
} from "react";

const ChatRoom: React.FC<{ url: string; loggingOptions: {} }> = ({
  url,
  loggingOptions,
}): React.JSX.Element => {
  function onConnect(url: string) {
    logConnection(`Connected to ${url}`, loggingOptions);
  }

  useEffect(() => {
    const room = connectToRoom(url);
    room.onConnect(() => {
      onConnect(url);
    });

    return () => {
      room.disconnect();
    };
    // here react or ESlint will try to warn by saying: "React Hook useEffect has a missing dependency: 'onConnect'"
    // When we will add 'onConnect' function into a dependency then it will again warn mee by saying that: "The 'onConnect' function makes the dependencies of useEffect Hook (at line 22) change on every render. Move it inside the useEffect callback. Alternatively, wrap the definition of 'onConnect' in its own useCallback() Hook."
    //   }, [url, onConnect]);
    // So, if we will wrap 'onConnect' function inside the 'useEffect' hook, then it will again warn mee by saying: "React Hook useEffect has a missing dependency: 'loggingOptions'. Either include it or remove the dependency array."
    /*
        function onConnect(url: string) {
          logConnection(`Connected to ${url}`, loggingOptions);
        }
    */
    // But I don't want to put every variable as dependency like 'loggingOptions' into the dependencies array, the only thing that i wanted is to run this 'useEffect' only when 'url' changes
  }, [url]);

  // In this kind of the situation we can use 'useEffectEvent' where we will wrap 'onConnect' function into 'useEffectEvent' hook
  // so here we want 'useEffect' to get effect whenever 'url' changes and I don't want other variable as a dependencies but also I want to use like 'loggingOptions' inside it in that case we will wrap all the code that uses 'loggingOptions' and we can fire of the function 'onConnect2' as it as an event
  const onConnect2 = useEffectEvent((url: string) => {
    logConnection(`Connected to ${url}`, loggingOptions);
  });

  useEffect(() => {
    const room = connectToRoom(url);
    room.onConnect(() => {
      onConnect2(url);
    });

    return () => {
      room.disconnect();
    };
  }, [url]);

  return <></>;
};

function logConnection(message: string, options: {}) {}

function connectToRoom(url: string): any {}

export default ChatRoom;
