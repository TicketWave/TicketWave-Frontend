import React from 'react';
import './Bar.css';

/** A functional component for rendering a bar.
@returns {JSX.Element} - The JSX element of the component.
*/
function Bar(){
  
  return (
    <div  style={{height: '2rem'}}>
        <p className='BarPara'  style={{fontSize: '1.5rem'}}>This service is only available here</p>
    </div>
  );
};

export default Bar;
