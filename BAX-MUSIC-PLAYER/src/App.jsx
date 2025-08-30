import React from "react";
import { RouterProvider } from "react-router";
import { myMap } from "./Router/Map";
import Authcontext from "./Context/Authcontext";
const App = () => {
  return (
    <>
    <Authcontext>
      <RouterProvider router={myMap} />
      
      </Authcontext>
    </>
  );
};
export default App;