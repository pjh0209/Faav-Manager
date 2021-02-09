import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';
import productCardForm from '../components/ProductCartForm';

function rentalApply () {
    const dummyData = {
        date: "20210209",
        orderNumber: 1234,
        rentalDate: "20210211",
        userId: 1,
        product: "dummyProduct",
    }
    return (
        <AppLayout>
            <Head>
                <title>패브 매니저</title>
            </Head>
            <body>
                <div>대여 신청 페이지</div>
                <div className="rental-apply-list">
                    <productCardForm date={dummyData}></productCardForm>
                </div>
            </body>
            
        </AppLayout>
    )
}

export default rentalApply;