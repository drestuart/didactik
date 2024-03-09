import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import { MentorsPage } from './pages/mentorsPage';
import { MentorPage } from './pages/mentorPage';
import { EditMentorPage } from './pages/editMentorPage';
import { RegisterPage } from './pages/registerPage';

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
      <nav>
        <ul>
          <li>
            <Link to="/">Didactik Home</Link>
          </li>
          <li>
            <Link to="/mentors">All Mentors</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to Didactik</h2>
    </div>
  );
}

function SearchPage() {
  return (
    <div>
      <h2>Search</h2>
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
