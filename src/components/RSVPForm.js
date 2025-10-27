"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function RSVPForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: 1,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [formTouched, setFormTouched] = useState({});
  
  // Animation states
  const [formAnimation, setFormAnimation] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  
  useEffect(() => {
    if (isSubmitted) {
      // First hide the form
      setIsFormVisible(false);
      setTimeout(() => {
        // Then show the success message with animation
        setFormAnimation(true);
        
        // Pulse animation
        const pulseInterval = setInterval(() => {
          setFormAnimation(prev => !prev);
        }, 2000);
        
        return () => clearInterval(pulseInterval);
      }, 300);
    } else {
      setIsFormVisible(true);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear validation error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nama harus diisi';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Format email tidak valid';
    }
    
    if (!formData.attending) {
      errors.attending = 'Silakan pilih kehadiran Anda';
    }
    
    if (formData.attending === 'yes' && (!formData.guests || formData.guests < 1)) {
      errors.guests = 'Jumlah tamu minimal 1';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      
      // Show success message and reset form
      setFormData({
        name: '',
        email: '',
        attending: '',
        guests: 1,
        message: '',
      });
      setIsSubmitted(true);
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFocusedField(null);
    
    // Mark field as touched when it loses focus
    setFormTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate individual field on blur
    if (formTouched[name]) {
      validateField(name);
    }
  };
  
  const validateField = (fieldName) => {
    const errors = {...formErrors};
    
    switch(fieldName) {
      case 'name':
        if (!formData.name.trim()) {
          errors.name = 'Nama harus diisi';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        if (!formData.email.trim()) {
          errors.email = 'Email harus diisi';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Format email tidak valid';
        } else {
          delete errors.email;
        }
        break;
      case 'attending':
        if (!formData.attending) {
          errors.attending = 'Silakan pilih kehadiran Anda';
        } else {
          delete errors.attending;
        }
        break;
      case 'guests':
        if (formData.attending === 'yes' && (!formData.guests || formData.guests < 1)) {
          errors.guests = 'Jumlah tamu minimal 1';
        } else {
          delete errors.guests;
        }
        break;
    }
    
    setFormErrors(errors);
  };

  return (
    <div style={{ maxWidth: '672px', margin: '0 auto', textAlign: 'center', position: 'relative', padding: '0 15px' }}>
      <div style={{ position: 'relative', zIndex: 10, marginBottom: '20px' }}>
        <h2 style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.5rem', color: '#d4af37', marginBottom: '8px' }}>Reservasi</h2>
        <h3 style={{ fontFamily: 'Great Vibes, cursive', fontSize: '2.5rem', color: '#d4af37', marginBottom: '16px' }}>Konfirmasi Kehadiran</h3>
        <div style={{ width: "150px", height: "2px", backgroundColor: "#d4af37", margin: "0 auto 20px auto", opacity: 0.7 }}></div>
        {/* <p style={{ color: "#f5f5dc", marginBottom: "24px", maxWidth: "420px", margin: "0 auto 30px auto", fontSize: "15px", lineHeight: "1.5" }}>
          Kami akan sangat senang jika Anda bisa hadir di hari bahagia kami. Mohon konfirmasi kehadiran Anda melalui formulir di bawah ini.
        </p> */}
        
        {/* Success message */}
        {isSubmitted && (
          <div style={{ 
            margin: "0 auto 30px auto",
            padding: "30px 20px", 
            backgroundColor: "rgba(212, 175, 55, 0.1)", 
            backdropFilter: "blur(4px)",
            color: "#d4af37", 
            borderRadius: "10px", 
            border: "1px solid rgba(212, 175, 55, 0.3)",
            transform: formAnimation ? "scale(1.03)" : "scale(1)",
            transition: "all 0.5s ease",
            maxWidth: "90%"
          }}>
            <div style={{ position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                top: "-40px", 
                left: "50%", 
                transform: "translateX(-50%)", 
                width: "80px", 
                height: "80px", 
                backgroundColor: "rgba(245, 245, 220, 0.1)", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                border: "1px solid rgba(212, 175, 55, 0.3)",
                backdropFilter: "blur(4px)"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "40px", height: "40px", color: "#d4af37" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div style={{ paddingTop: "36px" }}>
                <h4 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "28px", marginBottom: "10px" }}>Terima kasih!</h4>
                <p style={{ color: "rgba(212, 175, 55, 0.9)", marginBottom: "10px" }}>Konfirmasi kehadiran Anda telah kami terima.</p>
                <p style={{ color: "rgba(212, 175, 55, 0.8)", marginTop: "15px", fontSize: "14px" }}>
                  Kami harap dapat bertemu dengan Anda<br/>di hari bahagia kami.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Main Form */}
      <form 
        ref={formRef} 
        onSubmit={handleSubmit}
        style={{ 
          padding: "30px 25px",
          background: "linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(61, 30, 8, 0.95) 100%)",
          borderRadius: "12px", 
          border: "1px solid rgba(212, 175, 55, 0.3)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
          position: "relative",
          zIndex: 10,
          transition: "all 0.5s ease",
          opacity: isFormVisible ? 1 : 0,
          transform: isFormVisible ? "translateY(0)" : "translateY(10px)",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}
      >
        {/* Form header with decorative element */}
        <div style={{ 
          position: "relative", 
          marginBottom: "30px",
          marginTop: "10px"
        }}>
          <div style={{ 
            position: "absolute", 
            left: "50%", 
            transform: "translateX(-50%)", 
            top: "-50px", 
            width: "80px", 
            height: "80px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center"
          }}>
            <div style={{ 
              width: "70px", 
              height: "70px", 
              borderRadius: "50%", 
              backgroundColor: "rgba(212, 175, 55, 0.1)", 
              backdropFilter: "blur(4px)", 
              border: "1px solid rgba(212, 175, 55, 0.3)", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              overflow: "hidden"
            }}>
              <svg style={{ width: "35px", height: "35px", color: "#d4af37" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Name input */}
        <div style={{ position: "relative", marginBottom: "5px" }}>
          <div style={{ 
            display: "flex",
            alignItems: "center", 
            backgroundColor: "rgba(245, 245, 220, 0.95)", 
            borderRadius: "10px", 
            overflow: "hidden", 
            border: formErrors.name ? "1px solid #e57373" : focusedField === 'name' ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.3)",
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              padding: "12px", 
              color: "#d4af37", 
              // backgroundColor: "rgba(61, 30, 8, 0.8)", 
              height: "100%" 
            }}>
              <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <div style={{ position: "relative", flexGrow: 1 }}>
              <input 
                id="name"
                type="text" 
                name="name"
                value={formData.name}
                placeholder=" " 
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={handleBlur}
                required
                style={{ 
                  width: "100%", 
                  padding: "15px", 
                  backgroundColor: "transparent", 
                  color: "#513007", 
                  border: "none", 
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
              />
              <label 
                htmlFor="name" 
                style={{ 
                  position: "absolute", 
                  left: "15px", 
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                  color: formData.name || focusedField === 'name' ? "rgba(212, 175, 55, 0.8)" : "rgba(81, 48, 7, 0.7)",
                  fontSize: formData.name || focusedField === 'name' ? "11px" : "14px",
                  top: formData.name || focusedField === 'name' ? "3px" : "50%",
                  transform: formData.name || focusedField === 'name' ? "translateY(0)" : "translateY(-50%)"
                }}
              >
                Nama Anda
              </label>
            </div>
          </div>
          {formErrors.name && (
            <p style={{ 
              color: "#e57373", 
              fontSize: "12px", 
              marginTop: "5px", 
              marginLeft: "5px", 
              display: "flex", 
              alignItems: "center"
            }}>
              <svg style={{ width: "12px", height: "12px", marginRight: "4px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formErrors.name}
            </p>
          )}
        </div>
        
        {/* Email input */}
        <div style={{ position: "relative", marginBottom: "15px" }}>
          <div style={{ 
            display: "flex",
            alignItems: "center", 
            backgroundColor: "rgba(245, 245, 220, 0.95)", 
            borderRadius: "10px", 
            overflow: "hidden", 
            border: formErrors.email ? "1px solid #e57373" : focusedField === 'email' ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.3)",
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              padding: "12px", 
              color: "#d4af37", 
              // backgroundColor: "rgba(61, 30, 8, 0.8)", 
              height: "100%" 
            }}>
              <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div style={{ position: "relative", flexGrow: 1 }}>
              <input 
                id="email"
                type="email" 
                name="email"
                value={formData.email}
                placeholder=" " 
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={handleBlur}
                required
                style={{ 
                  width: "100%", 
                  padding: "15px", 
                  backgroundColor: "transparent", 
                  color: "#513007", 
                  border: "none", 
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
              />
              <label 
                htmlFor="email" 
                style={{ 
                  position: "absolute", 
                  left: "15px", 
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                  color: formData.email || focusedField === 'email' ? "rgba(212, 175, 55, 0.8)" : "rgba(81, 48, 7, 0.7)",
                  fontSize: formData.email || focusedField === 'email' ? "11px" : "14px",
                  top: formData.email || focusedField === 'email' ? "3px" : "50%",
                  transform: formData.email || focusedField === 'email' ? "translateY(0)" : "translateY(-50%)"
                }}
              >
                Email Anda
              </label>
            </div>
          </div>
          {formErrors.email && (
            <p style={{ 
              color: "#e57373", 
              fontSize: "12px", 
              marginTop: "5px", 
              marginLeft: "5px", 
              display: "flex", 
              alignItems: "center"
            }}>
              <svg style={{ width: "12px", height: "12px", marginRight: "4px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formErrors.email}
            </p>
          )}
        </div>
        
        {/* Attendance dropdown */}
        <div style={{ position: "relative", marginBottom: "15px" }}>
          <div style={{ 
            display: "flex",
            alignItems: "center", 
            backgroundColor: "rgba(245, 245, 220, 0.95)", 
            borderRadius: "10px", 
            overflow: "hidden", 
            border: formErrors.attending ? "1px solid #e57373" : focusedField === 'attending' ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.3)",
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              padding: "12px", 
              color: "#d4af37", 
              // backgroundColor: "rgba(61, 30, 8, 0.8)", 
              height: "100%" 
            }}>
              <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div style={{ position: "relative", flexGrow: 1 }}>
              <select 
                id="attending"
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                onFocus={() => setFocusedField('attending')}
                onBlur={handleBlur}
                required
                style={{ 
                  width: "100%", 
                  padding: "15px", 
                  backgroundColor: "transparent", 
                  color: formData.attending ? "#513007" : "rgba(81, 48, 7, 0.7)",
                  border: "none", 
                  outline: "none",
                  appearance: "none",
                  transition: "all 0.3s ease"
                }}
              >
                <option value="" disabled hidden></option>
                <option value="yes">Ya, saya akan hadir</option>
                <option value="no">Maaf, saya tidak bisa hadir</option>
              </select>
              <label 
                htmlFor="attending" 
                style={{ 
                  position: "absolute", 
                  left: "15px", 
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                  color: formData.attending || focusedField === 'attending' ? "rgba(212, 175, 55, 0.8)" : "rgba(81, 48, 7, 0.7)",
                  fontSize: formData.attending || focusedField === 'attending' ? "11px" : "14px",
                  top: formData.attending || focusedField === 'attending' ? "3px" : "50%",
                  transform: formData.attending || focusedField === 'attending' ? "translateY(0)" : "translateY(-50%)"
                }}
              >
                Kehadiran Anda
              </label>
              <div style={{ 
                pointerEvents: "none", 
                position: "absolute", 
                top: "0", 
                bottom: "0",
                right: "0", 
                display: "flex", 
                alignItems: "center", 
                padding: "0 15px", 
                color: "#d4af37" 
              }}>
                <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {formErrors.attending && (
            <p style={{ 
              color: "#e57373", 
              fontSize: "12px", 
              marginTop: "5px", 
              marginLeft: "5px", 
              display: "flex", 
              alignItems: "center"
            }}>
              <svg style={{ width: "12px", height: "12px", marginRight: "4px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formErrors.attending}
            </p>
          )}
        </div>
        
        {/* Guests count input */}
        <div style={{ 
          position: "relative", 
          marginBottom: "15px", 
          opacity: formData.attending === 'yes' ? 1 : 0.6,
          transition: "all 0.5s ease"
        }}>
          <div style={{ 
            display: "flex",
            alignItems: "center", 
            backgroundColor: "rgba(245, 245, 220, 0.95)", 
            borderRadius: "10px", 
            overflow: "hidden", 
            border: formErrors.guests ? "1px solid #e57373" : focusedField === 'guests' ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.3)",
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              padding: "12px", 
              color: "#d4af37", 
              // backgroundColor: "rgba(61, 30, 8, 0.8)", 
              height: "100%" 
            }}>
              <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <div style={{ position: "relative", flexGrow: 1 }}>
              <input 
                id="guests"
                type="number" 
                name="guests"
                value={formData.guests}
                placeholder=" " 
                min="1"
                max="10"
                onChange={handleChange}
                disabled={formData.attending !== 'yes'}
                onFocus={() => setFocusedField('guests')}
                onBlur={handleBlur}
                style={{ 
                  width: "100%", 
                  padding: "15px", 
                  backgroundColor: "transparent", 
                  color: "#513007", 
                  border: "none", 
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
              />
              <label 
                htmlFor="guests" 
                style={{ 
                  position: "absolute", 
                  left: "15px", 
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                  color: focusedField === 'guests' || formData.guests !== 1 || formData.attending !== 'yes' 
                    ? "rgba(212, 175, 55, 0.8)" : "rgba(81, 48, 7, 0.7)",
                  fontSize: focusedField === 'guests' || formData.guests !== 1 || formData.attending !== 'yes' 
                    ? "11px" : "14px",
                  top: focusedField === 'guests' || formData.guests !== 1 || formData.attending !== 'yes' 
                    ? "3px" : "50%",
                  transform: focusedField === 'guests' || formData.guests !== 1 || formData.attending !== 'yes' 
                    ? "translateY(0)" : "translateY(-50%)"
                }}
              >
                Jumlah Tamu
              </label>
            </div>
            <div style={{ 
              display: "flex", 
              borderLeft: "1px solid rgba(212, 175, 55, 0.2)"
            }}>
              <button 
                type="button" 
                onClick={() => formData.attending === 'yes' && formData.guests > 1 && setFormData({...formData, guests: formData.guests - 1})}
                disabled={formData.attending !== 'yes' || formData.guests <= 1}
                style={{ 
                  padding: "0 12px", 
                  color: "#d4af37", 
                  backgroundColor: formData.attending === 'yes' && formData.guests > 1 ? "transparent" : "rgba(245, 245, 220, 0.3)",
                  transition: "background-color 0.2s ease",
                  cursor: formData.attending === 'yes' && formData.guests > 1 ? "pointer" : "not-allowed"
                }}
              >
                <svg style={{ width: "16px", height: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                type="button" 
                onClick={() => formData.attending === 'yes' && formData.guests < 10 && setFormData({...formData, guests: formData.guests + 1})}
                disabled={formData.attending !== 'yes' || formData.guests >= 10}
                style={{ 
                  padding: "0 12px", 
                  color: "#d4af37", 
                  backgroundColor: formData.attending === 'yes' && formData.guests < 10 ? "transparent" : "rgba(245, 245, 220, 0.3)",
                  transition: "background-color 0.2s ease",
                  cursor: formData.attending === 'yes' && formData.guests < 10 ? "pointer" : "not-allowed"
                }}
              >
                <svg style={{ width: "16px", height: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          {formErrors.guests && (
            <p style={{ 
              color: "#e57373", 
              fontSize: "12px", 
              marginTop: "5px", 
              marginLeft: "5px", 
              display: "flex", 
              alignItems: "center"
            }}>
              <svg style={{ width: "12px", height: "12px", marginRight: "4px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formErrors.guests}
            </p>
          )}
        </div>
        
        {/* Message textarea */}
        <div style={{ position: "relative", marginBottom: "15px", marginTop: "5px" }}>
          <div style={{ 
            display: "flex",
            backgroundColor: "rgba(245, 245, 220, 0.95)", 
            borderRadius: "10px", 
            overflow: "hidden", 
            border: focusedField === 'message' ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.3)",
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              display: "flex", 
              alignItems: "start", 
              justifyContent: "center", 
              padding: "15px 12px", 
              color: "#d4af37", 
              // backgroundColor: "rgba(61, 30, 8, 0.8)", 
              height: "100%" 
            }}>
              <svg style={{ width: "20px", height: "20px", marginTop: "3px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </span>
            <div style={{ position: "relative", flexGrow: 1 }}>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                placeholder=" " 
                rows="4"
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={handleBlur}
                style={{ 
                  width: "100%", 
                  padding: "15px", 
                  backgroundColor: "transparent", 
                  color: "#513007", 
                  border: "none", 
                  outline: "none",
                  resize: "none",
                  transition: "all 0.3s ease"
                }}
              ></textarea>
              <label 
                htmlFor="message" 
                style={{ 
                  position: "absolute", 
                  left: "15px", 
                  pointerEvents: "none",
                  transition: "all 0.3s ease",
                  color: formData.message || focusedField === 'message' ? "rgba(212, 175, 55, 0.8)" : "rgba(81, 48, 7, 0.7)",
                  fontSize: formData.message || focusedField === 'message' ? "11px" : "14px",
                  top: formData.message || focusedField === 'message' ? "3px" : "15px"
                }}
              >
                Ucapan dan Doa (Opsional)
              </label>
            </div>
          </div>
        </div>
        
        {/* Submit button */}
        <div style={{ paddingTop: "15px" }}>
          <div style={{ position: "relative" }}>
            <div style={{ 
              position: "absolute",
              inset: "-3px",
              background: "linear-gradient(to right, rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0.3))",
              borderRadius: "10px",
              filter: "blur(5px)",
              opacity: 0.5,
              transition: "opacity 0.3s ease",
              zIndex: -1
            }}></div>
            <button 
              type="submit" 
              disabled={isLoading}
              style={{ 
                width: "100%", 
                padding: "16px", 
                background: "linear-gradient(to right, #d4af37, rgba(212, 175, 55, 0.9))", 
                color: "#513007", 
                fontWeight: 500, 
                borderRadius: "10px", 
                border: "1px solid rgba(212, 175, 55, 0.4)", 
                transition: "all 0.3s ease", 
                position: "relative", 
                overflow: "hidden",
                transform: isLoading ? "none" : "translateY(0)",
                opacity: isLoading ? 0.9 : 1,
                cursor: isLoading ? "wait" : "pointer",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(180, 125, 45, 0.3)";
                e.currentTarget.previousSibling.style.opacity = "1";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                e.currentTarget.previousSibling.style.opacity = "0.5";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(180, 125, 45, 0.3)";
              }}
            >
              <span style={{ 
                position: "relative", 
                zIndex: 10, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "8px"
              }}>
                {isLoading ? (
                  <>
                    <svg style={{ 
                      animation: "spin 1s linear infinite",
                      height: "20px", 
                      width: "20px", 
                      color: "#513007", 
                      opacity: 0.9 
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Konfirmasi</span>
                    <svg style={{ width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </span>
              <span style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                background: "linear-gradient(to right, rgba(212, 175, 55, 0.1), rgba(245, 245, 220, 0.2))", 
                opacity: 0, 
                transition: "opacity 0.3s ease" 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = "0.2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = "0";
              }}></span>
            </button>
          </div>
        </div>
        
        {/* Privacy notice */}
        <div style={{ 
          fontSize: "12px", 
          color: "rgba(245, 245, 220, 0.6)", 
          marginTop: "25px", 
          textAlign: "center" 
        }}>
          <p>Data Anda hanya digunakan untuk keperluan konfirmasi kehadiran.</p>
          <div style={{ 
            width: "100%", 
            height: "20px", 
            backgroundImage: "url('/images/divider-leaves.png')", 
            backgroundSize: "contain", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat", 
            opacity: 0.4, 
            marginTop: "15px" 
          }}></div>
        </div>
      </form>
    </div>
  );
}