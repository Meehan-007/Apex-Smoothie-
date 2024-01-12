import { useEffect, useState } from 'react';

function Completion(props) {
  const [messageBody, setMessageBody] = useState('');
  const { stripePromise } = props;

  useEffect(() => {
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      setMessageBody(error ? `> ${error.message}` : (
        <>&gt; Payment {paymentIntent.status}: <a href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`} target="_blank" rel="noreferrer">{paymentIntent.id}</a></>
      ));
    });
  }, [stripePromise]);

  localStorage.clear()

  return (
    <>
      <div className='w-100 center'>
        <h1 className='margin-top-XXL w-100 textcenter' >Thank you! payment was successful</h1>
      </div>

    </>
  );
}
{/* <div id="messages" role="alert" style={messageBody ? {display: 'block'} : {}}>{messageBody}</div> */ }
export default Completion;