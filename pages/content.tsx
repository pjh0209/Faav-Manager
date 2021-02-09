import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';

function content () {
        return (
            <AppLayout>
                <Head>
                    <title>패브 매니저</title>
                </Head>
                <body>
                    <div>콘텐츠 관리 페이지</div>
                </body>
                
            </AppLayout>
        )
}

export default content;