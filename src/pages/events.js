import React from 'react';

function Events() {
  const pastEvents = [
    {
      title: 'Gourmet Wine Pairing Dinner',
      image: 'https://via.placeholder.com/150',
      description: 'An exclusive evening of fine dining and expertly paired wines.',
    },
    {
      title: 'Mediterranean Feast Night',
      image: 'https://via.placeholder.com/150',
      description: 'A celebration of Mediterranean cuisine with a curated multi-course meal.',
    },
    {
      title: 'Farm-to-Table Brunch',
      image: 'https://via.placeholder.com/150',
      description: 'Enjoy fresh, locally-sourced dishes prepared by top chefs.',
    },
  ];

  const upcomingEvents = [
    { date: '2024-12-01', title: 'Christmas Dinner Party' },
    { date: '2025-01-15', title: 'New Year’s Gourmet Tasting Event' },
    { date: '2025-02-20', title: 'Valentine’s Culinary Experience' },
  ];

  return (
    <div>
      <section>
        <h1>Events</h1>
        <p>
          Join us for unforgettable culinary experiences, from intimate dinner parties and gourmet
          tastings to seasonal brunches and farm-to-table gatherings. Explore our past highlights,
          upcoming events, and book your spot for future meals to savor.
        </p>
      </section>

      <section>
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

      <section>
        <h2>Book Future Events</h2>
        <div className="calendar-booking">
          <div className="calendar">[Calendar Component Placeholder]</div>
          <form className="booking-form">
            <label>
              Event:
              <select>
                <option value="">Select an event</option>
                {upcomingEvents.map((event, index) => (
                  <option key={index} value={event.title}>
                    {event.title} - {event.date}
                  </option>
                ))}
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

      <section>
        <h2>Upcoming Events</h2>
        <ul>
          {upcomingEvents.map((event, index) => (
            <li key={index}>
              {event.date} - {event.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Events;
