import React, { useState } from 'react';
import { FaBackward, FaBackspace, faBack } from 'react-icons/fa';
import SecondCustomNavLink from '../UI/SecondCustomNavLink';
import { useNavigate } from 'react-router-dom';
import CustomNavLink from '../UI/CustomNavLink';
import CustomLink from '../UI/CustomLink';

/** An array of objects representing the icons in the second sidebar.
@typedef {Object[]} IconObject
@property {string} IconObject.name - The name of the icon.
@property {string} IconObject.title - The title of the icon.
*/
const icons = [
  {
    name: '/basic-info',
    title: 'Basic',
  },
  {
    name: '/details',
    title: 'Details',
  },
  {
    name: '/Tickets/admission',
    title: 'Tickets',
  },
  {
    name: '/publish',
    title: 'Publish',
  },
];

/** Represents the second sidebar component.
@param {Object} props - The props object.
@param {boolean} props.showSecond - A boolean value indicating whether to show the second sidebar or not.
@returns {JSX.Element} - The JSX element representing the second sidebar component.
*/
const SecondSidebar = ({ showSecond }) => {
  /** Represents the state of the active icon.
@typedef {Object} ActiveIconState
@property {string|null} ActiveIconState.activeIcon - The name of the active icon.
@property {Function} ActiveIconState.setActiveIcon - The function to set the state of the active icon.
*/
  const [activeIcon, setActiveIcon] = useState(null);
  /** Represents the state of the options.
@typedef {Object} OptionsState
@property {boolean} OptionsState.options - The value indicating whether to show options or not.
@property {Function} OptionsState.setOptions - The function to set the state of the options.
*/
  const [options, setOptions] = useState(false);
  /** Represents the state of the payment.
@typedef {Object} PaymentState
@property {boolean} PaymentState.payment - The value indicating whether to show payment or not.
@property {Function} PaymentState.setPayment - The function to set the state of the payment.
*/
  const [payment, setPayment] = useState(false);
  /** Represents the state of the marketing.
@typedef {Object} MarketingState
@property {boolean} MarketingState.marketing - The value indicating whether to show marketing or not.
@property {Function} MarketingState.setMarketing - The function to set the state of the marketing.
*/
  const [marketing, setMarketing] = useState(false);
  /** Represents the state of the manage.
@typedef {Object} ManageState
@property {boolean} ManageState.manage - The value indicating whether to show manage or not.
@property {Function} ManageState.setManage - The function to set the state of the manage.
*/
  const [manage, setManage] = useState(false);

  /** Represents the navigate object from react-router-dom.
@type {Object}
@property {Function} history - The function to navigate to a new location.
*/
  const history = useNavigate();
  //   const [activedIcon, setActivedIcon] = useState(null);

  /** Sets the state of the active icon when an icon is clicked.
@param {string} name - The name of the icon that was clicked.
@returns {void}
*/
  const handleIconClick = (name) => {
    setActiveIcon(name);
  };

  /** Sets the state of the active icon to null when the mouse leaves the icon.
@returns {void}
*/
  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  /** Navigates to the home page.
@returns {void}
*/
  function CloseHandler() {
    history('/Events');
  }

  //   const handleClick = (name) => {
  //     setActivedIcon(name);
  //     console.log(name)
  //   };

  return (
    <div className="no-underline">
      {showSecond && (
        <div
          className="sidebar"
          style={{
            zIndex: 99999,
            marginLeft: '5rem',
            minWidth: '12rem',
            maxWidth: '20rem',
            padding: '10px',
            position: 'fixed',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundColor: 'none',
              margin: '1rem',
              outline: 'none',
              border: 'none',
              color: 'blue',
              fontSize: 'medium',
              fontWeight: 'bold',
              paddingBottom: '1rem',
              borderBottom: '1px solid #ccc',
              paddingLeft: '1rem',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}
            onClick={CloseHandler}
          >
            <div style={{ fontSize: 'large', marginRight: '1rem' }}>
              <FaBackward />
            </div>
            <div>Back</div>
          </div>
          <div style={{ borderBottom: '1px solid #ccc', width: '100%' }}>
            {icons.map((item) => (
              <div
                style={{ margin: '3px', position: 'relative', height: '3rem' }}
                key={item.name}
                className="sidebar-item"
                onMouseEnter={() => handleIconClick(item.name)}
                onMouseLeave={handleIconLeave}
                //   onClick={() => handleClick(item.name)}
                //   onClick={handleIconClick(item.name)}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#333',
                    backgroundColor: activeIcon === item.name ? 'white' : '',
                    width: '80%',
                    height: '80%',
                    alignItems: 'center',
                    display: 'flex',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}
                >
                  <CustomLink exact={false} to={`${item.name}`}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        padding: '10px',
                      }}
                    >
                      <div style={{ fontSize: 'medium', paddingRight: '10px' }}>
                        ●{' '}
                      </div>
                      <p style={{ fontSize: 'medium' }}>{item.title}</p>
                    </div>
                  </CustomLink>
                </div>

                {/* {activeIcon === item.name && (
            <div style={{transform: 'translateX(200%)', fontSize: 'small', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>{item.name}</div>
          )} */}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: '1.5rem',
              color: 'rgb(116, 116, 116)',
              width: '100%',
              display: 'flex',
              borderRadius: '6px',
              marginTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <button
                id="second-sidebar-dashboard"
                style={{
                  height: '2rem',
                  fontSize: 'medium',
                  border: 'none',
                  cursor: 'pointer',
                  height: '2rem',
                  background: 'none',
                  color: 'rgb(116, 116, 116)',
                  textAlign: 'left',
                }}
                onClick={() => {
                  setOptions(!options);
                  history('/dashboard');
                }}
              >
                Dashboard
              </button>
              <button
                id="second-sidebar-options"
                style={{
                  marginTop: '1rem',
                  height: '2rem',
                  fontSize: 'medium',
                  border: 'none',
                  cursor: 'pointer',
                  height: '2rem',
                  background: 'none',
                  color: 'rgb(116, 116, 116)',
                  textAlign: 'left',
                }}
                onClick={() => {
                  setOptions(!options);
                  history('/Order-Options');
                }}
              >
                Order Options
              </button>

              <button
                id="second-sidebar-payment"
                style={{
                  marginTop: '1rem',
                  fontSize: 'medium',
                  border: 'none',
                  cursor: 'pointer',
                  height: '2rem',
                  background: 'none',
                  color: 'rgb(116, 116, 116)',
                  textAlign: 'left',
                }}
                onClick={() => {
                  setPayment(!payment);
                  history('/Payments-and-Tax');
                }}
              >
                Payments & Tax
              </button>

              <button
                id="second-sidebar-marketing"
                style={{
                  marginTop: '1rem',
                  fontSize: 'medium',
                  border: 'none',
                  cursor: 'pointer',
                  height: '2rem',
                  background: 'none',
                  color: 'rgb(116, 116, 116)',
                  textAlign: 'left',
                }}
                onClick={() => {
                  setMarketing(!marketing);
                  history('/Marketing');
                }}
              >
                Marketing
              </button>
              <button
                id="second-sidebar-manage-attendees"
                style={{
                  marginTop: '1rem',
                  fontSize: 'medium',
                  border: 'none',
                  cursor: 'pointer',
                  height: '2rem',
                  background: 'none',
                  color: 'rgb(116, 116, 116)',
                  textAlign: 'left',
                }}
                onClick={() => {
                  setManage(!manage);
                }}
              >
                Manage Attendees
              </button>
              {manage && (
                <React.Fragment id="second-sidebar-extension">
                  <div
                    style={{
                      fontSize: 'medium',
                      paddingLeft: '1rem',
                      lineHeight: '2rem',
                    }}
                  >
                    <CustomLink to={`/Orders`}>Orders</CustomLink>
                    <br />
                    <CustomLink to={`/Attendee-Credits`}>
                      Attendee Credits
                    </CustomLink>
                    <br />
                    <CustomLink to={`/Add-Attendees`}>Add Attendees</CustomLink>
                    <br />
                    <CustomLink to={`/Attendee-List`}>Attendee List</CustomLink>
                    <br />
                    <CustomLink to={`/Check-in`}>Check-in</CustomLink>
                    <br />
                    <CustomLink to={`/Sold-Tickets`}>Sold Tickets</CustomLink>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondSidebar;
