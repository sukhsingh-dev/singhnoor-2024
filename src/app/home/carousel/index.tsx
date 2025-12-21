import Image from "next/image"
import Link from "next/link"
import Icon from "@/shared/components/Icon"
import Script from "next/script"
import "./carousel.sass"

const Carousel: React.FC = async () => {

    return (
        <>
            <div className="sn-carousel">
                <div className="sn-carousel--list">
                    <SlideData slideClass="active" slideNumber="1" url="/shop?filters=true&category=Leather%20Gatra,Fabric%20Gatra" />
                    <SlideData slideClass="next" slideNumber="2" url="/shop?filters=true&subCategory=T-shirts" />
                    <SlideData slideClass="prev" slideNumber="3" url="/shop?filters=true&category=Leather%20Craft" />
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

const SlideData = ({ slideClass, slideNumber, url }: { slideClass: string, slideNumber: string, url: string }) => {
    return (
        <div className={`sn-carousel--item ${slideClass}`}>
            <Link href={url}>
                <picture>
                    <source
                        media="(min-width: 750px)"
                        srcSet={`/images/carousel/slide-desktop-${slideNumber}.webp`}
                    />
                    <Image
                        className="sn-carousel--image"
                        alt="Slide image"
                        width={1510}
                        height={514}
                        src={`/images/carousel/slide-mobile-${slideNumber}.webp`}
                    />
                </picture>
            </Link>
        </div>
    )
}

export default Carousel