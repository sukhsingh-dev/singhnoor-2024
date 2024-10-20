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
    price: 1499,
    img: 'deals/deal-3.webp',
    linkURL: '/'
  },
  {
    price: 1999,
    img: 'deals/deal-4.webp',
    linkURL: '/'
  },
  {
    price: 2499,
    img: 'deals/deal-1.webp',
    linkURL: '/'
  },
  {
    price: 2999,
    img: 'deals/deal-1.webp',
    linkURL: '/'
  }
]

interface innerLinks {
  id: number
  name: string
  url: string
}
export const popularLinks: innerLinks[] = [
  {
    id: 0,
    name: 'Men',
    url: 'men'
  },
  {
    id: 1,
    name: 'Women',
    url: 'women'
  },
  {
    id: 2,
    name: 'Kids',
    url: 'kids'
  },
  {
    id: 3,
    name: 'Bags',
    url: 'bags'
  },
  {
    id: 4,
    name: 'Belts',
    url: 'belts'
  },
  {
    id: 5,
    name: 'Gatras',
    url: 'gatras'
  },
  {
    id: 6,
    name: 'Accessories',
    url: 'accessories'
  }
]

export const usefulLink: innerLinks[] = [
  {
    id: 0,
    name: 'About Us',
    url: 'about'
  },
  {
    id: 1,
    name: 'Brands',
    url: 'brands'
  },
  {
    id: 2,
    name: 'Return Policy',
    url: 'returns'
  }
]
