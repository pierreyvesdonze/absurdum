import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Clock({ timeZone }) {
    const [time, setTime] = useState(DateTime.now().setZone(timeZone));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(DateTime.now().setZone(timeZone));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone]);

    return (
        <div>
            <h1 className='big-time'>{time.toLocaleString(DateTime.TIME_WITH_SECONDS)}</h1>
        </div>
    );
}

export default Clock;