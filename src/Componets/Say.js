import Pclient from './Pclient';
export default function Say() {
    return (
        <div className="mt-5 pt-5">
            <h1>What Clients Say</h1>
            <p style={{ color: 'gray', fontSize: '20px', paddingTop: '10px' }}>Discover what clients have to say about their experiences working<br /> with me. My client's satisfaction is my greatest achievement!</p>
            <div class="text-black py-5">
                <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div style={{ textAlign: 'left', paddingLeft: '130px' }}>
                        <p style={{ fontSize: '30px' }}><b>Mobile App <br />Development</b></p>
                        <p style={{ fontSize: '18px', color: 'gray' }}>I had the pleasure of working with Lily on a critical web<br /> development project, and I can confidently say that<br /> their expertise and professionalism exceeded my <br />expectations.</p>
                        <p style={{ fontSize: '18px' }}><b>Michael - Technical Manager</b></p>
                        <p style={{ fontSize: '15px', color: 'gray' }}>Marketing @ APPLE INC.</p>
                        <div style={{display:'flex',gap:'20px'}}>
                            <div><img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar1.jpg" style={{ width: '40px', height: '40px', borderRadius: '5px' }} id="sm"></img></div>
                            <p>|</p>
                            <div><img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar2.jpg" style={{ width: '40px', height: '40px', borderRadius: '5px',gap:'10px'}} id="sm"></img></div>
                            <p>|</p>
                            <div><img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg" style={{ width: '40px', height: '40px', borderRadius: '5px' }} id="sm"></img></div>
                        </div>
                    </div>
                    <div className="me-5">
                        <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg" class="img-fluid mt-4 mt-md-0 me-5"
                            alt="Illustration" style={{ width: '300px', height: '350px', borderRadius: '10px' }} id="lm"></img></div>
                </div>
            </div>
            <Pclient/>
        </div>


        
    )
}

