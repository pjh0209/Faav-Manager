import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

function deliveryReady () {
        return (
            <AppLayout>
                <Head>
                    <title>패브 매니저</title>
                </Head>
                <body>
                    <div>배송 준비 페이지</div>
                </body>
                
            </AppLayout>
        )
}

export default deliveryReady;