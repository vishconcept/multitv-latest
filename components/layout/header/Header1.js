import Link from 'next/link'
import SearchForm from './SearchForm'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`}>
                {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left"><span className="address-icon text-md">9207 Lakeshore RdShreveport</span>
                                </div>
                                <div className="box-top-bar-right"><a className="phone-icon text-md" href="tel:(262) 555-0131">(262)
                                    555-0131</a><a className="email-icon text-md" href="mailto:contact@nivia.com">contact@nivia.com</a></div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img alt="Nivia" src={`/assets/imgs/template/logo.svg`} />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/">Home</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link href="/">Business Solutions</Link></li>
                                                <li><Link href="/index-2">Marketing App</Link></li>
                                                <li><Link href="/index-3">Web Agency</Link></li>
                                                <li><Link href="/index-4">Digital Agency</Link></li>
                                                <li><Link href="/index-5">3D Products</Link></li>
                                                <li><Link href="/">AI Platform</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="has-children"><Link href="/">About</Link></li>
                                        <li className="has-children"><Link href="/">Services</Link></li>
                                      {/*   <li className="mega-li has-children"><Link href="#">Pages</Link>
                                            <div className="mega-menu">
                                                <div className="mega-menu-inner">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-3">
                                                                    <h6>Home</h6>
                                                                    <ul>
                                                                        <li><Link href="/">Business Solutions</Link></li>
                                                                        <li><Link href="/index-2">Marketing App</Link></li>
                                                                        <li><Link href="/index-3">Web Agency</Link></li>
                                                                        <li><Link href="/index-4">Digital Agency</Link></li>
                                                                        <li><Link href="/index-5">3D Products</Link></li>
                                                                        <li><Link href="/">AI Platform</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h6>Pages</h6>
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <ul>
                                                                                <li><Link href="/about">About Us</Link></li>
                                                                                <li><Link href="/service">Services</Link></li>
                                                                                <li><Link href="/integration">Integrations</Link>
                                                                                </li>
                                                                                <li><Link href="/pricing">Pricing Plan</Link></li>
                                                                                <li><Link href="/help">Help Center</Link></li>
                                                                                <li><Link href="/careers">Careers</Link></li>
                                                                                <li><Link href="/job-detail">Job details</Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <ul>
                                                                                <li><Link href="/blog">Blog V1</Link></li>
                                                                                <li><Link href="/blog-2">Blog V2</Link></li>
                                                                                <li><Link href="/blog-post">Blog post</Link></li>
                                                                                <li><Link href="/feature">Features V1</Link></li>
                                                                                <li><Link href="/feature-2">Features V2</Link>
                                                                                </li>
                                                                                <li><Link href="/feature-3">Features V3</Link>
                                                                                </li>
                                                                                <li><Link href="/contact">Contact us</Link></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <h6>Utility pages</h6>
                                                                    <ul>
                                                                        <li><Link href="/register">Register</Link></li>
                                                                        <li><Link href="/login">Sign In</Link></li>
                                                                        <li><Link href="/forget-password">Forgot password</Link>
                                                                        </li>
                                                                        <li><Link href="/term-conditions">Terms
                                                                            conditions</Link></li>
                                                                        <li><Link href="/404">404 Not found</Link></li>
                                                                        <li><Link href="/change-log">Change log</Link></li>
                                                                        <li><Link href="/comming-soon">Comming soon</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="box-desc-menu">
                                                                <h6 className="text-16-semibold">Nivia - Modern  Multipurpose
                                                                    Template</h6>
                                                                <p className="text-xs mt-10 mb-25">bootstrap 5, business, corporate,
                                                                    creative, gulp, marketing, minimal, modern, pug, sass...</p>
                                                                <Link className="btn btn-black-md btn-rounded" href="#">Get It Now
                                                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="true" />
                                                                    </svg></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </li> */}
                                        {/* <li className="has-children"><Link href="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/blog">Blog V1</Link></li>
                                                <li><Link href="/blog-2">Blog V2</Link></li>
                                                <li><Link href="/blog-post">Blog post</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="has-children"><Link href="/">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <SearchForm />
                            <Link className="btn btn-brand-4-medium hover-up" href="#">Get Started
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true">
                                    </path>
                                </svg>
                            </Link>
                            <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
