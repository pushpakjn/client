import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Heading.css";
import "./Calendar.css";
import "./ConnectWithGoogleButton.css";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const renderCalendar = () => {
    const calendar = [];

    for (let i = 0; i < startDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentDate.getDate() &&
        currentDate.getMonth() === new Date().getMonth();
      const classNames = `calendar-day ${isToday ? "today" : ""}`;

      calendar.push(
        <div key={`day-${day}`} className={classNames}>
          {day}
        </div>
      );
    }

    return calendar;
  };
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login");
      setEvents(res.data);
      navigate("/event", { state: res.data });
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <>
      <div className="heading-container">
        <h1 className="heading-text">Google Calendar API</h1>
      </div>
      <div className="calendar">
        <div className="calendar-header">
          <h2>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="calendar-grid">{renderCalendar()}</div>
      </div>
      <div>
        <div className="button-container">
          <button onClick={handleClick} className="hover-button">
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
