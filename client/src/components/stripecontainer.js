
import React from "react";  
import { loadStripe } from "@stripe/stripe-js"; 
import { Elements } from "@stripe/react-stripe-js"; 
import PaymentForm from "./paymentform";

const Public_Key ="pk_test_51Mz617JMbYrxGFszH51PBnJrTKtOZgdjqoeHQGPDCj9PXTQoo0qNrbagWQkvt74Pa2YanMmAs4om52L1conizo3I00T5yQCSCS" 

const stripeTestPromise = loadStripe(Public_Key) 

export default function StripeContainer({total}) { 
    console.log(total)
    return (
        <Elements stripe={stripeTestPromise}> 
            < PaymentForm total={total} />

        </Elements>
    )
}