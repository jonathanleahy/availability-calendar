import React from 'react';
import PropTypes from 'prop-types';
import {useAsyncEffect} from "use-async-effect";

const Diary = ({clientsDay}) => {

    const [day, setDay] = React.useState(clientsDay);

    useAsyncEffect(() => {
        setDay(clientsDay)
    }, [clientsDay]);

    if (!day[0]) return null

    return (
        <div>
            <h1>Diary</h1>
            =={JSON.stringify(day)}==
        </div>
    );
};

Diary.propTypes = {};

export default Diary;
