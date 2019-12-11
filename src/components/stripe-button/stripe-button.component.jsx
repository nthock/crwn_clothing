import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_H65P0M3OEZdV1wN6IB7E3EVn"

  const onToken = token => {
    console.log("token", token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label="Pay now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;