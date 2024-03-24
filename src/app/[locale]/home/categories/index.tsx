import { Heading, TextDecorator } from "@/shared/components/ui"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import './categories.sass'

interface CategoryType {
  _id: string
  categoryName: string
  categoryBg: string
  categoryImg: string
}

const Categories: React.FC = async () => {
  const t = useTranslations("Index")
  const lang = useLocale()
  const res = await fetch(`${process.env.BACKOFFICE_URL}/categories`)
  const categories = await res.json()

  return (
    <section>
      <Heading text={t('categories')} />
      <ul className="categories-list">
        {
          categories.map((category: CategoryType) => (
            <li className="aos" key={category._id}>
              <Link href={`${lang}/shop?category=${category._id}`} className="category-item-link">
                <div className="bg-decorator mx-auto" style={{ backgroundColor: category.categoryBg }} />
                <Image
                  src={category.categoryImg}
                  alt={category.categoryName}
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
