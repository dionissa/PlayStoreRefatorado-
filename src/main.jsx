import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './components/section'
import Header from './components/header'
import './index.css'
import MainContent from './components/main-content'
import Footer from './components/footer';
import Form from './components/form';
import AboutUs from './components/about-us';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Section />
    <MainContent />
    <AboutUs />
    <Form />
    <Footer />
  </React.StrictMode>,
)
