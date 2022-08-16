import React, { useEffect } from 'react';
import {test} from '../api/http';

const ChatPage = () => {

  useEffect(()=> {
    test()
  },[])
  return (
    <div>
      <h1>CHAT</h1>
    </div>
  );
}

export default ChatPage;
