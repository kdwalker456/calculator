import React from 'react';
import Date from './Date.jsx';
import styled from 'styled-components';




const Period = (props) => {
    console.log(props.periodData);
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        
`;
console.log(props.periodData.startTime);
    return (<section>
        <Title>Weather For The Following Day</Title>
            <h2>{props.periodData.name}</h2>
           <Date date = {props.periodData.startTime}/>
            <h4>{props.periodData.detailedForecast}</h4>
    </section>
    )
}

export default Period;