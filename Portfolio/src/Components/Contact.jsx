import React from 'react';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import "../Components/css/Contact.css";

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    sendMail(data);
  };

  const sendMail = (data) => {
    (function(){
      emailjs.init("w6GpD7c85kwg7tSdH");
    })();

    let params = {
      Name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message
    }

    let serviceId = "service_nfd5w6t";
    let templateId = "template_4j0o9re";

    emailjs.send(serviceId, templateId, params)
      .then(res => {
        toast.success("Message sent successfully");
        reset(); // Reset the form fields
      })
      .catch(err => {
        toast.error("Error sending message");
      });
  };

  return (
    <div className='contact-container'>
      <h1>Contact me</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            {...register('name', {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Name must contain only letters"
              }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id='email'
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id='phone'
            {...register('phone', {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be 10 digits"
              }
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id='subject'
            {...register('subject', {
              required: "Subject is required",
              minLength: {
                value: 8,
                message: "Subject must be at least 8 characters long"
              }
            })}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long"
              }
            })}
          ></textarea>
          {errors.message && <span>{errors.message.message}</span>}
        </div>
        <button type="submit" className='form-btn'>Submit</button>
      </form>
    </div>
  );
}
