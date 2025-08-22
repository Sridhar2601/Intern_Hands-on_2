import './CSS/Resume.css';
import Say from './Say';
export default function Resume() {
    return (
        <div>
            <div className="container">
                <div class="row mt-5">
                    <div class="col-lg-6" style={{ textAlign: 'left' }}>
                        <h5 style={{ fontSize: '35px' }}><b>My Resume</b></h5>
                        <p class="card-text">Highly skilled and creative Web Developer with 5+ years<br /> of experience in crafting visually stunning and <br /> functionally robust websites and web applications.</p>
                        <a href="#" class="btn btn-light" style={{ color: 'black' }}>View More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-4 ps-5 pt-2" data-aos="fade-right">
                        <div class="d-flex gap-3">
                            <div class="logo-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                            <div>
                                <p>Bachelor of Science in Computer Science</p>
                            </div>
                        </div>
                        <div class="d-flex pt-3 gap-3">
                            <div class="logo-icon"><i class="fa-solid fa-globe"></i></div>
                            <div>
                                <p>Certified Web Developer</p>
                            </div>
                        </div>
                        <div class="d-flex pt-3 gap-3">
                            <div class="logo-icon"><i class="fa-solid fa-certificate"></i></div>
                            <div>
                                <p>Frontend Framework Proficiency Certification</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Say/>
        </div>
    )
}