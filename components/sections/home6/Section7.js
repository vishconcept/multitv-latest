
import Link from 'next/link'

export default function Section7() {
    return (
        <>

            <section className="section-box box-our-team">
                <div className="container">
                    {/* <div className="text-center">
                        <h2 className="heading-1 mb-85">Run compliant payroll for your<br className="d-none d-lg-block" /> global team
                            in minutes</h2>
                    </div> */}
                    <div className="block-our-team">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card-team-main">
                                    <div className="card-info"><Link className="btn btn-bg-linear-2 mb-20" href="#"><span>
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_40_237)">
                                                <path d="M4.5 1.125C4.5 0.917625 4.33238 0.75 4.125 0.75C3.91762 0.75 3.75 0.917625 3.75 1.125C3.75 3.28575 2.40038 3.372 2.25 3.375H2.24775C2.24737 3.37462 2.24625 3.37462 2.24512 3.375C2.24475 3.375 2.24438 3.375 2.24438 3.375C2.244 3.375 2.24362 3.375 2.24325 3.375C2.03925 3.37875 1.875 3.54525 1.875 3.75C1.875 3.95625 2.04113 4.1235 2.247 4.125C2.403 4.128 3.75 4.2165 3.75 6.375C3.75 6.58238 3.91762 6.75 4.125 6.75C4.33238 6.75 4.5 6.58238 4.5 6.375C4.5 4.2165 5.847 4.128 6.003 4.125H6.00488H6.00562H6.006H6.00675C6.21075 4.12125 6.375 3.95475 6.375 3.75C6.375 3.54375 6.20887 3.3765 6.003 3.375C5.847 3.372 4.5 3.2835 4.5 1.125ZM4.125 4.60312C3.91425 4.20187 3.63863 3.93187 3.3645 3.75C3.63863 3.56813 3.91425 3.29813 4.125 2.89687C4.33575 3.29813 4.61137 3.56813 4.8855 3.75C4.61137 3.93187 4.33575 4.20187 4.125 4.60312Z" fill="true" />
                                                <path d="M20.253 9.375C20.097 9.372 18.75 9.2835 18.75 7.125C18.75 6.91763 18.5824 6.75 18.375 6.75C18.1676 6.75 18 6.91763 18 7.125C18 9.28575 16.6504 9.372 16.5 9.375H16.4977C16.4977 9.375 16.4959 9.375 16.4951 9.375C16.4947 9.375 16.4944 9.375 16.4944 9.375C16.494 9.375 16.4936 9.375 16.4932 9.375C16.2892 9.37875 16.125 9.54525 16.125 9.75C16.125 9.95625 16.2911 10.1235 16.497 10.125C16.653 10.128 18 10.2165 18 12.375C18 12.5824 18.1676 12.75 18.375 12.75C18.5824 12.75 18.75 12.5824 18.75 12.375C18.75 10.2165 20.097 10.128 20.253 10.125H20.2549H20.2556H20.2568C20.4608 10.1212 20.625 9.95475 20.625 9.75C20.625 9.54375 20.4589 9.3765 20.253 9.375ZM18.375 10.6031C18.1642 10.2019 17.8886 9.93187 17.6145 9.75C17.8886 9.56813 18.1642 9.29813 18.375 8.89688C18.5858 9.29813 18.8614 9.56813 19.1355 9.75C18.8614 9.93187 18.5858 10.2019 18.375 10.6031Z" fill="true" />
                                                <path d="M11.7283 7.61822C11.9222 7.61822 12.115 7.54434 12.2597 7.39959L14.8495 4.80984C15.142 4.51772 15.142 4.04147 14.8495 3.74934L14.3192 3.21909C14.0271 2.92697 13.5508 2.92697 13.2587 3.21909L12.8488 3.62897C12.7022 3.77559 12.7022 4.01259 12.8488 4.15922C12.9955 4.30584 13.2325 4.30584 13.3791 4.15922L13.789 3.74934L14.3192 4.27959L11.7295 6.86934L10.2692 5.77434L10.7192 5.17397L11.1385 5.48822C11.434 5.71134 11.8558 5.68172 12.1187 5.41884L12.559 4.97859C12.7056 4.83197 12.7056 4.59497 12.559 4.44834C12.4123 4.30172 12.1753 4.30172 12.0287 4.44834L11.5885 4.88859L11.1692 4.57434C11.0087 4.45397 10.8122 4.40334 10.6131 4.43184C10.4151 4.46034 10.2396 4.56459 10.12 4.72397L9.67033 5.32359C9.54996 5.48409 9.49896 5.68134 9.52708 5.87934C9.55521 6.07772 9.65946 6.25359 9.81958 6.37359L11.2798 7.46897C11.4126 7.56947 11.5705 7.61822 11.7283 7.61822Z" fill="true" />
                                                <path d="M23.625 18.375H20.25V13.875C20.25 13.6676 20.0824 13.5 19.875 13.5H15.375V9C15.375 8.79263 15.2074 8.625 15 8.625H14.5061C15.846 6.61425 16.3215 4.44975 16.4899 3.14813C16.5334 2.811 16.437 2.48137 16.2188 2.21925C15.99 1.94513 15.6484 1.77675 15.2816 1.75762C14.7004 1.72762 13.8266 1.476 12.966 0.448125C12.7275 0.1635 12.3754 0 12 0C11.6246 0 11.2725 0.1635 11.0336 0.44775V0.448125C10.173 1.47563 9.29925 1.72725 8.718 1.75725C8.35087 1.77675 8.00963 1.94475 7.78088 2.21887C7.56263 2.48062 7.46625 2.81025 7.50975 3.14775C7.67812 4.44938 8.154 6.61388 9.49387 8.62463H9C8.79263 8.62463 8.625 8.79225 8.625 8.99963V13.4996H6.91462C7.206 12.7943 7.79025 12.7519 7.87875 12.7496H7.87988C7.87988 12.7496 7.88025 12.7496 7.88062 12.7496H7.881C8.08537 12.7466 8.25 12.5801 8.25 12.375C8.25 12.1691 8.08425 12.0019 7.87875 12C7.76025 11.997 6.75 11.9235 6.75 10.275C6.75 10.0676 6.58238 9.9 6.375 9.9C6.16762 9.9 6 10.0676 6 10.275C6 11.9257 4.98637 11.9974 4.875 12H4.87387H4.87275C4.87275 12 4.872 12 4.87125 12C4.87087 12 4.8705 12 4.87013 12C4.86975 12 4.86975 12 4.86937 12C4.665 12.0034 4.5 12.1699 4.5 12.375C4.5 12.5809 4.66575 12.7481 4.87125 12.75C4.95937 12.7522 5.544 12.7946 5.83537 13.5H4.125C3.91762 13.5 3.75 13.6676 3.75 13.875V18.375H0.375C0.167625 18.375 0 18.5426 0 18.75V23.625C0 23.8324 0.167625 24 0.375 24H23.625C23.8324 24 24 23.8324 24 23.625V18.75C24 18.5426 23.8324 18.375 23.625 18.375ZM8.35687 2.69925C8.45212 2.58487 8.598 2.51475 8.75663 2.5065C9.48675 2.46825 10.5746 2.16412 11.6081 0.92925V0.929625C11.7994 0.70125 12.1999 0.701625 12.3911 0.92925C13.425 2.16412 14.5125 2.46825 15.2426 2.5065C15.4016 2.51437 15.5471 2.58487 15.6424 2.69925C15.7009 2.76975 15.7665 2.88825 15.7451 3.05175C15.5344 4.6845 14.8129 7.7565 12.3555 9.98887C12.1556 10.1704 11.8425 10.1704 11.6434 9.98887C9.18563 7.7565 8.46413 4.68412 8.25338 3.05175C8.23275 2.88825 8.29838 2.77012 8.35687 2.69925ZM6.375 11.8466C6.51525 12.0761 6.68213 12.2471 6.85275 12.375C6.68213 12.5029 6.51525 12.6739 6.375 12.9034C6.23475 12.6739 6.06787 12.5029 5.89725 12.375C6.06787 12.2471 6.23475 12.0761 6.375 11.8466ZM0.75 19.125H3.75V23.25H0.75V19.125ZM4.5 14.25H5.99137C5.99587 14.3224 6 14.3951 6 14.475C6 14.6824 6.16762 14.85 6.375 14.85C6.58238 14.85 6.75 14.6824 6.75 14.475C6.75 14.3955 6.75413 14.3228 6.75863 14.25H8.625V23.25H4.5V14.25ZM9.375 9.375H10.0481C10.3721 9.77925 10.731 10.173 11.1397 10.5443C11.3809 10.7633 11.6906 10.8727 12 10.8727C12.3094 10.8727 12.6191 10.7633 12.8606 10.5443C13.2694 10.173 13.6283 9.77925 13.9523 9.375H14.625V18.9251C14.625 19.1325 14.7926 19.3001 15 19.3001C15.2074 19.3001 15.375 19.1325 15.375 18.9251V14.25H19.5V23.25H15.375V20.6775C15.375 20.4701 15.2074 20.3025 15 20.3025C14.7926 20.3025 14.625 20.4701 14.625 20.6775V23.25H9.375V9.375ZM23.25 23.25H20.25V19.125H23.25V23.25Z" fill="true" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_40_237">
                                                    <rect width={24} height={24} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></span> Our Features</Link><Link href="#">
                                            {/* <h2 className="heading-2 mb-20">Revolutionizing Global Storytelling & Business Growth with </h2> */}
                                        </Link>
                                        <p className="text-xl mb-10">Revolutionizing Global Storytelling & Business Growth with Innovative Video Technology Since 2015</p>
                                        <p className="text-md mb-40">Since 2015, MultiTV has harnessed video's power to bring unique stories to life, connecting and captivating audiences worldwide. With a growing presence in Southeast Asia, America, and the UK, we're your trusted partner in transcending borders through the art of video storytelling. Choose MultiTV, your partner in making a global impact.</p>
                                    </div>
                                    <div className="card-image"><Link href="#"><img src="/assets/imgs/page/homepage6/b1.webp" alt="Nivia" /></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-7 mb-40">
                            <div className="box-padding-left-50">
                                <div className="strate-icon"><span /> Leaders' Choice in Video Tech</div>
                                {/* <h2 className="heading-2 mb-20">Track the progress towards objectives with key results</h2> */}
                                <p className="text-lg neutral-700">Empowering unparalleled storytelling and audience engagement with cutting-edge video technology.</p>
                                <div className="row mt-50">
                                    <div className="col-lg-6 col-sm-6 ">
                                        <div className="card-feature-2 ">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/tesstlogo.jpg" alt="Nivia" /></div>
                                            <div className="card-info">
                                                <p className="text-md neutral-700">I have worked with MultiTV on ‘N’ number of webcast projects till now it has been great working with Team MultiTV, as they take complete ownership of the project that they do and they are really experts of their domain and that’s their USP as well.</p>
                                                <h3 className="text-sm">Dhurv Tuteja(JK Tyre)</h3>
                                                <h5 className="text-xssm">Manager Digital Marketing JK Tyres</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/samsunglogos.webp" /></div>
                                            <div className="card-info">
                                                <p className="text-md neutral-700">Thanks for your efforts on the F62 launch. It was executed very well, from the production to simulcast on multiple platforms. It is great to have MultiTV with us. I look forward to more opportunities of working together.</p>
                                                <h3 className="text-sm">Ram Deshpande</h3>
                                                <h5 className="text-xssm">Vice-President, Digital Samsung</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/appollo.png" /></div>
                                            <div className="card-info">
                                                <p className="text-md neutral-700 ">As Apollo 2417, we have been associated with Multi- TV, doing our online property/show "Health Hour". The service and technical support received from Multi-TV is exceptional.</p>
                                                <h3 className="text-sm">Kushagr Sharma</h3>
                                                <h5 className="text-xssm">Marketing Manager Apollo24|7</h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Weekly Email Reports</h3>
                                            </Link>
                                                <p className="text-md neutral-700">Decoding User Behavior: The Art of Engagement
                                                    Analysis</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
