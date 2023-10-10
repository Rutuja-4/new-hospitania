import Shoppage from "./Shop-Pages/Shoppage";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Main from "./HomePage/Main";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/shoppage' element={<Shoppage/>}></Route>
            </Routes>
      </Router>
    </div>
  );
}
export default App;
