import { type CategoryType } from "@/shared/helper/types"
import { Heading, TextDecorator } from "@/shared/components/ui"
import Link from "next/link"
import Image from "next/image"
import './categories.sass'

const Categories: React.FC = async () => {
  const res = await fetch(`${process.env.BACKOFFICE_URL}/categories`)
  const categories = await res.json()

  return (
    <section>
      <Heading text="CATEGORIES" />
      <ul className="categories-list">
        {
          categories.map((category: CategoryType) => (
            <li key={category._id}>
              <Link href={`/shop?filters=true&category=${category.categoryName}`} className="category-item-link">
                <div className="bg-decorator mx-auto" style={{ backgroundColor: category.categoryBg }} />
                <Image
                  src={category.categoryImg}
                  alt={`Image of category ${category.categoryName} ${category._id}`}
                  width={171}
                  height={171}
                  className="object-contain"
                  quality={100}
                />
                <div className="cat-link">
                  {category.categoryName}
                  <TextDecorator color={category.categoryBg} />
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Categories
