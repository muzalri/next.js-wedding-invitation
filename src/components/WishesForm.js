"use client";

import { useEffect, useState } from "react";
import FloralDecoration from "./FloralDecoration";

export default function WishesForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attendance: "hadir",
    guestCount: 1,
  });
  const [wishes, setWishes] = useState([
    {
      name: "John & Sarah",
      message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair.",
      date: "2 hari yang lalu",
      attendance: "hadir"
    },
    {
      name: "Keluarga Besar Ahmad",
      message: "Bahagia sekali bisa hadir di hari bahagia kalian. Semoga pernikahan kalian dipenuhi cinta dan keberkahan. Aamiin!",
      date: "3 hari yang lalu",
      attendance: "hadir"
    },
    {
      name: "Rina & Family",
      message: "Mohon maaf tidak bisa hadir, tapi doa terbaik selalu kami panjatkan untuk kebahagiaan kalian berdua.",
      date: "5 hari yang lalu",
      attendance: "tidak-hadir"
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("wishes");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newWish = {
        name: formData.name,
        message: formData.message,
        date: "Baru saja",
        attendance: formData.attendance,
      };
      
      setWishes([newWish, ...wishes]);
      setFormData({
        name: "",
        message: "",
        attendance: "hadir",
        guestCount: 1,
      });
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="wishes" style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 16px',
      background: 'linear-gradient(to bottom, rgba(248, 243, 232, 0.5), #f8f3e8)',
      overflow: 'hidden'
    }}>
      {/* Background Decorations */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.05
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '40px',
          width: '256px',
          height: '256px',
          background: '#d4af37',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '40px',
          width: '256px',
          height: '256px',
          background: '#6d4c3d',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animationName: 'float',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: '1.5s'
        }}></div>
      </div>

      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />

      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
          transition: 'all 1s ease'
        }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <h2 style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: '2.25rem',
              color: '#6d4c3d',
              marginBottom: '16px'
            }}>
              RSVP & Ucapan
            </h2>
            <div style={{
              width: '128px',
              height: '4px',
              background: 'linear-gradient(to right, transparent, #d4af37, transparent)',
              margin: '0 auto'
            }}></div>
          </div>
          <p style={{
            fontSize: '14px',
            color: 'rgba(109, 76, 61, 0.7)',
            marginTop: '16px'
          }}>
            Berikan ucapan dan konfirmasi kehadiran Anda
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px'
        }} className="wishes-grid">
          {/* Form Section */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
            transition: 'all 1s ease 0.2s'
          }}>
            <div style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              border: '2px solid rgba(212, 175, 55, 0.2)',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              padding: '24px'
            }}>
              {/* Decorative Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, transparent, #d4af37, transparent)'
              }}></div>

              <h3 style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '1.5rem',
                color: '#6d4c3d',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Kirim Ucapan Anda
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name Input */}
                <div>
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#6d4c3d',
                    marginBottom: '8px'
                  }}>
                    Nama Lengkap <span style={{ color: '#d4af37' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '2px solid rgba(212, 175, 55, 0.2)',
                      background: 'rgba(255, 255, 255, 0.5)',
                      color: '#6d4c3d',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#d4af37'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'}
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#6d4c3d',
                    marginBottom: '8px'
                  }}>
                    Ucapan & Doa <span style={{ color: '#d4af37' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '2px solid rgba(212, 175, 55, 0.2)',
                      background: 'rgba(255, 255, 255, 0.5)',
                      color: '#6d4c3d',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#d4af37'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'}
                    placeholder="Tulis ucapan dan doa untuk kami..."
                  ></textarea>
                </div>

                {/* Attendance Radio */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#6d4c3d',
                    marginBottom: '12px'
                  }}>
                    Konfirmasi Kehadiran <span style={{ color: '#d4af37' }}>*</span>
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    <label style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: formData.attendance === "hadir" ? '2px solid #d4af37' : '2px solid rgba(212, 175, 55, 0.2)',
                      background: formData.attendance === "hadir" ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (formData.attendance !== "hadir") {
                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.attendance !== "hadir") {
                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                      }
                    }}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="hadir"
                        checked={formData.attendance === "hadir"}
                        onChange={handleChange}
                        style={{
                          position: 'absolute',
                          width: '1px',
                          height: '1px',
                          padding: 0,
                          margin: '-1px',
                          overflow: 'hidden',
                          clip: 'rect(0, 0, 0, 0)',
                          whiteSpace: 'nowrap',
                          border: 0
                        }}
                      />
                      <svg style={{ width: '20px', height: '20px', marginRight: '8px', color: '#d4af37' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span style={{ color: '#6d4c3d', fontWeight: 500 }}>Hadir</span>
                    </label>

                    <label style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: formData.attendance === "tidak-hadir" ? '2px solid #d4af37' : '2px solid rgba(212, 175, 55, 0.2)',
                      background: formData.attendance === "tidak-hadir" ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (formData.attendance !== "tidak-hadir") {
                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.attendance !== "tidak-hadir") {
                        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                      }
                    }}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="tidak-hadir"
                        checked={formData.attendance === "tidak-hadir"}
                        onChange={handleChange}
                        style={{
                          position: 'absolute',
                          width: '1px',
                          height: '1px',
                          padding: 0,
                          margin: '-1px',
                          overflow: 'hidden',
                          clip: 'rect(0, 0, 0, 0)',
                          whiteSpace: 'nowrap',
                          border: 0
                        }}
                      />
                      <svg style={{ width: '20px', height: '20px', marginRight: '8px', color: 'rgba(109, 76, 61, 0.5)' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span style={{ color: '#6d4c3d', fontWeight: 500 }}>Tidak Hadir</span>
                    </label>
                  </div>
                </div>

                {/* Guest Count */}
                {formData.attendance === "hadir" && (
                  <div>
                    <label htmlFor="guestCount" style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#6d4c3d',
                      marginBottom: '8px'
                    }}>
                      Jumlah Tamu
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '2px solid rgba(212, 175, 55, 0.2)',
                        background: 'rgba(255, 255, 255, 0.5)',
                        color: '#6d4c3d',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#d4af37'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)'}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Orang
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(to right, #d4af37, #6d4c3d)',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg style={{
                        width: '20px',
                        height: '20px',
                        animationName: 'spin',
                        animationDuration: '1s',
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite'
                      }} fill="none" viewBox="0 0 24 24">
                        <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Kirim Ucapan
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  background: '#d1fae5',
                  border: '2px solid #6ee7b7',
                  borderRadius: '8px',
                  animationName: 'fadeIn',
                  animationDuration: '0.3s',
                  animationFillMode: 'both'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#065f46'
                  }}>
                    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span style={{ fontWeight: 500 }}>Ucapan berhasil dikirim!</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Wishes List Section */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
            transition: 'all 1s ease 0.4s'
          }}>
            <div style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              border: '2px solid rgba(212, 175, 55, 0.2)',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              padding: '24px'
            }}>
              {/* Decorative Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, transparent, #6d4c3d, transparent)'
              }}></div>

              <h3 style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '1.5rem',
                color: '#6d4c3d',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Ucapan dari Tamu
              </h3>

              {/* Wishes List */}
              <div className="custom-scrollbar" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                maxHeight: '500px',
                overflowY: 'auto',
                paddingRight: '8px'
              }}>
                {wishes.map((wish, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '8px',
                      border: '1px solid rgba(212, 175, 55, 0.1)',
                      transition: 'border-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)'}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom right, #d4af37, #6d4c3d)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 600
                        }}>
                          {wish.name.charAt(0)}
                        </div>
                        <div>
                          <h4 style={{ fontWeight: 600, color: '#6d4c3d', margin: 0 }}>{wish.name}</h4>
                          <p style={{ fontSize: '12px', color: 'rgba(109, 76, 61, 0.5)', margin: 0 }}>{wish.date}</p>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '12px',
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        background: wish.attendance === "hadir" ? '#d1fae5' : '#f3f4f6',
                        color: wish.attendance === "hadir" ? '#065f46' : '#4b5563'
                      }}>
                        {wish.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '14px',
                      color: 'rgba(109, 76, 61, 0.8)',
                      lineHeight: '1.75',
                      margin: 0
                    }}>
                      {wish.message}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total Count */}
              <div style={{
                marginTop: '16px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(109, 76, 61, 0.7)',
                  margin: 0
                }}>
                  Total <span style={{ fontWeight: 600, color: '#6d4c3d' }}>{wishes.length}</span> ucapan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(212, 175, 55, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.7);
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 3rem !important;
          }
          h3 {
            font-size: 1.875rem !important;
          }
          p {
            font-size: 16px !important;
          }
          form > div {
            padding: 32px !important;
          }
        }

        @media (min-width: 1024px) {
          .wishes-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
