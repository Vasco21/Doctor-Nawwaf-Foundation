import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from './Styles/GlobalStyles';
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import Historybord from "./screens/HistoryBord/Historybord";
import Mission from "./screens/Misson/Blog";
import BlogSingle from "./screens/Misson/blog-single-page/BlogSingle";
import Events from "./screens/sections/Events/Events"
import Testimonial from "./screens/Staff/Testimonial";
import CreateNote from "./screens/SingleNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Covid from "./common/CovidInfo/Covid";
import Layout from "./Layout";
import Contact from "./screens/Contact/Contact";
import ScrollButton from "./scrollToTop/scrollBtn";


function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <GlobalStyles/>
      <Header setSearch={(s) =>new  setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/history" component={Historybord} />
        <Route path="/mission" component={Mission} />
        <Route path="/blogsingle/:id" component={BlogSingle} />
        <Route path="/staff" component={Testimonial} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact}/>
        <Route path="/layout" component={Layout}/>
        <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/profile" component={ProfileScreen} />
      </main>
      <Covid />
      <Footer />
      <ScrollButton/>
    </Router>
  );
}

export default App;
