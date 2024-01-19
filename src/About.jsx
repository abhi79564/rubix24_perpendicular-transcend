import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import web1 from './images/istockphoto-1127728924-612x612.jpg';
import web2 from './images/istockphoto-1278975231-612x612.jpg';
import web3 from './images/istockphoto-1430134060-612x612.jpg';

const AboutUs = () => {
  return (
    <div className="container my-2">
      <h2 className="text-center mb-4"><strong>About Us</strong></h2>

      {/* Image Carousel */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={web1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={web2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={web3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Text on the Right */}
        <div className="col-md-6 my-7">
          <h3 className="mb-4">Objectives</h3>
          <p>
          Provide top-notch educational resources and mentorship to help individuals excel in their chosen fields.Guide and mentor individuals in choosing and advancing in their careers          </p>
          <p>
          High Student Success Rates, Positive Impact on Careers          </p>

          {/* Future Goals Section */}
          <h3 className="my-4">Future Goals</h3>
          <p>
          Expand Mentor Prep's reach to a global audience, providing valuable educational content worldwide          </p>
        </div>
      </div>

      {/* Feedback Cards in a Single Row */}
      <div className="row">
        <div className="col-md-12">
          <h3 className="my-4 text-center">Feedback</h3>
          <div className="d-flex justify-content-around">
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold">Dipesh</Card.Title>
                <Card.Text>
                  Teachers are Excellent.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold">Mitesh </Card.Title>
                <Card.Text>
                  Mentors are supportive.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bold">yash</Card.Title>
                <Card.Text>
                  UI is impressive.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
