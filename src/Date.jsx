import React from 'react';
// import Period from './Period.jsx';

const ConvertedDate = (props) => {
// if(props.date){

    const newDate = new Date(props.date);
    console.log(newDate);
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedDate =  dateTimeFormat.format(newDate);
    // console.log(props.date);
    // console.log(formattedDate);

           return(

            <div id = 'date'>{formattedDate}</div>

           );
    
};

    






export default Date;





