import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

function returning () {
        return (
            <AppLayout>
                <Head>
                    <title>패브 매니저</title>
                </Head>
                <body>
                    <div>반납 중 페이지</div>
                </body>
                
            </AppLayout>
        )
}

export default returning;