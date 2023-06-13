import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import './index.css';

const BookingTable = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      seatingPreferences: '',
      additionalComments: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('First Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      date: Yup.string().required('Date is required'),
      time: Yup.string().required('Time is required'),
      guests: Yup.number().required('Number of Guests is required'),
      seatingPreferences: Yup.string().required('Seating Preferences is required'),
    }),
    onSubmit: values => {
      // eslint-disable-next-line no-restricted-globals
      event.preventDefault();
      alert('You have successfully booked your table.');
    }
  })

  const nameProps = formik.getFieldProps('name');
  const emailProps = formik.getFieldProps('email');
  const phoneNumberProps = formik.getFieldProps('phoneNumber');
  const dateProps = formik.getFieldProps('date');
  const timeProps = formik.getFieldProps('time');
  const guestsProps = formik.getFieldProps('guests');
  const occasionProps = formik.getFieldProps('occasion');
  const additionalCommentsProps = formik.getFieldProps('additionalComments');


  return (
    <form onSubmit={formik.handleSubmit} >
      <div className='option'>
        <label htmlFor='name'>Name</label>
        <input
          type="text"
          id='name'
          name='name'
          {...nameProps}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='error-message'>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='email'>Email</label>
        <input
          type="email"
          id='email'
          name='email'
          {...emailProps}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error-message'>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='phoneNumberProps'>Phone Number</label>
        <input
          type='phone'
          id='phone'
          name='phone'
          {...phoneNumberProps}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className='error-message'>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='date'>Date</label>
        <input
          type="date"
          id='date'
          name='date'
          {...dateProps}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className='error-message'>{formik.errors.date}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='time'>Time</label>
        <input
          type="time"
          id='time'
          name='time'
          {...timeProps}
        />
        {formik.touched.time && formik.errors.time ? (
          <div className='error-message'>{formik.errors.time}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='guests'>Guests</label>
        <input
          type="number"
          id='guests'
          name='guests'
          {...guestsProps}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div className='error-message'>{formik.errors.guests}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='occasion'>Occation</label>
        <select
          type="text"
          id='occasion'
          name='occasion'
          {...occasionProps}
        >
          <option value="">Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className='error-message'>{formik.errors.occasion}</div>
        ) : null}
      </div>
      <div className='option'>
        <label>Seating Preferences:</label>
        <div>
          <input
            type="radio"
            id="standard"
            name="seatingPreferences"
            value="standard"
            checked={formik.values.seatingPreferences === 'standard'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="standard">Standard</label>
        </div>
        <div>
          <input
            type="radio"
            id="outside"
            name="seatingPreferences"
            value="outside"
            checked={formik.values.seatingPreferences === 'outside'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="outside">Outside</label>
        </div>
        {formik.touched.seatingPreferences && formik.errors.seatingPreferences ? (
          <div className='error-message'>{formik.errors.seatingPreferences}</div>
        ) : null}
      </div>
      <div className='option'>
        <label htmlFor='additionalComments'>Additional Comments:</label>
        <textarea
          id='additionalComments'
          name='additionalComments'
          {...additionalCommentsProps}
        />
        {formik.touched.additionalComments && formik.errors.additionalComments ? (
          <div className='error-message'>{formik.errors.additionalComments}</div>
        ) : null}
      </div>
      <button type='submit'>Book a table</button>
    </form>
  )
}

export default BookingTable;