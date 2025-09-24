// import Home from './Home';
// export default function Nav() {
//     return (
//         <div className="App">
//             <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'sticky', top: '0', zIndex: 1 }}>
//                 <div class="container">
//                     <a class="navbar-brand" href="#"><b>Material Tailwind</b></a>

//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ paddingLeft: 230, gap: 50 }}>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#"><i class="fa-regular fa-file-lines"></i>Page</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" href="#"><i class="fa-solid fa-user"></i>Account</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" href="#"><i class="fa-solid fa-file-import"></i>Docs</a>
//                             </li>
//                         </ul>

//                         <form class="d-flex" role="search" style={{ gap: 10 }}>
//                             <button class="btn btn-outline-light" type="submit" style={{ color: 'black' }}>Sign-In</button>
//                             <button class="btn btn-outline-dark" type="submit" style={{ backgroundColor: 'black', color: 'white' }}>Blocks</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//             <Home />
//         </div>
//     );
// }


import Home from './Home';

export default function Nav() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <div className="container">
                    <a className="navbar-brand" href="#"><b>Material Tailwind</b></a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="fa-regular fa-file-lines"></i> Page
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <i className="fa-solid fa-user"></i> Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <i className="fa-solid fa-file-import"></i> Docs
                                </a>
                            </li>
                        </ul>

                        <div className="d-flex gap-2 flex-wrap">
                            <button className="btn btn-outline-dark" type="button">
                                Sign-In
                            </button>
                            <button className="btn btn-dark" type="button">
                                Blocks
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <Home />
        </div>
    );
}
