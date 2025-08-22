import Contact from './Contact';
export default function Pclient(){
    return(
        <div className="mt-5">
            <p style={{color:"gray"}}><b>POPULAR CLIENTS</b></p>
            <p style={{fontSize:'40px'}}><b>Trusted by over 10,000+ <br/> clients</b></p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4" style={{filter:"grayscale(100%)"}}>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg" alt="coinbase" id="i"></img>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg" alt="spotify" id="i"></img>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg" alt="pinterest" id="i"></img>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg" alt="google" id="i"></img>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg" alt="amazon" id="i"></img>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg" alt="netflix" id="i"></img>
            </div>
            <Contact/>
        </div>
    );
}