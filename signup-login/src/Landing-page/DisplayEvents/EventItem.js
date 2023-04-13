import React from 'react';
import styles from './Displayevents.module.css';
import './Displayevents';

export default function EventItem(props) {
  console.log('zeb');
  return (
    <div
      data-testid="event-element"
      className={styles.event_element}
      style={{}}
    >
      <svg
        data-testid="event-poster"
        className={styles.event_image}
        width="100%"
        height="70%"
      >
        <image
          href={props.event.path}
          src={props.event.imageSrc}
          width="100%"
          height="100%"
        />
      </svg>
      <div
        data-testid="event-details"
        className={styles.event_details}
        style={{ marginTop: '10px' }}
      >
        <p style={{ fontWeight: 'bold' }}>{props.event.location}</p>
        <p>{props.event.date}</p>
        <p>{props.event.title}</p>
      </div>
    </div>
  );
}