import React from 'react';

function productCardForm (data: any) {
        return (
            <>
                <div>{data.date}</div>
                <div>{data.orderNumber}</div>
                <div>{data.rentalDate}</div>
                <div>{data.userId}</div>
                <div>{data.product}</div>
            </>
        )
}

export default productCardForm;