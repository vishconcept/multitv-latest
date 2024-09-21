'use client'
import Marquee from 'react-fast-marquee'

export default function LogoTicker() {
    return (
        <>
         <div className="text-center">
                        <h6 className="display-6 mb-50">Leading brands that trust MultiTV</h6>
                    </div>
                <Marquee
                    style={{ width: "auto" }}
                    pauseOnHover={true}
                    direction="left" className="carouselTicker__list list-logos">
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/bajajalliazlogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/bmwlogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/fancodelogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/mercedies-benzlogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/relianceindustrieslogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/samsunglogos.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/sonylivlogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/tata-logo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/vodafonelogo.webp" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/zee5logo.webp" alt="Nivia" /></div>
                    </li>
                </Marquee>
        </>
    )
}
