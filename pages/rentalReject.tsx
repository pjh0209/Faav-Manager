import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

function rentalReject () {
        return (
            <AppLayout>
                <Head>
                    <title>패브 매니저</title>
                </Head>
                <body>
                    <div>거절한 대여 페이지</div>
                </body>
                
            </AppLayout>
        )
}

export default rentalReject;