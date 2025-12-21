import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import Script from "next/script"
import "./carousel.sass"

const Carousel: React.FC = async () => {
    const res = await fetch(`${process.env.BACKOFFICE_URL}/carousel`)
    const carousel = await res.json()

    return (
        <>
            <div className="sn-carousel">
                <div className="sn-carousel--list">
                    {carousel.map((slide: any, index: number) => (
                        <div
                            className={`sn-carousel--item ${index === 0 ? 'active' : index === 1 ? 'next' : 'prev '}`}
                            key={slide._id}>
                            <Link href="/">
                                <picture>
                                    <source
                                        media="(min-width: 750px)"
                                        srcSet={slide.productImagesArray[1]}
                                    />
                                    <Image
                                        className="sn-carousel--image"
                                        src={slide.productImagesArray[0]}
                                        alt="Slide image"
                                        width={1510}
                                        height={514}
                                    />
                                </picture>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="sn-carousel--arrows">
                    <button type="button" aria-label="Go to previous slide" className="sn-carousel--arrow prev">
                        <Icon name="chevron-left" />
                    </button>
                    <button type="button" aria-label="Go to next slide" className="sn-carousel--arrow next">
                        <Icon name="chevron-right" />
                    </button>
                </div>
            </div>
            <Script src="/js/carousel.js" />
        </>
    )
}

export default Carousel