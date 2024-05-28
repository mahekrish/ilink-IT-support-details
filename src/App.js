import "./App.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Card, CardBody } from "react-bootstrap";
import { useState } from "react";

function App() {
  const locations = [
    {
      location: "Trichy",
      contact: [
        {
          name: "Kathirvelan AR",
          role: "Senior Manager - IT",
          email: "kathirvelanar@ilink-systems.com",
          phone: "+91 9884761413",
        },
        {
          name: "Arun LK",
          role: "Senior Engineer - IT",
          email: "arun.lk@ilink-systems.com",
          phone: "+91 9894410039",
        },
        {
          name: "Senthureswaran Kumaravel",
          role: "Trainee Engineer - IT",
          email: "senthureswaran.k@ilink-systems.com",
          phone: "+91 8825518621",
        },
      ],
    },
    {
      location: "Chennai",
      contact: [
        {
          name: "Sathishkumar Elango",
          role: "Associate Director - IT",
          email: "sathishkumar.elango@ilink-systems.com",
          phone: "+91 9840656772",
        },
        {
          name: "Karthikeyan Shankar",
          role: "Senior Engineer - IT",
          email: "karthikeyan.shankar@ilink-systems.com",
          phone: "+91 9345463314",
        },
        {
          name: "J Mohamed Buhari Deen",
          role: "Senior Administrator - IT",
          email: "buharideen.jaburudeen@ilink-systems.com",
          phone: "+91 8754654428",
        },
        {
          name: "Tharun J",
          role: "Trainee Engineer - IT",
          email: "tharun.jayakumar@ilink-systems.com",
          phone: "+91 7550138430",
        },
        {
          name: "Santhosh S V",
          role: "Trainee Engineer - IT",
          email: "santhosh.subramaniam@ilink-systems.com",
          phone: "+91 9944316543",
        },
      ],
    },
    {
      location: "Pune",
      contact: [
        {
          name: "Suyog Vilas Kote",
          role: "Administrator - IT",
          email: "suyog.kote@ilink-systems.com",
          phone: "+91 7387632633",
        },
        {
          name: "Vijay Shankarrao Dudhamal",
          role: "Senior Administrator - IT",
          email: "vijay.dudhamal@ilink-systems.com",
          phone: "+91 7709891852",
        },
        {
          name: "Sandesh Kale",
          role: "Engineer - IT",
          email: "sandesh.kale@ilink-systems.com",
          phone: "+91 9765485343",
        },
        {
          name: "Samruddhi Bante",
          role: "Trainee Engineer - IT",
          email: "samruddhi.bante@ilink-systems.com",
          phone: "+91 9834099572",
        },
      ],
    },
    {
      location: "Noida & Bangalore",
      contact: [
        {
          name: "Dinakaran D",
          role: "Senior Executive - IT",
          email: "dinakaran@ilink-systems.com",
          phone: "+91 9597750315",
        },
        {
          name: "Nikhil Vimal",
          role: "Trainee Engineer - IT",
          email: "nikhil.vimal@ilink-systems.com",
          phone: "+91 9792877589",
        },
      ],
    },
  ];
  const [showContactDetails, setShowContactDetails] = useState({});
  const handleClick = (location) => {
    setShowContactDetails(location);
  };
  const Contact = ({ contactInfo }) => {
    return (
      <Card
        style={{ width: "19rem", height: "10rem" }}
        className="d-flex m-2 contact-card rounded-5"
      >
        <CardBody>
          <Card.Title className="fw-bold">{contactInfo.name}</Card.Title>
          <Card.Subtitle className="fw-light">{contactInfo.role}</Card.Subtitle>

          <div className="contact-row my-2">
            <span className="me-2">
              <i className="bi bi-envelope"></i>
            </span>
            {contactInfo.email}
          </div>
          <div className="contact-row">
            <span className="me-2">
              <i className="bi bi-telephone"></i>
            </span>
            {contactInfo.phone}
          </div>
        </CardBody>
      </Card>
    );
  };
  return (
    <div className="app">
      <header className="app-header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand
              href="/"
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              iLink IT Support Contact Details
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main className="py-4">
        <Container className="d-flex flex-column">
          {((showContactDetails && showContactDetails?.contact?.length === 0) ||
            !showContactDetails ||
            Object.keys(showContactDetails).length === 0) && (
            <>
              <div className="fw-medium my-3">
                Click on view IT support contact details:
              </div>
              <div className="d-flex flex-wrap">
                {[...locations].map((loc, i) => {
                  return (
                    <Card
                      key={`location-header-${i}`}
                      style={{ width: "14rem", height: "14rem" }}
                      className="location-header-class rounded-5"
                      onClick={() => handleClick(loc)}
                    >
                      {loc.location}
                    </Card>
                  );
                })}
              </div>
            </>
          )}
          {showContactDetails && showContactDetails?.contact?.length > 0 && (
            <div className="d-flex flex-column">
              <div
                className="d-flex align-items-center m-2"
                onClick={() => setShowContactDetails({})}
              >
                <div className="me-2 back-arrow">
                  <i
                    className="bi bi-arrow-left-circle"
                    style={{ fontSize: 30 }}
                  ></i>
                </div>
                <div style={{ fontSize: 25 }} className="d-flex">
                  {showContactDetails.location}
                </div>
              </div>
              <div className="d-flex flex-wrap">
                {[...showContactDetails.contact].map((contact, i) => {
                  return (
                    <Contact contactInfo={contact} key={`contactInfo-${i}`} />
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
