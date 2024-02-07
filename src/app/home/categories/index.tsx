import Link from "next/link"
import { Heading } from "@/shared/components/ui"
import { categories } from "@/shared/helper/store"
import Image from "next/image"
import './style.sass'

interface textDecorator {
  color: string
}

export const TextDecorator: React.FC<textDecorator> = ({ color }: textDecorator) => (
  <svg width={100} height={10} viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.59139C0 1.41818 1.00517 0.496933 2.17394 0.598968L62.8457 5.89571C62.9484 5.90468 63.0517 5.90569 63.1545 5.89874L97.8652 3.55342C99.0202 3.47538 100 4.39124 100 5.54888V6.43372C100 7.52866 99.1195 8.42005 98.0247 8.43357L19 9.40918H2C0.895431 9.40918 0 8.51375 0 7.40918V2.59139Z" fill={color} />
  </svg>
)

const Categories: React.FC = (): React.ReactNode => (
  <section>
    <Heading text="CATEGORIES" />
    <ul className="categories-list">
      {
        categories.map((cat) => (
          <li className="text-center aos" key={cat.url}>
            <div className="bg-decorator mx-auto" style={{ backgroundColor: cat.backColor }} />
            <Image src={`/images/${cat.imgName}`} loading="lazy" alt={cat.name} width={171} height={171} className="object-contain" />
            <Link href={cat.url} className="cat-link">
              {cat.name}
              <TextDecorator color={cat.backColor} />
            </Link>
          </li>
        ))
      }
    </ul>
  </section>
)

export default Categories
