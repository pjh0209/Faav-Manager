import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';
import EventApplyList from '../components/EventApplyList';

function eventControl () {

    return (
        <AppLayout>
            <Head>
                <title>패브 매니저</title>
            </Head>
            <div>
                <a>이벤트 신청 내역</a>
                <div>
                    <EventApplyList />
                </div>
            </div>
            
        </AppLayout>
    )
}

export default eventControl;