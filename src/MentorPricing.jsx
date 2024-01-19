// MentorPricing.js

import React, { useState } from 'react';
import './MentorPricing.css'; // Import your custom CSS file

const MentorPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayNow = () => {
    if (selectedPlan) {
      // Add logic to navigate to the payment gateway or display a payment modal
      // For simplicity, we'll just log a message
      console.log(`Selected Plan: ${selectedPlan}`);
    } else {
      alert('Please select a pricing plan before proceeding to payment.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose Your Pricing Plan</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className={`card ${selectedPlan === 'hourly' ? 'selected' : ''}`} onClick={() => handlePlanSelection('hourly')}>
            <div className="card-body">
              <h5 className="card-title">Hourly Rate</h5>
              <p className="card-text">Pay by the hour as you go.</p>
              <p className="card-text">Price: $20 per hour</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card ${selectedPlan === 'package' ? 'selected' : ''}`} onClick={() => handlePlanSelection('package')}>
            <div className="card-body">
              <h5 className="card-title">Package Deal</h5>
              <p className="card-text">Purchase a package for multiple sessions.</p>
              <p className="card-text">Price: $100 for 5 sessions</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card ${selectedPlan === 'subscription' ? 'selected' : ''}`} onClick={() => handlePlanSelection('subscription')}>
            <div className="card-body">
              <h5 className="card-title">Subscription</h5>
              <p className="card-text">Subscribe for ongoing mentorship.</p>
              <p className="card-text">Price: $50 per month</p>
            </div>
          </div>
        </div>
      </div>
      {selectedPlan && (
        <div className="text-center mt-4">
          <p className="confirmation-message">
            You have selected the <strong>{selectedPlan}</strong> plan.
          </p>
          <button className="btn btn-primary" onClick={handlePayNow}>
            <a href="http://localhost:3050/">Pay Now</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default MentorPricing;
