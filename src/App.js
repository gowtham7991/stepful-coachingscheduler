import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router";
import Home from "./home"
import Login from "./login"
import StudentRegistration from "./studentRegistration"
import CoachRegistration from "./coachRegistration"
import SchedulingApp from "./app/index"
import loginReducer from './reducers/login-reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import slotsReducer from './reducers/slots-reducer';
import bookingsReducer from './reducers/bookings-reducer';
import feedbackReducer from './reducers/feedback-reducer';

const store = configureStore(
  {
    reducer : {
      loginData: loginReducer,
      slotsData : slotsReducer,
      bookingsData : bookingsReducer,
      feedbackData : feedbackReducer
    }
  }
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register/student" element={<StudentRegistration/>} />
            <Route path="/register/coach" element={<CoachRegistration/>} />
            <Route path="/app/*" element={<SchedulingApp/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
