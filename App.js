import React, { useState } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Index from "./index";
import CGDCContext from "./context/context";

export default function App() {
  const [posts, setPosts] = useState();
  return (
    <>
      <Provider store={store}>
        <CGDCContext.Provider value={{ posts, setPosts }}>
          <Index />
        </CGDCContext.Provider>
      </Provider>
    </>
  );
}
