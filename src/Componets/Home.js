// import Client from './Client';
// export default function Home() {
//     return (
//         <div>
//             <div class="text-black py-5">
//                 <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
//                     <div>
//                         <h1 style={{ fontSize: '50px' }}>Welcome to my Web Development <br /> Portofolio!</h1>
//                         <p style={{ fontSize: '20px', color: 'gray' }}>I'm Lily Smith, a passionate web developer <br /> based in USA. Here, you'll get a glimpse of my <br />journey in the world of web development, where <br />creativity meets functionality.</p>
//                         <p>Your email</p>
//                         <div class="d-flex flex-column flex-md-row align-items-center gap-3">
//                             <div>
//                                 <input type='email' placeholder='Enter Your Email' style={{ height: '35px', width: '300px',border:"1px solid black",borderRadius:'5px' }}></input>
//                             </div>
//                             <div>
//                                 <button class="btn btn-dark text-white gap-3 back-ground-color-black">REQUIRE OFFER</button>
//                             </div>
//                         </div>
//                         <div><p style={{paddingTop:'10px'}}>Read my <a href="#" title="Terms and Conditions" style={{ color: 'gray'}}>Terms and Conditions</a></p></div>
//                     </div>
//                     <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg" class="img-fluid mt-4 mt-md-0 me-5"
//                         alt="Illustration" style={{ maxWidth: 500 }}></img>
//                 </div>
//             </div>
//             <Client />
//         </div>
//     );
// }


import Client from './Client';

export default function Home() {
    return (
        <div>
            <div className="text-black py-5">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="text-center text-md-start">
                        <h1 className="mb-3" style={{ fontSize: '2.5rem' }}>
                            Welcome to my Web Development <br /> Portfolio!
                        </h1>
                        <p className="mb-3" style={{ fontSize: '1.2rem', color: 'gray' }}>
                            I'm Lily Smith, a passionate web developer <br /> based in USA. Here, you'll get a glimpse of my <br /> journey in the world of web development, where <br /> creativity meets functionality.
                        </p>
                        <p className="mb-2">Your email</p>
                        <div className="d-flex flex-column flex-sm-row align-items-center gap-2 gap-sm-3 mb-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                                style={{ maxWidth: '300px', border: "1px solid black", borderRadius: '5px' }}
                            />
                            <button className="btn btn-dark text-white" style={{ minWidth: '150px' }}>
                                REQUIRE OFFER
                            </button>
                        </div>
                        <p className="mt-2">
                            Read my <a href="#" title="Terms and Conditions" style={{ color: 'gray' }}>Terms and Conditions</a>
                        </p>
                    </div>

                    <img
                        src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg"
                        alt="Illustration"
                        className="img-fluid mt-4 mt-md-0"
                        style={{ maxWidth: '100%', width: '400px' }}
                    />
                </div>
            </div>
            <Client />
        </div>
    );
}
