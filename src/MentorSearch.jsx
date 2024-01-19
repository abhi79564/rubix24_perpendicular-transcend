// MentorSearch.js

import React, { useState } from 'react';
import './MentorSearch.css'; // Import your custom CSS file

const mentorsData = [
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Web Development',
    availability: 'Monday to Friday',
    successStory: 'Helped several students launch successful coding careers.',
    image: 'https://placekitten.com/200/200', // Replace with the mentor's image URL
  },
  {
    id: 2,
    name: 'Smith',
    expertise: 'App Development',
    availability: 'Tuesday to Friday',
    successStory: 'Helped several students launch successful coding careers.',
    image: 'https://placekitten.com/201/200', // Replace with the mentor's image URL
  },
  {
    id: 3,
    name: 'Warner',
    expertise: 'Networking',
    availability: 'Monday to Thrusday',
    successStory: 'Helped several students launch successful coding careers.',
    image: 'https://placekitten.com/202/200', // Replace with the mentor's image URL
  },
  {
    id: 4,
    name: 'Marsh',
    expertise: 'CS',
    availability: 'Monday to Wednesday',
    successStory: 'Helped several students launch successful coding careers.',
    image: 'https://placekitten.com/203/200', // Replace with the mentor's image URL
  },
  {
    id: 5,
    name: 'Abhijeet',
    expertise: 'Web Development',
    availability: 'Wednesday to Friday',
    successStory: 'Helped several students launch successful coding careers.',
    image: 'https://placekitten.com/200/200', // Replace with the mentor's image URL
  },
  {
    id: 6,
    name: 'Abhishek',
    expertise: 'Data Science',
    availability: 'Monday to Friday',
    successStory: 'Helped several students launch successful coding careers.',
    image: 'https://placekitten.com/200/200', // Replace with the mentor's image URL
  }
];

const MentorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to filter mentors based on search term
  const filteredMentors = mentorsData.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search mentors by name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append"><a href="/MentorMatching">
            <button className="btn btn-primary ml-2" type="button">
            Find your mentor
          </button>
            </a>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="col-md-4 mb-4">
            <div className="card">
            <a href="/MentorPricing">
            <img src={mentor.image} className="card-img-top" alt={mentor.name} />
            </a>
 
              <div className="card-body">
                <h5 className="card-title">{mentor.name}</h5>
                <p className="card-text">
                  <strong>Expertise:</strong> {mentor.expertise}
                </p>
                <p className="card-text">
                  <strong>Availability:</strong> {mentor.availability}
                </p>
                <p className="card-text">
                  <strong>Success Story:</strong> {mentor.successStory}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSearch;