import { useEffect, useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayEvents from './DisplayCreatorEvents';
import EventsListNavBar from './EventsListNavBar';
import SecondNav from './SecondNav';
import './EventsList.css';
import server from '../server';

const CreatorEvent = () => {
  //const userID = localStorage.getItem('userID');
  const userID = localStorage.getItem('userID');
  const [events, setEvents] = useState([]);

  //   useEffect(() => {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const requestOptions = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         //Authorization: `Bearer ${accessToken}`,
  //       },
  //     };
  //     server
  //       .get(`/events/list/`, requestOptions)
  //       .then((response) => {
  //         const data = response.data.results;
  //         if (data) setEvents(data);
  //         console.log(data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  useEffect(() => {
    setEvents([
      {
        id: 1,
        name: 'Middle East Vape Show 2023',
        summary:
          "The most anticipated Vape Show in the Middle East, it's time to bring your Vape Business and Products to the next level.",
        description:
          'Will be held 3 days from 6 to 8 July 2023, after the success of the 1st event in Bahrain this year with a new atmosphere it will be held in Cairo, Egypt. We choose Egypt International Exhibition Center as the best venue in Cairo for MEVS 2023.',
        start: '2023-05-05T18:38:00.000+00:00',
        end: '2023-07-08T22:00:00',
        url: 'https://www.eventbrite.com/e/middle-east-vape-show-2023-tickets-512820940237?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb',
        created: '2023-03-22T10:00:00',
        changed: '2023-03-22T12:00:00',
        status: 'draft',
        hide_start_date: false,
        hide_end_date: false,
        free: true,
        price: 0,
        waitlist: false,
        view_counter: 0,
        owner: 1,
        category: 1,
        age_restriction: false,
        language: 'English',
        timezone: '6GMT',
        video_url: 'R63RiKdiB2o',
        published: true,
        fully_booked: false,
        organizer: 'Sawa',
        online_event: false,
        logo: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F438303329%2F1343904084043%2F1%2Foriginal.20230203-023453?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=69cab150771ec45eb6ed627fbf66039d',
        venue: {
          name: 'Egypt International Exhibition Center - EIEC',
          address:
            'El-Moshir Tantawy Axis Al Hay Al Asher, Cairo Governorate 4440301',
          latitude: 37.7749,
          longitude: -122.4194,
        },
      },
      {
        id: 2,
        name: 'Formula 1 Etihad Airways Abu Dhabi Grand Prix 2021',
        summary:
          "The most anticipated Vape Show in the Middle East, it's time to bring your Vape Business and Products to the next level.",
        description:
          'Will be held 3 days from 6 to 8 July 2023, after the success of the 1st event in Bahrain this year with a new atmosphere it will be held in Cairo, Egypt. We choose Egypt International Exhibition Center as the best venue in Cairo for MEVS 2023.',
        start: '2023-09-09T18:38:00.000+00:00',
        end: '2023-04-05T22:00:00',
        url: 'https://www.eventbrite.com/e/middle-east-vape-show-2023-tickets-512820940237?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb',
        created: '2023-03-22T10:00:00',
        changed: '2023-03-22T12:00:00',
        status: 'draft',
        hide_start_date: false,
        hide_end_date: false,
        free: true,
        price: 0,
        waitlist: false,
        view_counter: 0,
        owner: 1,
        category: 1,
        age_restriction: false,
        language: 'English',
        timezone: '6GMT',
        video_url: 'R63RiKdiB2o',
        published: true,
        fully_booked: false,
        organizer: 'Sawa',
        online_event: false,
        logo: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F438303329%2F1343904084043%2F1%2Foriginal.20230203-023453?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=69cab150771ec45eb6ed627fbf66039d',
        venue: {
          name: 'Zayed Sports Club',
          address:
            'El-Moshir Tantawy Axis Al Hay Al Asher, Cairo Governorate 4440301',
          latitude: 37.7749,
          longitude: -122.4194,
        },
      },
    ]);
  }, []);

  return (
    <div>
      <SecondNav />
      <div>
        <EventsListNavBar />
      </div>
      <DisplayEvents eventsData={events} />
    </div>
  );
};

export default CreatorEvent;
