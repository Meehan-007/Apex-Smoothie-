import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react' 


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "grey",
			color: "#000000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "grey" },
			"::placeholder": { color: "grey" }
		},
		invalid: {
			iconColor: "grey",
			color: "grey"
		}
	}
}

export default function PaymentForm({total}) {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try { 
            console.log("the total of the order", total)
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:3001/payment", { 
                amount: total,
                id, 
                
            }) 
     
            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error in Axios POST:", error);
                    console.log("Response data:", error.response.data);
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form  className="col space_center w-100" onSubmit={handleSubmit} >
            <fieldset  className="FormGroup w-50">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="buttonLarge margin-top-XL">Pay</button>
        </form>
        :
       <div>
           <h2>Enjoy your smoothie</h2>
       </div> 
        }
            
        </>
    )
}
