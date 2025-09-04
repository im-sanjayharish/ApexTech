import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';
import BuildCard from "../components/BuildCard";
import logo from '../assets/apex-transparent-new.png'; // Import directly

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const handlePrev = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? builds.length - 1 : prevIndex - 1
      );
      setSlideDirection(null);
    }, 400);
  };

  const handleNext = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === builds.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection(null);
    }, 400);
  };

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + builds.length) % builds.length;
    const nextIndex = (currentIndex + 1) % builds.length;
    return [builds[prevIndex], builds[currentIndex], builds[nextIndex]];
  };

  const builds = [
    {
      title: "Gaming Beast",
      price: "130000₹ - 350000₹",
      description: "High-end gaming rigs for 4K gaming and VR experiences",
      specs: ["RTX 4080/4090", "Intel i7/i9 or AMD Ryzen 7/9", "32GB DDR5 RAM", "1TB NVMe SSD"],
    },
    {
      title: "Creator Workstation",
      price: "170000₹ - 450000₹",
      description: "Powerful workstations for content creation and professional work",
      specs: ["RTX 4070/4080", "Intel i7/i9 or AMD Ryzen 9", "64GB DDR5 RAM", "2TB NVMe SSD"],
    },
    {
      title: "Budget Champion",
      price: "55000₹ - 105000₹",
      description: "Affordable PCs that don't compromise on quality",
      specs: ["GTX 1660/RTX 3060", "Intel i5 or AMD Ryzen 5", "16GB DDR4 RAM", "500GB SSD"],
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <img className="logo" src={logo} alt="Apex Tech Logo" />

          <p className="hero-description">
            From high-performance custom PCs to seamless smart homes and robust IT solutions, 
            we integrate technology into your life and business.
          </p>
          <Link to="/build" className="btn btn-primary btn-lg">
            Build Now →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We build, automate, and support the technology that powers your world</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>PC Builds & Repairs</h3>
              <p>Expertly crafted custom PCs for gaming or professional use, plus reliable repair and upgrade services.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Smart Home Automation</h3>
              <p>Integrate your home with Google and Alexa for effortless control over lighting, security, and entertainment systems.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Tech Consultation</h3>
              <p>Expert guidance across Web, App, and Cloud services to optimize your digital infrastructure and accelerate business growth.</p>
            </div>

            <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Internships</h3>
                <p>Hands-on internship opportunities designed to enhance skills, gain practical experience, and kickstart your career in technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages">
        <div className="container">
          <h2 className="section-title">The Apex Advantage</h2>
          <p className="section-subtitle">We're more than just a tech company. We're your local partner in innovation.</p>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">⭐</div>
              <h3>Expert Advice</h3>
              <p>Tailored recommendations based on your specific needs, budget, and performance requirements.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">💎</div>
              <h3>Transparent Pricing & Premium Components</h3>
              <p>We ensure complete transparency with clear, upfront pricing — no hidden charges or surprises.
                 Every build uses only top-quality components from trusted brands, professionally assembled 
                 and rigorously tested for maximum performance and reliability.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🎓</div>
              <h3>Internships</h3>
              <p>Hands-on learning with real-world projects, mentorship, and skill-building opportunities to prepare you for a successful career.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">📢</div>
              <h3>Digital Marketing & Growth Strategies</h3>
              <p>Boost your online presence with tailored digital marketing solutions. From SEO and 
                 social media campaigns to content strategy and targeted ads, we help you reach 
                 the right audience, increase engagement, and drive measurable business growth.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">💻</div>
              <h3>Secure Software & App Development</h3>
              <p>We specialize in building secure and scalable solutions — from mobile and web 
                 applications to custom system software. Every project is crafted with a strong 
                 focus on security, performance, and user experience, ensuring your business 
                 runs smoothly in the digital era.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">☁️</div>
              <h3>Cloud Computing & Scalable Solutions</h3>
              <p>Harness the power of the cloud with our expert solutions. We design and deploy 
                 reliable, scalable, and cost-efficient cloud infrastructures that improve data 
                 accessibility, enhance collaboration, and ensure business continuity with 
                 enterprise-grade security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builds Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Featured Builds</h2>
          <p className="section-subtitle">Precision-crafted PCs tailored to your needs</p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="custom-btn" onClick={handlePrev} aria-label="Previous">←</button>
            <div className="cards-row">
              {getVisibleCards().map((build, idx) => {
                const middleIndex = Math.floor(getVisibleCards().length / 2);
                const isMiddle = idx === middleIndex;
                let slideClass = '';
                if (slideDirection === 'left') slideClass = 'slide-left';
                if (slideDirection === 'right') slideClass = 'slide-right';
                return (
                  <div key={idx} className={`build-card ${isMiddle ? "middle" : "side"} ${slideClass}`}>
                    <BuildCard
                      title={build.title}
                      price={build.price}
                      description={build.description}
                      specs={build.specs}
                    />
                  </div>
                );
              })}
            </div>
            <button className="custom-btn" onClick={handleNext} aria-label="Next">→</button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Have a project in mind? We'd love to hear about it. Get a free consultation today.</p>
            <div className="cta-buttons">
              <Link to="/build" className="btn btn-primary btn-lg">Start Your Build →</Link>
              <a href="mailto:hhemanthtg@gmail.com" className="btn btn-outline btn-lg">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
