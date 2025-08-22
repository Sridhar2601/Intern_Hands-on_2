import './CSS/Skill.css'
import Mypro from './Mypro';
export default function Skill() {
    return (
        <div className="my-5">
            <p style={{ textAlign: 'center' }}>My Skills</p>
            <h1 style={{ fontSize: '50px' }}><b>What I do</b></h1>
            <p style={{ color: 'gray', fontSize: '20px' }}>I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job <br /> but my calling. Discover below how I can help you.</p>
            <div className="container g-5">
                <div class="row mt-5 pt-5">
                    <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                        <div class="pt-3">
                            <center><i class="fa-solid fa-globe" id="l"></i></center>
                            <div class="card-body d-flex pt-4">
                                <div>
                                    <h5 class="card-title ps-3">Frontend Web Development:</h5>
                                    <p class="card-text ps-3 pt-2">Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                        <div class="pt-3">
                            <center><i class="fa-solid fa-fingerprint" id="l"></i></center>
                            <div class="card-body d-flex pt-4">
                                <div>
                                    <h5 class="card-title ps-3">Mobile App Development</h5>
                                    <p class="card-text ps-3 pt-2">I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                        <div class="pt-3">
                            <center><i class="fa-solid fa-layer-group" id="l"></i></center>
                            <div class="card-body d-flex pt-4">
                                <div>
                                    <h5 class="card-title ps-3">Technology Stack</h5>
                                    <p class="card-text ps-3 pt-2">I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                        <div class="pt-3">
                            <center><i class="fa-solid fa-hashtag" id="l"></i></center>
                            <div class="card-body d-flex pt-4">
                                <div>
                                    <h5 class="card-title ps-3">Web Optimization</h5>
                                    <p class="card-text ps-3 pt-2">Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                        <div class="pt-3">
                            <center><i class="fa-solid fa-eye" id="l"></i></center>
                            <div class="card-body d-flex pt-4">
                                <div>
                                    <h5 class="card-title ps-3">User-Centric Design</h5>
                                    <p class="card-text ps-3 pt-2">My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                        <div class="pt-3">
                            <center><i class="fa-solid fa-file-contract" id="l"></i></center>
                            <div class="card-body d-flex pt-4">
                                <div>
                                    <h5 class="card-title ps-3">Testing and Quality Assurance</h5>
                                    <p class="card-text ps-3 pt-2">I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Mypro />
        </div>
    );
}