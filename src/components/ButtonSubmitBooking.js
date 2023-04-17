import React from 'react';
import { useDispatch } from 'react-redux';
import { checkoutBooking } from 'store/actions/checkout';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const ButtonSubmitBooking = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function fnStartBooking({ data, itemDetails }) {
        dispatch(
            checkoutBooking({
                _id: itemDetails._id,
                duration: data.duration,
                date: {
                    startDate: data.date.startDate,
                    endDate: data.date.endDate,
                },
            })
        )
        navigate("/checkout");
    };


    return (
        <Button
            className="btn"
            hasShadow
            isPrimary
            isBlock
            onClick={fnStartBooking}
        >
            Continue to Book
        </Button>
    );
}

export default ButtonSubmitBooking;
