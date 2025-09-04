import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BuildPage.css';

const BuildPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    buildType: '',
    budget: '',
    usage: '',
    specifications: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="build-page">
        <section className="success-section">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">✅</div>
              <h1>Thank You!</h1>
              <p>Your build request has been submitted successfully. Our team will contact you within 24 hours to discuss your custom PC build.</p>
              <Link to="/" className="btn btn-primary btn-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="build-page">
      {/* Header */}
      <section className="build-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="back-button">
              ← Back to Home
            </Link>
            <h1 className="build-title">Configure Your Custom PC</h1>
            <p className="build-subtitle">
              Let's build your perfect PC. Fill out the form below and our experts 
              will create a custom configuration tailored to your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Build Form */}
      <section className="build-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-info">
              <h2>Tell Us About Your Dream Build</h2>
              <p>Our team of experts will analyze your requirements and provide you with:</p>
              <ul>
                <li>🎯 Custom component recommendations</li>
                <li>💰 Detailed pricing breakdown</li>
                <li>⚡ Performance estimates</li>
                <li>📦 Complete assembly service</li>
                <li>🛠️ 2-year warranty coverage</li>
                <li>📞 Ongoing technical support</li>
              </ul>
            </div>

            <div className="form-wrapper">
              <form onSubmit={handleSubmit} className="build-form">
                {/* Contact Information */}
                <div className="form-section">
                  <h3>Contact Information</h3>

                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Build Requirements */}
                <div className="form-section">
                  <h3>Build Requirements</h3>

                  <div className="form-group">
                    <label htmlFor="buildType">Build Type *</label>
                    <select
                      id="buildType"
                      name="buildType"
                      value={formData.buildType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select build type</option>
                      <option value="gaming">Gaming PC</option>
                      <option value="workstation">Workstation</option>
                      <option value="creator">Content Creation</option>
                      <option value="office">Office/Business</option>
                      <option value="budget">Budget Build</option>
                      <option value="custom">Custom Requirements</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="500-800">45000₹ - 70000₹</option>
                      <option value="800-1200">$800 - $1,200</option>
                      <option value="1200-1800">$1,200 - $1,800</option>
                      <option value="1800-2500">$1,800 - $2,500</option>
                      <option value="2500-4000">$2,500 - $4,000</option>
                      <option value="4000+">$4,000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="usage">Primary Usage *</label>
                    <textarea
                      id="usage"
                      name="usage"
                      rows="3"
                      placeholder="Describe how you'll primarily use this PC..."
                      value={formData.usage}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="specifications">Additional Specifications</label>
                    <textarea
                      id="specifications"
                      name="specifications"
                      rows="4"
                      placeholder="Any specific requirements, preferred brands, or other details..."
                      value={formData.specifications}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-submit">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit Build Request →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildPage;