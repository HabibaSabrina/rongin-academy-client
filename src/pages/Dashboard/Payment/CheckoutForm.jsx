import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const CheckOutForm = ({ classData }) => {
  const { _id, price, className, classImg, instructorName, } = classData
  console.log(classData)
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('error', error)
      setCardError(error.message);
    }
    else {
      setCardError('');

    }
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    console.log('payment intent', paymentIntent)
    setProcessing(false)

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        className,
        classImg,
        instructorName,
        payStatus: "Paid"
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data.insertedId);
          if (res.data.insertedId) {
            axiosSecure.patch(`/student/${_id}`)
              .then(response => {
                navigate(from, { replace: true })
              })
              .catch(error => {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to confirm!', 'error');
              });

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Payment is successful',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
  }
  return (
    <div className='bg-[#f9f9e3] p-28'>
      <h1 className='text-center text-[#4056A1] font-semibold text-3xl mb-10'>Pay for the {className} class</h1>
      <form onSubmit={handleSubmit} className='w-1/2 mx-auto'>
        <CardElement className='border-2 p-5 rounded-xl bg-white border-[#D79922] shadow-md'
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
        <div className='text-center'>
          <button className="bg-[#F13C20] hover:bg-[#d12d14] rounded-xl p-2 px-5 font-semibold text-white text-xl my-10 mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
            PAY
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}

    </div>
  );
};

export default CheckOutForm;