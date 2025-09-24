// import './CSS/Client.css';
// import Skill from './Skill';
// export default function Client(){
//     return(
//         <div className="text-center my-5">
//             <p style={{textAlign:'center'}}>My Clients</p>
//             <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
//                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg" alt="coinbase" id="i"></img>
//                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg" alt="spotify" id="i"></img>
//                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg" alt="pinterest" id="i"></img>
//                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg" alt="google" id="i"></img>
//                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg" alt="amazon" id="i"></img>
//                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg" alt="netflix" id="i"></img>
//             </div>
//             <Skill />
//         </div>
//     );
// }


import './CSS/Client.css';
import Skill from './Skill';

export default function Client() {
    return (
        <div className="text-center my-5">
            <h2 className="fw-bold mb-4" style={{ fontSize: '2rem' }}>
                My Clients
            </h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg"
                    alt="coinbase"
                    className="img-fluid"
                    style={{ maxWidth: '100px' }}
                />
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg"
                    alt="spotify"
                    className="img-fluid"
                    style={{ maxWidth: '100px' }}
                />
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg"
                    alt="pinterest"
                    className="img-fluid"
                    style={{ maxWidth: '100px' }}
                />
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg"
                    alt="google"
                    className="img-fluid"
                    style={{ maxWidth: '100px' }}
                />
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg"
                    alt="amazon"
                    className="img-fluid"
                    style={{ maxWidth: '100px' }}
                />
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg"
                    alt="netflix"
                    className="img-fluid"
                    style={{ maxWidth: '100px' }}
                />
            </div>
            <Skill />
        </div>
    );
}
