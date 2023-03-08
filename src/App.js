import Auth from "./pages/authentication/Auth";
import Authenticator from "./pages/authentication/Authenticator";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
        <Router>
            <Routes>
              <Route path="/" element={<Auth/>}/>
              <Route path="/authenticate" element={<Authenticator/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App;
