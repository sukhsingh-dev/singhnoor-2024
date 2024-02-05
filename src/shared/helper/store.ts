interface Subcategory {
  name: string
  link: string
}

interface Menu {
  category: string
  subcategories: Subcategory[]
}

export const menuList: Menu[] = [
  {
    category: 'Men',
    subcategories: [
      {
        name: 'Gataras',
        link: 'gataras'
      },
      {
        name: 'Belts',
        link: 'belts'
      },
      {
        name: 'Shasters',
        link: 'shasters'
      },
      {
        name: 'T-shirts',
        link: 't-shirts'
      },
      {
        name: 'Leather bags',
        link: 'leather-bags'
      },
      {
        name: 'Karahas',
        link: 'karahas'
      }
    ]
  },
  {
    category: 'Women',
    subcategories: [
      {
        name: 'Gataras',
        link: 'gataras'
      },
      {
        name: 'Shasters',
        link: 'shasters'
      },
      {
        name: 'T-shirts',
        link: 't-shirts'
      },
      {
        name: 'Hand bags',
        link: 'hand-bags'
      },
      {
        name: 'Karahas',
        link: 'karahas'
      }
    ]
  },
  {
    category: 'Kids',
    subcategories: [
      {
        name: 'Gataras',
        link: 'gataras'
      },
      {
        name: 'Shasters',
        link: 'shasters'
      },
      {
        name: 'T-shirts',
        link: 't-shirts'
      },
      {
        name: 'Karahas',
        link: 'karahas'
      }
    ]
  },
  {
    category: 'Accessories',
    subcategories: [
      {
        name: 'Soor dand',
        link: 'soor-dand'
      },
      {
        name: 'Chand Toras',
        link: 'chand-toras'
      }
    ]
  }
]

interface Category {
  name: string
  imgName: string
  backColor: string
  url: string
}

export const categories: Category[] = [
  {
    name: "Gataras",
    imgName: "gataras.webp",
    backColor: "#FEC4CC",
    url: "/gataras"
  },
  {
    name: "T-Shirts",
    imgName: "t-shirts/t-shirts.webp",
    backColor: "#AEE6EC",
    url: "/t-shirt"
  },
  {
    name: "Chand Toras",
    imgName: "chand-toras.webp",
    backColor: "#FAEBC5",
    url: "/chand-toras"
  },
  {
    name: "Customize Shasters",
    imgName: "shasters.webp",
    backColor: "#e0ecae",
    url: "/shasters"
  },
  {
    name: "Customize Leather Belts",
    imgName: "belts.webp",
    backColor: "#AEE6EC",
    url: "/belts"
  },
  {
    name: "Leather Bags",
    imgName: "bags.webp",
    backColor: "#BFD4ED",
    url: "/bags"
  }
]

interface Deal {
  price: number
  img: string
  linkURL: string
}

export const dealsList: Deal[] = [
  {
    price: 499,
    img: 'deals/deal-1.webp',
    linkURL: '/'
  },
  {
    price: 999,
    img: 'deals/deal-2.webp',
    linkURL: '/'
  },
  {
    price: 1999,
    img: 'deals/deal-3.webp',
    linkURL: '/'
  },
  {
    price: 2999,
    img: 'deals/deal-4.webp',
    linkURL: '/'
  },
  {
    price: 4999,
    img: 'deals/deal-1.webp',
    linkURL: '/'
  }
]

type ProductVariety = Record<string, string>

interface Product {
  id: string
  name: string
  imgUrl: string
  bgColor: string
  oldPrice: number
  price: number
  varieties: ProductVariety[]
}

export const productList: Product[] = [
  {
    id: '1',
    name: "Panda Hoodie",
    imgUrl: 'hoodies/panda.webp',
    bgColor: '#d6f0e4',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  },
  {
    id: '2',
    name: "Leather Gataras",
    imgUrl: 'g1.webp',
    bgColor: '#f0d6d6',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  },
  {
    id: '3',
    name: "Shasters Set",
    imgUrl: 's1.webp',
    bgColor: '#d6e4f0',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  },
  {
    id: '4',
    name: "Punjab T-shirt",
    imgUrl: 't-shirts/t1.webp',
    bgColor: '#f0e7d6',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  }
]

export const productList2: Product[] = [
  {
    id: '1',
    name: "Fighter Singh",
    imgUrl: 't-shirts/t-4.webp',
    bgColor: '#AEE6EC',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  },
  {
    id: '2',
    name: "AK 47 Nihang",
    imgUrl: 't-shirts/t-5.webp',
    bgColor: '#F4D890',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  },
  {
    id: '3',
    name: "Sardar Couple",
    imgUrl: 't-shirts/t-6.webp',
    bgColor: '#E698A3',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  },
  {
    id: '4',
    name: "Nihang Life",
    imgUrl: 't-shirts/t-2.webp',
    bgColor: '#B8BDD1',
    oldPrice: 699,
    price: 499,
    varieties: [
      { colors: "2" },
      { sizes: "4" }
    ]
  }
]
