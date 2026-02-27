import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import instagramIcon from '../assets/instagram.png';

// Initialize EmailJS
emailjs.init("1kg-NWTDjnF3LQdMv");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_nuwurip",
        "template_kih45sd",
        {
          to_email: "aryanaditya064@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.number,
          message: formData.message,
        }
      );

      setStatusMessage('✓ Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', number: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatusMessage('✗ Failed to send message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your business with innovative technology solutions? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

            
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center">
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <a
                    href="https://www.instagram.com/weblytechh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-pink-300 transition-colors"
                  >
                    @weblytechh
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:weblytechnologiespvt.ltd@gmail.com"
                    className="text-white font-medium hover:text-blue-300 transition-colors"
                  >
                    weblytechnologiespvt.ltd@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-600/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mobile</p>
                  <div className="mt-1 space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-white font-medium">+91 80767 53004</p>
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:+918076753004"
                            aria-label="Call +91 80767 53004"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-cyan-500/30 bg-cyan-900/20 text-cyan-200 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                          <a
                            href="https://wa.me/918076753004"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp +91 80767 53004"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-cyan-500/30 bg-cyan-900/20 text-cyan-200 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-white font-medium">+91 93110 84846</p>
                        <div className="flex items-center gap-2">
                          <a
                            href="tel:+919311084846"
                            aria-label="Call +91 93110 84846"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-cyan-500/30 bg-cyan-900/20 text-cyan-200 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                          <a
                            href="https://wa.me/919311084846"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp +91 93110 84846"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-cyan-500/30 bg-cyan-900/20 text-cyan-200 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <a
                    href="https://maps.google.com/?q=Sector+28,Faridabad,Haryana,India+121008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-purple-300 transition-colors"
                  >
                    Sector 28, Faridabad, Haryana
                  </a>
                  <p className="text-white font-medium">India - 121008</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  statusMessage.includes('✓') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {statusMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -left-96 -top-96 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      <div className="absolute -right-96 -bottom-96 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
    </section>
  );
};

export default Contact;
