import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import { MentorsPage } from './pages/mentorsPage';
import { MentorPage } from './pages/mentorPage';
import { EditMentorPage } from './pages/editMentorPage';
import { RegisterPage } from './pages/registerPage';
import { SearchPage } from './pages/searchPage';
import NavBar from './components/navBar';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mentors" element={<MentorsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="mentor/:mentor_id" element={<MentorPage />} />
          <Route path="mentor/:mentor_id/edit" element={<EditMentorPage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

    </div>
  );
}

function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div className="page_content">
      <h2>Welcome to Didactik</h2>
      <Typography>Didactik is a mentorship platform where users can find a mentor, or sign up to mentor others.</Typography><br/>
      <Typography>Use the navigation links at the top of the page to see a list of current mentors, search for mentors by topic, or register as a mentor yourself.</Typography>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
