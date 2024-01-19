import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const MentorProfile = () => {
  const mentors = [
    {
      id: 1,
      name: 'John Doe',
      expertise: ['Mathematics', 'Physics'],
      availability: 'Monday to Friday, 9 AM - 5 PM',
      successStories: 'John has a passion for teaching Mathematics and Physics...',
      feedbacks: [
        { id: 1, studentName: 'Alice', comment: 'John is an amazing teacher!' },
        { id: 2, studentName: 'Bob', comment: 'I improved my math skills significantly.' },
        { id: 3, studentName: 'Charlie', comment: 'Highly recommended mentor!' },
      ],
    },
    // Add more mentors as needed
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-4xl font-bold mb-5">Mentor Profiles</h1>

      {mentors.map((mentor) => (
        <div key={mentor.id} className="mb-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{mentor.name}</h5>
              <p className="card-text">
                <strong>Expertise: </strong>{mentor.expertise.join(', ')}
              </p>
              <p className="card-text">
                <strong>Availability: </strong>{mentor.availability}
              </p>
              <p className="card-text">
                <strong>Success Stories: </strong>{mentor.successStories}
              </p>
            </div>
          </div>

          <div id={`carousel-${mentor.id}`} className="carousel slide mt-4" data-ride="carousel">
            <div className="carousel-inner">
              {mentor.feedbacks.map((feedback, index) => (
                <div key={feedback.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">{feedback.studentName}</h6>
                      <p className="card-text">{feedback.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href={`#carousel-${mentor.id}`} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#carousel-${mentor.id}`} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorProfile;
