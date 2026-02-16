import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeLanguageProvider } from './context/ThemeLanguageContext.jsx'
import './index.css'
import App from './App.jsx'

// Function to update favicon based on theme
const updateFavicon = () => {
  const isDark = document.documentElement.classList.contains('dark');
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = isDark ? '/logo-dark.svg' : '/logo.svg';
  }
};

// Initial favicon setup
updateFavicon();

// Watch for theme changes
const observer = new MutationObserver(() => {
  updateFavicon();
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeLanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ThemeLanguageProvider>
  </StrictMode>,
)
