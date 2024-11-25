import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="##" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="##" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="##" className="text-light text-decoration-none">Press</a></li>
              <li><a href="##" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="##" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="##" className="text-light text-decoration-none">Shipping</a></li>
              <li><a href="##" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="##" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex">
              <a href="##" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="##" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="##" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="##" className="text-light me-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="##" className="text-light"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Subscribe</h5>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center py-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Mamaearth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
