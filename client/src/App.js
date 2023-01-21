import Account from "./component/Account";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info from "./component/Info";
import Security from "./component/Security";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Account />} ></Route>
          <Route path="/info" element={<Info/>} ></Route>
          <Route path="/sec" element={<Security/>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
