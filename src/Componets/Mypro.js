import Resume from './Resume';
export default function Mypro() {
    return (
        <div>
            <h1 className="mt-5" style={{ textAlign: 'center' }}>My Projects</h1>
            <p style={{ fontSize: '20px', color: 'gray' }}>Whether you have a mobile app idea that needs to come to<br /> life or a website that requires a facelift, I'm here to turn your <br />digital dreams into reality.</p>
            <div className="container">
                <div class="row mt-5">
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog-1.svg" class="card-img-top" alt=""
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">Mobile App Development</h5>
                                <p class="card-text mt-3">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog2.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">Landing Page Development</h5>
                                <p class="card-text mt-3">Promotional landing page for a fitness website Summer Campaign. Form development included.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog3.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">App Development</h5>
                                <p class="card-text mt-3">App designed to help users discover and explore local restaurants and cuisines.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">E-commerce development</h5>
                                <p class="card-text mt-3">Ecommerce website offering access to the latest and greatest gadgets and accessories.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog-1.svg" class="card-img-top" alt=""
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">Mobile App Development</h5>
                                <p class="card-text mt-3">Mobile app designed to help users discover and explore local restaurants and cuisines.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog2.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">Landing Page Development</h5>
                                <p class="card-text mt-3">Promotional landing page for a fitness website Summer Campaign. Form development included.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog3.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">App Development</h5>
                                <p class="card-text mt-3">App designed to help users discover and explore local restaurants and cuisines.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4" data-aos="fade-up-right">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body" style={{textAlign:'left'}}>
                                <h5 class="card-title mt-3">E-commerce development</h5>
                                <p class="card-text mt-3">Ecommerce website offering access to the latest and greatest gadgets and accessories.</p>
                                <a href="#" class="btn btn-dark">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Resume/>
        </div>
    )
}