import axios from 'axios';
import React from 'react';

function EventApplyList () {
    
    return (
        <div>
            EventApplyList
        </div>
    )

}

EventApplyList.getInitialProps = async function() {
    const res = await axios.get('https://test.faav.io/event')
    const data = await res.data;

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        data: data,
    }
};

export default EventApplyList;