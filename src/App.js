import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {FeedbackProvider} from './context/FeedbackContext'

import Header from './components/Header'
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";


const App = () => {


  return (
      <FeedbackProvider>
        <Router>
          <Header text='Feedback UI'/>
          <div className="container">
            <Routes>
              <Route path='/' element={
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                </>
              }>
              </Route>
              <Route path='/about' element={<AboutPage/>}/>
            </Routes>
            <AboutIconLink/>
          </div>
        </Router>
      </FeedbackProvider>
  );
}

export default App;
