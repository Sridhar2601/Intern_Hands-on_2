// import './CSS/Footer.css'
// export default function Footer() {
//     return (
//         <div className="container mt-5">
//             <div class="fb">
//                     <div><p className="mt-3" style={{textAlign:'left'}}>© 2025 Made with Material Tailwind by Creative Tim. Distributed by ThemeWagon</p></div>
//                     <div class="n">
                        
//                         <li> <a href="#" style={{textDecoration:'none',color:'black'}}>Home</a></li>
//                         <li> <a href="#" style={{textDecoration:'none',color:'black'}}>About</a></li>
//                         <li> <a href="#" style={{textDecoration:'none',color:'black'}}>Blog</a></li>
//                         <li> <a href="#" style={{textDecoration:'none',color:'black'}}>Service</a></li>
//                         <button class="btn btn-outline-dark" type="submit" style={{backgroundColor:'black',color:'white'}}>Subscribe</button>
//                     </div>
//             </div>
//         </div>
//     )
// }


import './CSS/Footer.css';

export default function Footer() {
    return (
        <div className="container mt-5">
            <div className="fb d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                {/* Left Text */}
                <div className="text-center text-md-start">
                    <p className="mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
                        © 2025 Made with Material Tailwind
                    </p>
                </div>

                {/* Right Links and Button */}
                <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                    <ul className="list-unstyled d-flex flex-column flex-md-row align-items-center gap-2 mb-2 mb-md-0">
                        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Home</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>About</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Blog</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Service</a></li>
                    </ul>
                    <button className="btn btn-dark px-3 py-1" type="submit">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
