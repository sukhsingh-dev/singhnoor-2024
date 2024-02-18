import Link from "next/link"
import { Heading, TextDecorator } from "@/shared/components/ui"
import { categories } from "@/shared/helper/store"
import Image from "next/image"
import './style.sass'

const Categories: React.FC = (): React.ReactNode => (
  <section>
    <Heading text="CATEGORIES" />
    <ul className="categories-list">
      {
        categories.map((cat) => (
          <li className="text-center aos" key={cat.url}>
            <div className="bg-decorator mx-auto" style={{ backgroundColor: cat.backColor }} />
            <Image
              src={`/images/${cat.imgName}`}
              alt={cat.name}
              width={171}
              height={171}
              className="object-contain"
              quality={100}
            />
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
