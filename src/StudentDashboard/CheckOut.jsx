import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authenticate/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOut = ({ selectedClass }) => {
    const { price, _id, className, classImage } = selectedClass;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const response = await fetch('https://tuneyo-server.vercel.app/create-payment-intent', {
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
                const response = await fetch(`https://tuneyo-server.vercel.app/selectedclasses/${_id}`, {
                    method: 'PATCH',
                });
                //reducing available seats by 1
                const res = await fetch(`https://tuneyo-server.vercel.app/classes/${className}`, {
                    method: 'PATCH',
                });
                const data = await res.json();

                const newPayment = {
                    email: user?.email,
                    price,
                    className,
                    classImage
                }
                //post a payment for show history
                fetch('https://tuneyo-server.vercel.app/payments', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newPayment)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            setError("")
                            Swal.fire('Payment Successful. Thank You!')
                            navigate("/studentdashboard/history")
                        }
                    })


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
                <div>
                    <div className="p-4 w-[400px]">
                        <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={classImage} />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">{className}</h2>
                                <h3 className="text-xl font-semibold mb-3 text-[#EA4C24]">Price: ${price}</h3>
                                <p className="mb-4"><span className="font-semibold">Fill out the payment details in the form below.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
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
                className="bg-[#EA4C24] my-10 text-white font-semibold py-2 px-40 rounded-sm disabled:text-zinc-500yyy"
                type="submit"
            >
                {processing ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default CheckOut;
