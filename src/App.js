import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './header-footer';
import { MainPage } from './mainpage';
import { Timeline } from './timeline';
import { Error } from './error';
import { Resume } from './resume';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="body-content">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />}>
          </Route>
          <Route path="/timeline" element={<Timeline />}>
          </Route>
          <Route path="/resume" element={<Resume />}>
          </Route>
          <Route path="*" element={<Error />}>
          </Route>
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
