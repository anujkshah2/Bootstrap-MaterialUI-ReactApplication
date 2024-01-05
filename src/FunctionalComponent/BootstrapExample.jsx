import React from 'react'

export default function BootstrapExample() {
    let data = [
        { name: " Product1", pic: "/images/p1.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product2", pic: "/images/p2.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product3", pic: "/images/p3.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product4", pic: "/images/p4.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product5", pic: "/images/p5.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product6", pic: "/images/p6.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product7", pic: "/images/p7.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product8", pic: "/images/p8.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product9", pic: "/images/p9.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product10", pic: "/images/p10.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product11", pic: "/images/p11.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product12", pic: "/images/p12.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product13", pic: "/images/p13.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product14", pic: "/images/p14.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product15", pic: "/images/p15.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product16", pic: "/images/p16.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product17", pic: "/images/p17.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product18", pic: "/images/p18.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product19", pic: "/images/p19.jpg", baseprice: 8000, finalprice: 90000 },
        { name: " Product20", pic: "/images/p20.jpg", baseprice: 8000, finalprice: 90000 },
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">EntaWood</a>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item text-light">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Services</a>
                            </li>
                            <li>
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Workspacace
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Management</a></li>
                                    <li><a className="dropdown-item" href="#">SEO</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Design Team</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex " role="search">
                            <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light text-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/banner1.jpg" height="500px" width="100%" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner3.jpg" height="500px" width="100%" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner2.jpg" height="500px" width="100%" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <h5 className='background text-light text-center p-2'> Here it is </h5> */}

            <div className='container-fluid'>
                <div className='row'>
                    {
                        data.map((item, index) => {
                            return <div key={index} className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                                <div className="card" >
                                    <img src={item.pic} height="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text"><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice}</p>
                                        <a href="#" className="btn btn-success">Add To Cart </a>
                                    </div>
                                </div>
                            </div>

                        }
                        )}


                    {/* <div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-5 col-12'>
                        <div className="card" >
                            <img src="/images/p1.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Man Jeans</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Add To Cart </a>
                                </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}
