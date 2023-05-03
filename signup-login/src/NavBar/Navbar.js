import React from 'react';
import { useState } from 'react';
import '../App.css';
import styles from './Navbar.module.css';
import NavBarListItem from './NavBarListItem';
import SearchButton from './NavBarSearch';
import Dropdown from './DropMenu';
import Tabs from './Tabs';
import server from '../server';
import { useNavigate } from 'react-router-dom';

/**
 * The `Navbar` component is a navigation bar that contains a site title,
 * search button, and multiple buttons and dropdown menus.
 *
 * @returns A `nav` HTML element that contains two `ul` elements with
 * `NavBarListItem`, `SearchButton`, `Dropdown`, and `Tabs` components.
 */
export default function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [email, setEmail] = useState('example@example.com');
  const navigate = useNavigate();
  function handleLogOut() {
    const accessToken = localStorage.getItem('accessToken');
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    server
      .get(`/auth/logout/`, requestOptions)
      .then((response) => {
        console.log(response);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');
      })
      .catch((error) => console.log(error));
  }
  return (
    <nav className={styles.navigation_bar}>
      <ul>
        <a href="#">
          <span className={styles.site_title}>TicketWave</span>
        </a>
        <SearchButton to="https://www.eventbrite.com" label="Search events" />
      </ul>
      <ul>
        <NavBarListItem className={styles.create_event} title="Create Event">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem title="Likes">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem title="Tickets">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem>
          <Dropdown className={styles.email_add} title={email}>
            <Tabs title="Browse events" path="#" />
            <Tabs title="Manage my events" path="#" />
            <Tabs title="Change password" path="#" />
            <Tabs title="Log out" onClick={handleLogOut} id="log-out-tab" />
          </Dropdown>
        </NavBarListItem>
      </ul>
    </nav>
  );
}
/**  */
