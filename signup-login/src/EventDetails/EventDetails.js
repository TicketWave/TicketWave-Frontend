import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import './EventDetails.css';
import CalendarIcon from './Calendar.png'
import ClockIcon from './Clock.png'
import Locationicon from './Location.png'
import TicketIcon from './Ticket.png'
import FacebookIcon from './Facebook.png'
import LinkedInIcon from './LinkedIn.png'
import MailIcon from './Mail.png'
import TwitterIcon from './Twitter.png'
import MessengerIcon from './Messenger.jfif'
import axios from'axios';
import MockAdapter from 'axios-mock-adapter';



function EventDetails(){

    const mock = new MockAdapter(axios);
    
    
    
    let ticketCounter = {
        value: 0,
        
        increment () {
        ticketCounter.value = this.value + 1;
    },
        decrement () {
        ticketCounter.value = this.value - 1;
    }

    };

    
    const fetchEvent = () =>{

    }



    // Event 1
    const event1 = {
    id: 1,
    name: "Middle East Vape Show 2023",
    summary: "The most anticipated Vape Show in the Middle East, it's time to bring your Vape Business and Products to the next level.",
    description: "Will be held 3 days from 6 to 8 July 2023, after the success of the 1st event in Bahrain this year with a new atmosphere it will be held in Cairo, Egypt. We choose Egypt International Exhibition Center as the best venue in Cairo for MEVS 2023.",
    start_time: "July 6 · 10am",
    end_time: " July 8 · 10pm EET",
    url: "https://www.eventbrite.com/e/middle-east-vape-show-2023-tickets-512820940237?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb",
    created: "2023-03-22T10:00:00",
    changed: "2023-03-22T12:00:00",
    videoURL: "R63RiKdiB2o",
    published: true,
    online_event: false,
    logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F438303329%2F1343904084043%2F1%2Foriginal.20230203-023453?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=69cab150771ec45eb6ed627fbf66039d",
    venue: {
      name: "Egypt International Exhibition Center - EIEC",
      address: "El-Moshir Tantawy Axis Al Hay Al Asher, Cairo Governorate 4440301",
      latitude: 37.7749,
      longitude: -122.4194
    }
  };
  
  // Event 2
  const event2 = {
    id: 2,
    name: "Cloudflight Coding Contest (CCC) - Cairo",
    summary: "Solve a level-based coding game in competition with thousands of participants across the globe!",
    description: "The CCC (short for Cloudflight Coding Contest) is one of the biggest coding competitions of its kind. Over 4,000 coders from all around the world simultaneously compete against each other in a level-based coding game. With each level the difficulty increases and the candidate or team reaching the highest level within the shortest time wins. How do you get in? Step 1. Find your location on the registration page. Step 2. Choose your track: #Classic, #AI Step 3. Decide if you participate alone or as a team Get more insights and register on our Website!",
    start_time: " Friday, March 31 · 3pm",
    end_time: "Friday, March 31 · 7pm",
    url: "https://www.eventbrite.at/e/cloudflight-coding-contest-ccc-cairo-tickets-535486292917?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb",
    created: "2023-03-23T14:00:00",
    changed: "2023-03-23T16:00:00",
    videoURL: "null",
    published: true,
    online_event: false,
    logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F440846959%2F185909912123%2F1%2Foriginal.20230207-111035?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C94%2C4000%2C2000&s=7054fe4d34bfd88649e45f53da0b5281",
    venue: {
      name: "German University in Cairo",
      address: "جمال عبد الناصر Cairo, محافظة القاهرة‬ 4721301",
      latitude: 37.7946,
      longitude: -122.3990
    }
  };
  
  // Event 3
  const event3 = {
    id: 3,
    name: "Parenting CIRCLE (Fireside Chat)",
    summary: "Meet our Seminar Speakers!",
    description: "This event is suitable for parents living in Egypt. We would to invite you to join us and meet the experts in the field. Our Fireside Chat Host will be presenting questions relating to Parenting to our panel of speakers. Your queries, in relation to parenting, are welcome during the discussion section. Do join us to be enlighten.",
    start_time: "Friday, May 12 · 11am",
    end_time: "1pm EET",
    url: "https://www.eventbrite.sg/e/parenting-circle-fireside-chat-tickets-595476575467?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb",
    created: "2023-03-24T09:00:00",
    changed: "2023-03-24T11:00:00",
    videoURL: "null",
    published: true,
    online_event: false,
    logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F474043129%2F1417760847563%2F1%2Foriginal.20230321-130310?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C9%2C1042%2C521&s=0c76ab7ac9e13281da850fc4efa19db0",
    venue: {
      name: "Uptown Cairo",
      address: "Uptown Cairo Al Abageyah, Cairo Governorate 11571",
      latitude: 37.7833,
      longitude: -122.4167
    }
  };



    return(
        <div  id="main-body">
            <div id="left-part">
                <time id='start-date'>{event1.start_time}</time>
                <h1 id='event-title' className="titles">{event1.name}</h1>
                <p id='event-summary'>{event1.summary}</p>
                <section>
                    <div>
                        <div id='when-and-where'>
                            <h2 className="titles">When and where</h2>
                        </div>
                    </div>
                    <div id="date-location">
                        <section id="date-time-section">
                            <div id="date-time-container">
                                <div id="date-time">
                                    <div id="date-time-icon">
                                        <img id="date-icon" className="icons" src={CalendarIcon} alt='logo'></img>
                                    </div>
                                    <div id="date-time-content">
                                        <div>
                                            <h3 className="titles">Date and time</h3>
                                        </div>
                                        <p className="date-time-location-subtext">
                                            {event1.start_time + ' - ' + event1.end_time}
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </section>
                        <section>
                            <div>
                                <div id="location-container">
                                    <div id="location-icon">
                                        <img className="icons" src={Locationicon} alt='logo'></img>
                                    </div>
                                    <div id="location-content">
                                        <div>
                                            <h3 className="titles">Location</h3>
                                        </div>
                                        <p className="date-time-location-subtext">
                                        {event1.venue.name + ' - ' + event1.venue.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <div id="about-this-event">
                    <div>
                        <div>
                            <h2 id="about-event-title" className="titles">About this event</h2>
                        </div>
                        <ul id='time-and-ticket'>
                            <li>
                                <span id="clock-icon-span">
                                    <img className="icons" src={ClockIcon} alt='icon'></img>
                                </span>
                                <span className="time-ticket-span">
                                    2 days 12 hours
                                </span>
                            </li>
                            <li>
                                <span id="ticket-icon-span">
                                    <img className="icons" src={TicketIcon} id='ticket-icon' alt='icon'></img>
                                </span>
                                <span className="time-ticket-span">
                                    Mobile eTicket
                                </span>
                            </li>
                        </ul>
                        <div>
                            <div>
                                <div>
                                    <p id="time-text">
                                       {event1.description}
                                    </p>
                                </div>
                            </div>
            
                            <div>
                                <div id="youtube-video">
                                    <YoutubeEmbed embedId={event1.videoURL} />
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <section>
                        <div>
                            <div>
                                <h3 id="share-title" className="titles">
                                    Share with friends
                                </h3>
                            </div>
                            <div>
                                <div>
                                    <span><a href="https://www.facebook.com" target={"_blank"}><img className="share-icons" src={FacebookIcon} alt='logo'></img></a></span>
                                    <span><a href="https://www.facebook.com" target={"_blank"}><img className="share-icons" src={MessengerIcon} alt='logo'></img></a></span>
                                    <span><a href="https://www.linkedin.com" target={"_blank"}><img className="share-icons" src={LinkedInIcon} alt='logo'></img></a></span>
                                    <span><a href="https://www.twitter.com" target={"_blank"}><img className="share-icons" src={TwitterIcon} alt='logo'></img></a></span>
                                    <span><a href="mailto:" target={"_blank"}><img className="share-icons" src={MailIcon} alt='logo'></img></a></span>
                                </div>  
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* aside for booking pop-up*/}
            <div id='aside-booking-container'>
                <div id="aside-card">
                    <div id="registration-in-card">
                       <span>
                            <strong>Registration</strong>
                       </span>
                       <span id="ticket-counter">
                            <button className="registration-buttons" onClick={() => ticketCounter.decrement()}>-</button>
                            {ticketCounter.value}
                            <button className="registration-buttons" onClick={() => ticketCounter.increment()}>+</button>
                       </span>
                    </div>

                    <div>
                        <strong>Free</strong>
                    </div>
                </div>

                <div>
                    {/* booking pop-up to be added with phase 3*/}
                    <button id="booking-button">Reserve a spot</button>
                </div>
            </div>

        </div>
    );
}

export default EventDetails;