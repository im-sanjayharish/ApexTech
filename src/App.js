import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BuildPage from './pages/BuildPage';
import './App.css';

function App() {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = `theme-${newTheme}`;
  };

  React.useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Debug helpers: logs when video loads or errors
  const handleVideoLoaded = () => {
    console.log('Background video loaded (bg-video).');
  };
  const handleVideoError = (e) => {
    console.error('Background video failed to load', e);
    const mediaErr = e?.target?.error;
    if (mediaErr) {
      console.error('Media error code:', mediaErr.code, '— see MDN for codes.');
    }
  };

  return (
    <Router>
      {/* Background Video - served from public/background.mp4 */}
      <video
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Translucent overlay (keeps text readable) */}
      <div id="video-overlay" aria-hidden="true" />

      {/* Your existing app content (unchanged) */}
      <div className="App">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/build" element={<BuildPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
