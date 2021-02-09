import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

function rentalComplete () {
        return (
            <AppLayout>
                <Head>
                    <title>패브 매니저</title>
                </Head>
                <body>
                    <div>완료된 대여 페이지</div>
                </body>
                
            </AppLayout>
        )
}

export default rentalComplete;