// import Pclient from './Pclient';
// export default function Say() {
//     return (
//         <div className="mt-5 pt-5">
//             <h1>What Clients Say</h1>
//             <p style={{ color: 'gray', fontSize: '20px', paddingTop: '10px' }}>Discover what clients have to say about their experiences working<br /> with me. My client's satisfaction is my greatest achievement!</p>
//             <div class="text-black py-5">
//                 <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
//                     <div style={{ textAlign: 'left', paddingLeft: '130px' }}>
//                         <p style={{ fontSize: '30px' }}><b>Mobile App <br />Development</b></p>
//                         <p style={{ fontSize: '18px', color: 'gray' }}>I had the pleasure of working with Lily on a critical web<br /> development project, and I can confidently say that<br /> their expertise and professionalism exceeded my <br />expectations.</p>
//                         <p style={{ fontSize: '18px' }}><b>Michael - Technical Manager</b></p>
//                         <p style={{ fontSize: '15px', color: 'gray' }}>Marketing @ APPLE INC.</p>
//                         <div style={{display:'flex',gap:'20px'}}>
//                             <div><img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar1.jpg" style={{ width: '40px', height: '40px', borderRadius: '5px' }} id="sm"></img></div>
//                             <p>|</p>
//                             <div><img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar2.jpg" style={{ width: '40px', height: '40px', borderRadius: '5px',gap:'10px'}} id="sm"></img></div>
//                             <p>|</p>
//                             <div><img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg" style={{ width: '40px', height: '40px', borderRadius: '5px' }} id="sm"></img></div>
//                         </div>
//                     </div>
//                     <div className="me-5">
//                         <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg" class="img-fluid mt-4 mt-md-0 me-5"
//                             alt="Illustration" style={{ width: '300px', height: '350px', borderRadius: '10px' }} id="lm"></img></div>
//                 </div>
//             </div>
//             <Pclient/>
//         </div>
//     )
// }

import Pclient from './Pclient';

export default function Say() {
    return (
        <div className="mt-5">
            <h1 className="text-center mb-3">What Clients Say</h1>
            <p className="text-center text-md-start" style={{ color: 'gray', fontSize: '1rem', paddingTop: '10px' }}>
                Discover what clients have to say about their experiences working
                with me. My client's satisfaction is my greatest achievement!
            </p>

            <div className="text-black py-5">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    {/* Text Section */}
                    <div className="text-center text-md-start mb-4 mb-md-0 px-3">
                        <p className="fw-bold" style={{ fontSize: '1.5rem' }}>
                            Mobile App <br />Development
                        </p>
                        <p style={{ fontSize: '0.95rem', color: 'gray' }}>
                            I had the pleasure of working with Lily on a critical web<br />
                            development project, and I can confidently say that<br />
                            their expertise and professionalism exceeded my <br />expectations.
                        </p>
                        <p className="fw-bold" style={{ fontSize: '1rem' }}>Michael - Technical Manager</p>
                        <p style={{ fontSize: '0.85rem', color: 'gray' }}>Marketing @ APPLE INC.</p>

                        <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2 mt-3">
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar1.jpg"
                                className="rounded" style={{ width: '40px', height: '40px' }} alt="avatar1" />
                            <span>|</span>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar2.jpg"
                                className="rounded" style={{ width: '40px', height: '40px' }} alt="avatar2" />
                            <span>|</span>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg"
                                className="rounded" style={{ width: '40px', height: '40px' }} alt="avatar3" />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="d-flex justify-content-center justify-content-md-end">
                        <img
                            src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg"
                            className="img-fluid"
                            alt="Illustration"
                            style={{ maxWidth: '300px', width: '100%', height: 'auto', borderRadius: '10px' }}
                        />
                    </div>
                </div>
            </div>

            <Pclient />
        </div>
    );
}
