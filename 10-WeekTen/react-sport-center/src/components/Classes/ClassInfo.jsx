// components/Classes/ClassInfo.js
import React from "react";

const ClassInfo = ({ activeClass }) => {
  const classData = {
    yoga: {
      title: "Why Choose Our Yoga?",
      description:
        "Our yoga classes focus on improving flexibility, strength, and mental well-being.",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      image: "/yoga.jpg",
    },
    group: {
      title: "High-Intensity Group Training",
      description:
        "Join our energetic group sessions for a full-body workout and team motivation.",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      image: "/group.webp",
    },
    solo: {
      title: "Personalized Training Sessions",
      description:
        "Get one-on-one attention from our expert trainers to achieve your fitness goals.",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      image: "/solo.jpg",
    },
    stretching: {
      title: "Flexibility and Mobility",
      description:
        "Improve your range of motion and prevent injuries with our stretching classes.",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      image: "/stret.webp",
    },
    // Add data for other class types here
  };

  const { title, description, schedule, image } = classData[activeClass];

  return (
    <div className={`class-info ${activeClass}`}>
      <div className="class-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>
          When comes{" "}
          {activeClass.charAt(0).toUpperCase() + activeClass.slice(1)} Your Time
        </h4>
        <ul>
          {schedule.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="class-image">
        <img src={image} alt={`${activeClass} Class`} />
      </div>
    </div>
  );
};

export default ClassInfo;
