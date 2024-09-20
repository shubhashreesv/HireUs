import { Routes, Route } from 'react-router-dom'; 
import Login from './Login';
import Signup from './Signup';
import Skill from './Skill';
import Home from './Home';
import FeaturesPage from './FeaturesPage';
import About from './components/About';
import Jobs from './components/Jobs';
import More from './components/More';
import Chatbot from './Chatbot';
import Profile from './Profile';
import Footer from './components/Footer';
import Header from './components/Header';
import FloatingChatbot from './FloatingChatbot';
import FixedButton from './FixedButton';
import PortfolioApp from './Portfolio_sys/PortfolioApp';
import EscrowApp from './escrow_system/EscrowApp';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/more" element={<More />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/portfolio" element={<PortfolioApp />} />
        <Route path="/escrow" element={<EscrowApp />} />
      </Routes>
      <Footer />
      <FloatingChatbot />
    </>
  );
}

export default App;
