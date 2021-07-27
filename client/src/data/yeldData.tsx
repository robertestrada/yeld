const yeldData = {
  landingPage: {
    logoUrl: "https://yeld.s3.us-west-2.amazonaws.com/yeld_blk-01.png",
    searchBar: {
      termLabel: "Find",
      termPlaceholder: "claw salons, toilet engineers, carryout...",
      locationPlaceholder: "address, neighborhood, city, state or zip",
      locationLabel: "Near",
      initialSuggestions: [
        "Restaurants",
        "Delivery",
        "Takeout",
        "Accountants",
        "Plumbers",
        "Auto Repair",
      ],
    },
    bannerData: {
      creditText: "Captured by",
      bannerBaseUrl: "https://yeld.s3.us-west-2.amazonaws.com/homepage/banners/",
      bannerExtension: '.jpg',
      banners: [
        { title: "The Market", owner: "Jacqueline M.", id: 1 },
        { title: "Hanami Sushi", owner: "Kevin P.", id: 2 },
        { title: "Lineage Coffee Roasting", owner: "Kerry H.", id: 3 },
        { title: "Tatte Bakery & Cafe", owner: "Sophie P.", id: 4 },
        { title: "Tasty Wok", owner: "Trung N.", id: 5 },
        { title: "Cheshire", owner: "Natalia K.", id: 6 },
        { title: "Ms Cheezious", owner: "Stephanie P.", id: 7 },
        { title: "Aixois", owner: "Elaine D.", id: 8 },
      ],
    },
    hotAndNew: {
      sectionLabel: "Hot & New Businesses",
    },
    browseCategories: {
      sectionLabel: "Browse Businesses by Category",
      categoryBaseUrl: "https://yeld.s3.us-west-2.amazonaws.com/homepage/categories/",
      categoryExtension: '.png',
      categories: [
        { label: "Restaurants", id: 1},
        { label: "Shopping", id: 2},
        { label: "Nightlife", id: 3},
        { label: "Active Life", id: 4 },
        { label: "Beauty & Spas", id: 5 },
        { label: "Automotive", id: 6 },
        { label: "Home Services", id: 7 },
        { label: "More Categories", id: 8 },
      ]
    },
  },
}

export default yeldData;