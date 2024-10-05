import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment'; import 'moment-timezone'; 

function Events() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup`
      );

      if (response.status === 200) {
        const data = response.data.data.data;
        const eventsData = data.flatMap((startup) =>
          startup.events.map((event) => ({
            ...event,
            registeredCompanyName: startup.registeredCompanyName,
          }))
        );
        setEvents(eventsData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="md:ml-5  w-full rounded-2xl mx-auto">
        <div className="bg-white w-full rounded-2xl pt-5 pb-10">
          <div className="md:px-5 px-3 py-5">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-start">
                <thead>
                  <tr>
                    <th className="py-3 px-3 border-1">Startup</th>
                    <th className="px-3 py-3 border-1">Date</th>
                    <th className="px-3 py-3 border-1">Time</th>
                    <th className="px-3 py-3 border-1">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event._id}>
                      <td className="border-1 px-3">
                        {event.registeredCompanyName}
                      </td>
                      <td className="border-1 px-3">
                        {moment(event.date).tz('Asia/Kolkata').format("DD MMM YY")}
                      </td>
                      <td className="border-1 px-3">{event.time}</td>
                      <td className="border-1 px-3">
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.url}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
