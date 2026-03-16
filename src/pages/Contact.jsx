import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page bg-gray-50">
      <section className="section bg-black text-white text-center pb-2">
        <div className="container">
          <h1 className="text-white mb-2">Get in Touch</h1>
          <p className="text-gray-300 mx-auto max-w-600">
            Whether you have a retail question, need a bulk order for your business, or want to partner with us, we are here to help.
          </p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container contact-grid">
          
          <div className="contact-info">
            <h2 className="mb-3">Contact Information</h2>
            
            <div className="info-block">
              <MessageCircle className="info-icon text-yellow" size={24} />
              <div>
                <h4>WhatsApp Support</h4>
                <p>+62 812 3456 7890</p>
              </div>
            </div>

            <div className="info-block">
              <Mail className="info-icon text-yellow" size={24} />
              <div>
                <h4>Email Us</h4>
                <p>hello@montana-smart.com</p>
              </div>
            </div>

            <div className="info-block">
              <Clock className="info-icon text-yellow" size={24} />
              <div>
                <h4>Business Hours</h4>
                <p>Mon-Fri, 9:00 AM - 5:00 PM (WIB)</p>
              </div>
            </div>

            <div className="info-block mt-4 bg-white p-3 border-radius shadow-sm bulk-block">
              <h4 className="mb-1">Bulk Order Inquiries</h4>
              <p className="text-sm mb-2 text-gray-500">Looking to supply your entire office or school? We offer special pricing for volume orders.</p>
              <button className="btn btn-outline" style={{width: '100%'}}>Download Catalog (PDF)</button>
            </div>
            
            <div className="faq-links mt-4">
              <h4 className="mb-2">Quick Links</h4>
              <ul>
                <li><a href="#">Shipping & Delivery Policy</a></li>
                <li><a href="#">Return & Exchange Information</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
              </ul>
            </div>
          </div>

          <div className="contact-form-card shadow-md">
            <h2 className="mb-3">Send an Inquiry</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input type="email" placeholder="Your email address" required />
              </div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select defaultValue="General Question">
                  <option value="General Question">General Question</option>
                  <option value="Order Support">Order Support</option>
                  <option value="Bulk Order / Wholesale">Bulk Order / Wholesale</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="How can we help you?" required></textarea>
              </div>
              <button className="btn btn-primary" type="submit" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
