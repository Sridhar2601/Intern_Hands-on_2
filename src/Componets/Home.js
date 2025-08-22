import Client from './Client';
export default function Home() {
    return (
        <div>
            <div class="text-black py-5">
                <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div>
                        <h1 style={{ fontSize: '50px' }}>Welcome to my Web Development <br /> Portofolio!</h1>
                        <p style={{ fontSize: '20px', color: 'gray' }}>I'm Lily Smith, a passionate web developer <br /> based in USA. Here, you'll get a glimpse of my <br />journey in the world of web development, where <br />creativity meets functionality.</p>
                        <p>Your email</p>
                        <div class="d-flex flex-column flex-md-row align-items-center gap-3">
                            <div>
                                <input type='email' placeholder='Enter Your Email' style={{ height: '35px', width: '300px',border:"1px solid black",borderRadius:'5px' }}></input>
                            </div>
                            <div>
                                <button class="btn btn-dark text-white gap-3 back-ground-color-black">REQUIRE OFFER</button>
                            </div>
                        </div>
                        <div><p style={{paddingTop:'10px'}}>Read my <a href="#" title="Terms and Conditions" style={{ color: 'gray'}}>Terms and Conditions</a></p></div>
                    </div>
                    <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg" class="img-fluid mt-4 mt-md-0 me-5"
                        alt="Illustration" style={{ maxWidth: 500 }}></img>
                </div>
            </div>
            <Client />
        </div>
    );
}