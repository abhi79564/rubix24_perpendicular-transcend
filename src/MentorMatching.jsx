import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MentorMatching.css'; // Import your custom CSS file

const MentorMatching = () => {
  const [menteeData, setMenteeData] = useState({
    interests: '',
    availability: '',
    timeAvailableBetween: '',
  });

  const [matchedMentors, setMatchedMentors] = useState([]);

  const mentorsData = [
    { id: 1, name: 'John Doe', expertise: 'Web Development', availability: ['Monday', 'Wednesday'], timeAvailableBetween: '10 AM - 5 PM' },
    { id: 2, name: 'Jane Smith', expertise: 'Data Science', availability: ['Tuesday', 'Thursday'], timeAvailableBetween: '1 PM - 6 PM' },
    { id: 3, name: 'Bob Johnson', expertise: 'Networking', availability: ['Monday', 'Wednesday', 'Friday'], timeAvailableBetween: '9 AM - 4 PM' },
    { id: 4, name: 'Alice Wilson', expertise: 'UX Design', availability: ['Thursday', 'Friday'], timeAvailableBetween: '2 PM - 7 PM' },
    { id: 5, name: 'Chris Brown', expertise: 'Mobile App Development', availability: ['Monday', 'Tuesday'], timeAvailableBetween: '11 AM - 6 PM' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenteeData({
      ...menteeData,
      [name]: value,
    });
  };

  const handleMatchMentors = () => {
    const matchedMentors = mentorsData.map((mentor) => {
      // Matching algorithm logic
      const commonCriteria =
        mentor.expertise === menteeData.interests &&
        mentor.availability.includes(menteeData.availability) &&
        mentor.timeAvailableBetween === menteeData.timeAvailableBetween;

      // Calculate matching percentage based on the number of common criteria
      const matchingPercentage = commonCriteria ? (3 / 3) * 100 : 0;

      return { ...mentor, matchingPercentage };
    });

    // Sort mentors by matching percentage in descending order
    const sortedMentors = matchedMentors.sort((a, b) => b.matchingPercentage - a.matchingPercentage);

    setMatchedMentors(sortedMentors);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="mentor-matching-form">
        <h2 className="mb-4">Mentor Matching</h2>
        <div className="mb-3">
          <label className="form-label">
            Interests:
            <input type="text" className="form-control" name="interests" value={menteeData.interests} onChange={handleInputChange} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Availability:
            <input type="text" className="form-control" name="availability" value={menteeData.availability} onChange={handleInputChange} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Time Available Between:
            <input type="text" className="form-control" name="timeAvailableBetween" value={menteeData.timeAvailableBetween} onChange={handleInputChange} />
          </label>
        </div>
        <button className="btn btn-primary" onClick={handleMatchMentors}>
          Find Matching Mentors
        </button>

        {matchedMentors.length > 0 && (
          <div className="mt-4">
            <h3>Suggested Mentors:</h3>
            <ul className="list-group">
              {matchedMentors.map((mentor) => (
                <li key={mentor.id} className="list-group-item">
                  {mentor.name} - Matching Percentage: {mentor.matchingPercentage}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorMatching;
