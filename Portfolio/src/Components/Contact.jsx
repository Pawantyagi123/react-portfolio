import React from 'react';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import "../Components/css/Contact.css";
import { IoPerson } from "react-icons/io5";
import { MdEmail, MdMessage, MdPhone, MdSubject } from "react-icons/md";
import contact from "../Image/contact.png"
import { Fade } from 'react-awesome-reveal';

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
      <Fade direction='down' cascade duration={2000}>
      <img src={contact} alt="" />
      </Fade>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input'>
          <label htmlFor="name"><IoPerson/></label>
          <input
            type="text"
            id='name'
            {...register('name', {
              required: "Please enter your name...",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Name must contain only letters"
              }
            })}
            placeholder='name'
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="email"><MdEmail/></label>
          <input
            type="email"
            id='email'
            {...register('email', {
              required: "Please enter your email...",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
              }
            })}
            placeholder='email'
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="phone"><MdPhone/></label>
          <input
            type="text"
            id='phone'
            {...register('phone', {
              required: "Phone number is required...",
              minLength: {
                value: 10,
                message: "Phone number must be 10 digits"
              }
            })}
            placeholder='phone number'
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="subject"><MdSubject/></label>
          <input
            type="text"
            id='subject'
            {...register('subject', {
              required: "Please provide subject...",
              minLength: {
                value: 8,
                message: "Subject must be at least 8 characters long"
              }
            })}
            placeholder='subject'
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </div>
        <div className='input'>
          <label htmlFor="message"><MdMessage/></label>
          <textarea
            id="message"
            {...register('message', {
              required: "Please enter message...",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long"
              }
            })}
            placeholder='message'
          ></textarea>
          {errors.message && <span>{errors.message.message}</span>}
        </div>
        <button type="submit" className='form-btn'>Submit</button>
      </form>
    </div>
  );
}
