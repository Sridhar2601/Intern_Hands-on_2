// import './CSS/Contact.css';
// import Footer from './Footer';
// export default function Contact() {
//     return (
//         <div className='container'>
//             <div className="mt-5">
//                 <h1 style={{ fontSize: '50px' }}><b>Contact Us</b></h1>
//                 <p className="mt-3" style={{ color: 'gray', fontSize: '20px' }}>Ready to get started? Feel free to reach out through <br />the contact form, and let's embark on a journey of <br /> innovation and success.</p>
//             </div>
//             <div class="row mt-5">
//                 <div class="col-md-4 col-lg-4 mb-4" data-aos="flip-right" id="C">
//                     <h4>Contact Information</h4>
//                     <p style={{color:'gray'}}>Fill up the form and our Team will get <br/>back to you within 24 hours.</p>
//                     <div style={{fontWeight:'bold'}}>
//                         <p><i class="fa-solid fa-phone"></i>(+91)-9876543210</p>
//                         <p><i class="fa-solid fa-envelope"></i>materialtailwind@gmail.com</p>
//                         <p><i class="fa-solid fa-ticket"></i>Open Support Ticket</p>
//                     </div>
//                 </div>
//                 <div class="col-md-8 col-lg-8 mb-4" data-aos="flip-left">

//                     <div class="row ms-5" data-aos="flip-left">
//                         <div class="d-flex gap-5" style={{ textAlign: 'left' }}>
//                             <div class="col-md-4">
//                                 <label for="name" id="c">First Name</label>
//                                 <input type="text" placeholder="eg. John" required style={{ width: '300px' }} id="f"></input>
//                             </div>
//                             <div class="col-md-4 ps-5">
//                                 <label for="name" id="c">Last Name</label>
//                                 <input type="text" placeholder="eg. Smith" required style={{ width: '300px' }} id="f"></input>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="row ms-5 mt-3" data-aos="flip-left">
//                         <div class="d-flex" style={{ textAlign: 'left' }}>
//                             <div class="col-md-4">
//                                 <label for="name" id="c">Email Address</label>
//                                 <input type="text" placeholder="eg. johnsmith@gmail.com" required style={{ width: '620px' }} id="f"></input>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="row ms-5 mt-3" data-aos="flip-left">
//                         <div class="col-md-8">
//                             <p style={{ textAlign: 'left' }} id="c">What are you interested on?</p>
//                             <div className="d-flex gap-3" style={{color:'gray'}}>
//                                 <label>
//                                     <input type="radio" name="interest" value="web" /> Design
//                                 </label>
//                                 <label>
//                                     <input type="radio" name="interest" value="mobile" /> Development
//                                 </label>
//                                 <label>
//                                     <input type="radio" name="interest" value="design" /> Support
//                                 </label>
//                                 <label>
//                                     <input type="radio" name="interest" value="marketing" /> Others
//                                 </label>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="row ms-5 mt-3" data-aos="flip-left">
//                         <div class="d-flex" style={{ textAlign: 'left' }}>
//                             <div class="col-md-4">
//                                 <label for="message" id="c">Your Message</label>
//                                 <input type="text" required style={{ width: '620px',height:'100px' }} id="f"></input>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="btn btn-dark mt-2" style={{marginLeft:'485px',color:'white'}}>Send Message</div>
                    
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     )
// }



import './CSS/Contact.css';
import Footer from './Footer';

export default function Contact() {
    return (
        <div className="container my-5">
            {/* Heading */}
            <div className="text-center text-md-start">
                <h1 className="fw-bold" style={{ fontSize: '2.5rem' }}>Contact Us</h1>
                <p className="mt-3" style={{ color: 'gray', fontSize: '1rem' }}>
                    Ready to get started? Feel free to reach out through
                    the contact form, and let's embark on a journey of
                    innovation and success.
                </p>
            </div>

            <div className="row mt-5">
                {/* Contact Info */}
                <div className="col-12 col-md-4 mb-4" data-aos="flip-right" id="C">
                    <h4>Contact Information</h4>
                    <p style={{ color: 'gray' }}>Fill up the form and our Team will get <br />back to you within 24 hours.</p>
                    <div className="fw-bold">
                        <p><i className="fa-solid fa-phone"></i> (+91)-9876543210</p>
                        <p><i className="fa-solid fa-envelope"></i> materialtailwind@gmail.com</p>
                        <p><i className="fa-solid fa-ticket"></i> Open Support Ticket</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-12 col-md-8 mb-4" data-aos="flip-left">
                    {/* First & Last Name */}
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <label htmlFor="firstName" id="c">First Name</label>
                            <input type="text" placeholder="eg. John" required className="form-control" id="f" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="lastName" id="c">Last Name</label>
                            <input type="text" placeholder="eg. Smith" required className="form-control" id="f" />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="row g-3 mt-3">
                        <div className="col-12">
                            <label htmlFor="email" id="c">Email Address</label>
                            <input type="text" placeholder="eg. johnsmith@gmail.com" required className="form-control" id="f" />
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="row mt-3">
                        <div className="col-12">
                            <p id="c">What are you interested in?</p>
                            <div className="d-flex flex-wrap gap-3" style={{ color: 'gray' }}>
                                <label><input type="radio" name="interest" value="design" /> Design</label>
                                <label><input type="radio" name="interest" value="development" /> Development</label>
                                <label><input type="radio" name="interest" value="support" /> Support</label>
                                <label><input type="radio" name="interest" value="others" /> Others</label>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="row mt-3">
                        <div className="col-12">
                            <label htmlFor="message" id="c">Your Message</label>
                            <textarea required className="form-control" rows="5" id="f" placeholder="Type your message here..."></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-3">
                        <button className="btn btn-dark px-5 py-2">Send Message</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
