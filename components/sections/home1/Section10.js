'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Section10() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <section className="section-box box-faqs">
                <div className="container">
                    <div className="text-center mb-70">
                        <h3 className="heading-2 mb-20">Frequently Asked Questions</h3>
                        <p className="text-md neutral-700">Find answers to common questions in our comprehensive FAQ section,<br className="d-none d-lg-block" /> providing clarity and support for your crypto journey</p>
                    </div>
                    <div className="box-2-col-faqs">
                        <div className="faqs-col">
                            <div className="accordion accordion-flush" id="accordionFAQS">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What are the key benefits of using an enterprise live-streaming platform?</button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p>An enterprise live streaming platform allows you to deliver high-quality, real-time video content to a global audience, ensuring your message reaches employees, stakeholders, and customers effectively. These platforms provide secure, low-latency streaming with features like real-time interaction tools, which enhance audience engagement during live events. Additionally, they integrate seamlessly with your existing enterprise systems, ensuring a smooth experience across all devices. With robust analytics, enterprises can track viewer engagement, measure event success, and optimize future events for better outcomes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">How can event technology enhance the experience of enterprise AGMs?</button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Event technology enhances the experience of enterprise AGMs by providing tools for live streaming, real-time voting, and secure document sharing, ensuring that all stakeholders can participate fully, regardless of location. It also supports hybrid formats, allowing in-person and virtual attendees to engage meaningfully with the event. Detailed analytics provide insights into attendee engagement and voting results, helping enterprises assess the AGM’s success. By integrating these technologies, enterprises can ensure that AGMs are transparent, inclusive, and efficient.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Why is MultiTV the ideal choice for enterprise event technology?</button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">MultiTV is the ideal choice for enterprise event technology because it offers a comprehensive suite of solutions tailored to the unique needs of large organizations. Our platforms are designed to enhance engagement, security, and scalability, ensuring that corporate events run smoothly and effectively. We provide end-to-end support, from planning and execution to post-event analysis, helping enterprises achieve their goals. With a strong track record of working with leading global brands, MultiTV is a trusted partner for delivering impactful and secure events.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faqs-col">
                            <div className="accordion accordion-flush" id="accordionFAQS2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne2" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">How does an OTT platform support enterprise content distribution?</button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne2" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS2">
                                        <div className="accordion-body">
                                            <p>An OTT platform enables enterprises to distribute video content directly to their target audience without relying on traditional broadcasting channels. This platform offers flexibility in monetization through subscriptions, pay-per-view, or ad-supported models, making it suitable for various enterprise needs. With the ability to deliver live and on-demand content, the platform enhances internal communication, training programs, and customer engagement. Detailed analytics and secure content delivery further empower enterprises to tailor content strategies and ensure data protection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo2" onClick={() => handleClick(5)}>
                                        <button className={isActive.key == 5 ? "accordion-button " : "accordion-button collapsed"}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">Why is event technology crucial for enterprise-level events?</button>
                                    </h2>
                                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo2" aria-labelledby="flush-headingTwo2" data-bs-parent="#accordionFAQS2">
                                        <div className="accordion-body">Event technology is vital for managing and executing enterprise-level events, whether AGMs, product launches, or training sessions. It provides tools for seamless event registration, attendee management, and real-time engagement, ensuring that every aspect of the event is well-coordinated. This technology also supports hybrid and virtual formats, allowing enterprises to reach a broader audience while maintaining a high level of interaction and engagement. Additionally, it offers post-event analytics, helping enterprises assess the event’s impact and improve future strategies.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree2" onClick={() => handleClick(6)}>
                                        <button className={isActive.key == 6 ? "accordion-button " : "accordion-button collapsed"}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">How does event technology improve R&R events in enterprises?</button>
                                    </h2>
                                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree2" aria-labelledby="flush-headingThree2" data-bs-parent="#accordionFAQS2">
                                        <div className="accordion-body">Event technology enhances R&R events by providing interactive features that make recognition and rewards more engaging and meaningful for employees. It supports live streaming, social media integration, and real-time feedback, creating a dynamic and inclusive event environment. Detailed analytics help measure the event’s impact and gather employee feedback, ensuring that future R&R initiatives succeed even more. This technology fosters a positive company culture by celebrating achievements in a way that resonates with employees.</div>
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
