"use client";

import { useEffect, useState } from "react";
import FloralDecoration from "./FloralDecoration";

export default function GiftRegistry() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [copied, setCopied] = useState(false);

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

    const element = document.getElementById("gift");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const accounts = [
    {
      bank: "BCA",
      accountNumber: "1234567890",
      accountName: "Indah Ayuningtias Permata",
      logo: (
        <div style={{
          width: '100%',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0066cc',
          borderRadius: '12px 12px 0 0'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>BCA</span>
        </div>
      ),
      qrCode: "https://placehold.co/200x200/0066CC/FFFFFF?text=QR+BCA",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "9876543210",
      accountName: "Buha P Sianturi",
      logo: (
        <div style={{
          width: '100%',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fbbf24',
          borderRadius: '12px 12px 0 0'
        }}>
          <span style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '1.5rem' }}>MANDIRI</span>
        </div>
      ),
      qrCode: "https://placehold.co/200x200/FFCC00/003366?text=QR+Mandiri",
    },
  ];

  const openModal = (account) => {
    setSelectedAccount(account);
    setShowModal(true);
    setCopied(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAccount(null);
    setCopied(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="gift" style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '80px 16px',
        background: 'linear-gradient(to bottom, #f8f3e8, rgba(248, 243, 232, 0.5))',
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
            top: '80px',
            right: '25%',
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
            bottom: '80px',
            left: '25%',
            width: '256px',
            height: '256px',
            background: '#6d4c3d',
            borderRadius: '50%',
            filter: 'blur(48px)',
            animationName: 'float',
            animationDuration: '6s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: '2s'
          }}></div>
        </div>

        <FloralDecoration position="top-left" />
        <FloralDecoration position="bottom-right" />

        <div style={{
          maxWidth: '1024px',
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
                Hadiah Pernikahan
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
              marginTop: '16px',
              maxWidth: '672px',
              margin: '16px auto 0'
            }}>
              Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.<br />
              Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
            </p>
          </div>

          {/* Gift Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            marginBottom: '48px'
          }} className="gift-grid">
            {accounts.map((account, index) => (
              <div
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 1s ease ${(index + 1) * 200}ms`
                }}
              >
                <div style={{ position: 'relative', height: '100%' }}>
                  {/* Glow Effect */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), rgba(109, 76, 61, 0.1), rgba(212, 175, 55, 0.2))',
                    borderRadius: '12px',
                    filter: 'blur(24px)',
                    transition: 'transform 0.5s ease'
                  }}></div>

                  <div style={{
                    position: 'relative',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(212, 175, 55, 0.2)',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                    const glow = e.currentTarget.previousElementSibling;
                    if (glow) glow.style.transform = 'scale(1.05)';
                    const icon = e.currentTarget.querySelector('.account-icon');
                    if (icon) icon.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                    const glow = e.currentTarget.previousElementSibling;
                    if (glow) glow.style.transform = 'scale(1)';
                    const icon = e.currentTarget.querySelector('.account-icon');
                    if (icon) icon.style.transform = 'scale(1)';
                  }}
                  >
                    {/* Bank Logo */}
                    {account.logo}

                    {/* Content */}
                    <div style={{ padding: '24px', textAlign: 'center' }}>
                      {/* Icon */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '24px'
                      }}>
                        <div className="account-icon" style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom right, #d4af37, #6d4c3d)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                          transition: 'transform 0.3s ease'
                        }}>
                          <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                      </div>

                      {/* Account Name */}
                      <h3 style={{
                        fontWeight: 600,
                        color: '#6d4c3d',
                        fontSize: '1.125rem',
                        marginBottom: '8px'
                      }}>
                        {account.accountName}
                      </h3>

                      {/* Account Number (Masked) */}
                      <div style={{
                        marginBottom: '24px',
                        padding: '12px',
                        background: 'rgba(109, 76, 61, 0.05)',
                        borderRadius: '8px'
                      }}>
                        <p style={{
                          fontSize: '14px',
                          color: 'rgba(109, 76, 61, 0.6)',
                          marginBottom: '4px'
                        }}>
                          Nomor Rekening
                        </p>
                        <p style={{
                          fontFamily: 'monospace',
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: '#6d4c3d'
                        }}>
                          •••• •••• {account.accountNumber.slice(-4)}
                        </p>
                      </div>

                      {/* Button */}
                      <button
                        onClick={() => openModal(account)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: 'linear-gradient(to right, #d4af37, #6d4c3d)',
                          color: 'white',
                          borderRadius: '8px',
                          fontWeight: 500,
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                        Lihat Detail & QR Code
                      </button>
                    </div>

                    {/* Decorative Flower */}
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      width: '32px',
                      height: '32px',
                      opacity: 0.1,
                      animationName: 'float',
                      animationDuration: '6s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite'
                    }}>
                      <svg viewBox="0 0 100 100">
                        <path d="M50 40 C 40 40, 35 45, 35 55 C 35 60, 40 65, 50 65 C 60 65, 65 60, 65 55 C 65 45, 60 40, 50 40 Z" fill="#d4af37" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Physical Gift Address */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease 0.6s'
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
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, transparent, #d4af37, transparent)'
              }}></div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom right, #6d4c3d, #d4af37)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                  </div>
                </div>
                
                <h3 style={{
                  fontFamily: 'Dancing Script, cursive',
                  fontSize: '1.5rem',
                  color: '#6d4c3d',
                  marginBottom: '12px'
                }}>
                  Kirim Hadiah Langsung
                </h3>
                
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(109, 76, 61, 0.7)',
                  marginBottom: '16px'
                }}>
                  Atau Anda dapat mengirimkan hadiah ke alamat berikut:
                </p>
                
                <div style={{
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '8px',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <p style={{
                    color: '#6d4c3d',
                    fontWeight: 500,
                    lineHeight: '1.75'
                  }}>
                    Dusun Cikiruhwetan RT 02 RW 08<br />
                    Desa Karangsambung, Kec. Karangtengah<br />
                    Kabupaten Cianjur, Jawa Barat<br />
                    43281
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(109, 76, 61, 0.7)',
                    marginTop: '8px'
                  }}>
                    a.n. <strong>Indah Ayuningtias Permata</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedAccount && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'rgba(0, 0, 0, 0.7)',
            animationName: 'fadeIn',
            animationDuration: '0.3s',
            animationFillMode: 'both'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '448px',
              width: '100%',
              animationName: 'scaleIn',
              animationDuration: '0.3s',
              animationFillMode: 'both',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(109, 76, 61, 0.1)',
                color: '#6d4c3d',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(109, 76, 61, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(109, 76, 61, 0.1)'}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Bank Logo */}
            {selectedAccount.logo}

            {/* Content */}
            <div style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '1.5rem',
                color: '#6d4c3d',
                marginBottom: '16px'
              }}>
                Transfer ke Rekening
              </h3>

              {/* Account Details */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  padding: '16px',
                  background: 'rgba(248, 243, 232, 0.5)',
                  borderRadius: '8px'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(109, 76, 61, 0.6)',
                    marginBottom: '4px'
                  }}>
                    Nama Penerima
                  </p>
                  <p style={{
                    fontWeight: 600,
                    color: '#6d4c3d'
                  }}>
                    {selectedAccount.accountName}
                  </p>
                </div>

                <div style={{
                  padding: '16px',
                  background: 'rgba(248, 243, 232, 0.5)',
                  borderRadius: '8px'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(109, 76, 61, 0.6)',
                    marginBottom: '4px'
                  }}>
                    Nomor Rekening
                  </p>
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#6d4c3d',
                    marginBottom: '8px'
                  }}>
                    {selectedAccount.accountNumber}
                  </p>
                  <button
                    onClick={() => copyToClipboard(selectedAccount.accountNumber)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      background: 'rgba(212, 175, 55, 0.2)',
                      color: '#6d4c3d',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'}
                  >
                    {copied ? (
                      <>
                        <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Tersalin!
                      </>
                    ) : (
                      <>
                        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Salin Nomor
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* QR Code */}
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(109, 76, 61, 0.6)',
                  marginBottom: '12px'
                }}>
                  Atau scan QR Code
                </p>
                <div style={{
                  position: 'relative',
                  display: 'inline-block',
                  padding: '16px',
                  background: 'white',
                  borderRadius: '8px',
                  border: '2px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <img
                    src={selectedAccount.qrCode}
                    alt={`QR Code ${selectedAccount.bank}`}
                    style={{
                      width: '192px',
                      height: '192px',
                      margin: '0 auto'
                    }}
                  />
                </div>
              </div>

              <p style={{
                fontSize: '12px',
                color: 'rgba(109, 76, 61, 0.5)',
                fontStyle: 'italic'
              }}>
                Scan QR code di atas menggunakan aplikasi mobile banking Anda
              </p>
            </div>
          </div>
        </div>
      )}

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

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
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
          .gift-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="padding: '24px'"] {
            padding: 32px !important;
          }
        }
      `}</style>
    </>
  );
}
