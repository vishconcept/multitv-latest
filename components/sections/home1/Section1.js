import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Section1() {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero hero-2">
                    <div className="banner-inner">
                        <span className="bg-banner shape-2" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-9">
                                    <div className="block-banner">
                                        <h1 className="heading-banner display-2 wow animate__animated animate__fadeInUp mb-40">
                                            Video SaaS Solutions for
                                        </h1>
                                        <div className="cards-banner">
                                            <div className="card-banner-1 linear-2">
                                                {/* <div className="card-image">
                                                    <img src="/assets/imgs/page/homepage5/manage.svg" alt="Nivia" />
                                                </div> */}
                                                <div className="card-info">
                                                    <Link className="text-24-semibold neutral-1000 text-uppercase" href="#">
                                                        Streaming Virtual Events
                                                    </Link><br className="d-none d-lg-block" />
                                                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                                                </div>
                                            </div>
                                            <div className="card-banner-1 linear-2">
                                                {/* <div className="card-image">
                                                    <img src="/assets/imgs/page/homepage5/manage.svg" alt="Nivia" />
                                                </div> */}
                                                <div className="card-info">
                                                    <Link className="text-24-semibold neutral-1000 text-uppercase" href="#">
                                                        OTT Streaming Solutions
                                                    </Link><br className="d-none d-lg-block" />
                                                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                                                </div>
                                            </div>
                                            <div className="card-banner-1 linear-2">
                                                {/* <div className="card-image">
                                                    <img src="/assets/imgs/page/homepage5/manage.svg" alt="Nivia" />
                                                </div> */}
                                                <div className="card-info"><br className="d-none d-lg-block" />
                                                    <Link className="text-24-semibold neutral-1000 text-uppercase" href="#">
                                                        Playout Solutions
                                                    </Link><br className="d-none d-lg-block" />
                                                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                                                </div>
                                            </div>
                                            <Link className="btn btn-start-trial" href="#">
                                                
                                                Event Registration & Technology
                                                <svg width={76} height={26} viewBox="0 0 76 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M76 12.9998L63.837 0.836914V10.606H0V15.3938H63.837V25.1631L76 12.9998Z" fill="true" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
