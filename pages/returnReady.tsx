import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

function returnReady () {
        return (
            <AppLayout>
                <Head>
                    <title>패브 매니저</title>
                </Head>
                <body>
                    <div>반납 준비 페이지</div>
                </body>
                
            </AppLayout>
        )
}

export default returnReady;