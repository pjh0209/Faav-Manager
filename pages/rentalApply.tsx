import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';
import productCardForm from '../components/ProductCardForm';

function rentalApply () {
    return (
        <AppLayout>
            <Head>
                <title>패브 매니저</title>
            </Head>
            <div>대여 신청 페이지</div>
            <div className="rental-list-wrapper">
                <div className="product-card-attr" style={ {display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flex: 1, alignItems: 'center',}}>
                    <div style={{ justifyContent: 'center', width: '20%' }}><div>신청일</div></div>
                    <div style={{ justifyContent: 'center', width: '25%' }}>주문 번호</div>
                    <div style={{ justifyContent: 'center', width: '15%' }}>대여 희망일</div>
                    <div style={{ justifyContent: 'center', width: '15%' }}>아이디</div>
                    <div style={{ justifyContent: 'center', width: '25%' }}>대여 상품</div>
                </div>
            </div>
            {/* <productCardForm /> */}
        </AppLayout>
    )
}

export default rentalApply;