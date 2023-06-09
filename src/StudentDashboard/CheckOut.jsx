import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authenticate/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = ({ selectedClass }) => {
    const { price, _id } = selectedClass;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const response = await fetch('http://localhost:5000/create-payment-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ price }),
                });
                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.log('Error fetching client secret:', error);
            }
        };

        fetchClientSecret();
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: user?.displayName,
                email: user?.email || 'unknown',
            },
        });

        if (error) {
            console.log('Error creating payment method:', error);
            setError(error.message);
            setProcessing(false);
            return;
        }

        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: paymentMethod.id,
                }
            );

            if (confirmError) {
                console.log('Error confirming card payment:', confirmError);
                setError(confirmError.message);
            }
            else if (paymentIntent) {
                console.log('Payment intent:', paymentIntent);
                const response = await fetch(`http://localhost:5000/selectedclasses/${_id}`, {
                    method: 'PATCH',
                });
                const data = await response.json();

                if (data.modifiedCount) {
                    console.log('Payment success!');
                    Swal.fire('Payment Successful! Thank You')
                }
            }
        } catch (error) {
            console.log('Error processing payment:', error);
            setError('Error processing payment. Please try again.');
        }

        setProcessing(false);
    };

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {error && <p className="pt-5 text-red-500">{error}</p>}
            </div>
            <button
                disabled={!stripe || processing}
                className="bg-[#570DF8] my-10 text-white font-semibold py-2 px-32 disabled:text-zinc-500yyy"
                type="submit"
            >
                {processing ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default CheckOut;
