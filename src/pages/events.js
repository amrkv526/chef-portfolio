import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Events() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const pastEvents = [
    {
      title: 'Gourmet Wine Pairing Dinner',
      image: 'https://via.placeholder.com/300',
      description: 'An exclusive evening of fine dining and expertly paired wines.',
    },
    {
      title: 'Mediterranean Feast Night',
      image: 'https://via.placeholder.com/300',
      description: 'A celebration of Mediterranean cuisine with a curated multi-course meal.',
    },
    {
      title: 'Farm-to-Table Brunch',
      image: 'https://via.placeholder.com/300',
      description: 'Enjoy fresh, locally-sourced dishes prepared by top chefs.',
    },
  ];

  return (
    <div className="events-container">
      <section>
        <h1>Events</h1>
        <p>
          Join us for unforgettable culinary experiences, from intimate dinner parties and gourmet tastings to
          seasonal brunches and farm-to-table gatherings.
        </p>
      </section>

      <section>
        <h2>Book Future Events</h2>
        <div className="calendar-booking">
          <div className="calendar">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          <form className="booking-form">
            <label>
              Event:
              <select>
                <option value="">Select an event</option>
                <option value="Christmas Dinner Party">Christmas Dinner Party - 2024-12-01</option>
                <option value="New Year’s Gourmet Tasting Event">New Year’s Gourmet Tasting Event - 2025-01-15</option>
                <option value="Valentine’s Culinary Experience">Valentine’s Culinary Experience - 2025-02-20</option>
              </select>
            </label>
            <label>
              Your Name:
              <input type="text" placeholder="Enter your name" />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" />
            </label>
            <button type="submit">Book Event</button>
          </form>
        </div>
      </section>

      <section className="past-events-section">
        <h2>Past Events</h2>
        <div className="past-events-grid">
          {pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
