
//b8fc9fa1e6694440bd9372d8f6ada677

import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
    
  );
}

export default App;
