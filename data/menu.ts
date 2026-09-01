// =============================================================================
// THE MERC — MENU DATA
// =============================================================================
// IMPORTANT: Do not invent prices or item names.
// The actual menu PDFs are linked via the Linktree.
// This file contains the menu STRUCTURE and CATEGORIES.
// Items without confirmed prices show 'null' for price.
//
// TODO: Replace placeholder items with actual menu data from The Merc's
// official menu PDFs once available.
// =============================================================================

export interface MenuItem {
  id: string
  name: string
  description: string | null
  price: string | null // '$12.00' format or null if unknown
  tags?: string[] // e.g. ['gluten-free', 'vegetarian', 'popular']
  note?: string | null
}

export interface MenuCategory {
  id: string
  name: string
  description: string | null
  pdfUrl: string | null // Link to PDF menu if available
  items: MenuItem[]
}

export interface MenuSection {
  id: string
  name: string
  icon: string // emoji or identifier
  description: string | null
  heroImage: string | null
  categories: MenuCategory[]
}

// ---------------------------------------------------------------------------
// MENU SECTIONS
// Each section maps to a tab/page on /menu
// ---------------------------------------------------------------------------
export const menuSections: MenuSection[] = [
  {
    id: 'pizza',
    name: 'Pizza',
    icon: '🍕',
    description:
      'Award-winning pizza made fresh. Cauliflower crust available.',
    heroImage: '/images/menu-pizza.jpg',
    categories: [
      {
        id: 'pizza-menu',
        name: 'Pizza',
        description: null,
        // TODO: Replace with actual PDF URL from Linktree
        pdfUrl: null,
        items: [
          // TODO: Add real pizza items from The Merc's Pizza Menu PDF
          // Example structure (do not use as real data):
          // { id: 'pizza-1', name: 'House Special', description: '...', price: null },
        ],
      },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    icon: '🍔',
    description: 'Award-winning burgers made from quality ingredients.',
    heroImage: '/images/menu-burgers.jpg',
    categories: [
      {
        id: 'burgers-menu',
        name: 'Burgers',
        description: null,
        // TODO: Replace with actual PDF URL from Linktree
        pdfUrl: null,
        items: [
          // TODO: Add real burger items from The Merc's Burger Menu PDF
        ],
      },
    ],
  },
  {
    id: 'good-eats',
    name: 'Good Eats',
    icon: '🍽️',
    description: 'Starters, sandwiches, and more. Something for everyone.',
    heroImage: '/images/menu-good-eats.jpg',
    categories: [
      {
        id: 'good-eats-menu',
        name: 'Good Eats',
        description: null,
        // TODO: Replace with actual PDF URL from Linktree
        pdfUrl: null,
        items: [
          // TODO: Add real items from The Merc's Good Eats Menu PDF
        ],
      },
    ],
  },
  {
    id: 'coffee',
    name: 'Coffee',
    icon: '☕',
    description:
      'Dakota Joe Coffee Co. served fresh every morning. The coffee bar brings a warm, welcoming vibe to The Merc.',
    heroImage: '/images/merc-interior-sign.jpg',
    categories: [
      {
        id: 'coffee-menu',
        name: 'Dakota Joe Coffee',
        description:
          'Proudly serving Dakota Joe Coffee Co. — locally rooted, richly brewed.',
        // TODO: Replace with actual PDF URL from Linktree
        pdfUrl: null,
        items: [
          // TODO: Add real coffee items from The Merc's Dakota Joe Coffee Menu PDF
        ],
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: '🍺',
    description:
      'Craft beers on tap, cocktails, and a full selection of liquors.',
    heroImage: '/images/menu-drinks.jpg',
    categories: [
      {
        id: 'draft-beer',
        name: 'Draft Beer',
        description: 'Rotating selection of craft and domestic beers.',
        pdfUrl: null,
        items: [
          // Known from Untappd check-ins (not a complete list)
          {
            id: 'beer-lost-cabin',
            name: 'Lost Cabin Beer Co.',
            description: 'Rotating selection from Lost Cabin Beer Co.',
            price: null,
            note: 'Ask your server for current tap selection',
          },
          {
            id: 'beer-prairie',
            name: 'Prairie Artisan Ales',
            description: 'Craft ales from Prairie Artisan Ales.',
            price: null,
            note: null,
          },
          {
            id: 'beer-modist',
            name: 'Modist Brewing Co.',
            description: 'Rotating craft selections from Modist Brewing.',
            price: null,
            note: null,
          },
        ],
      },
      {
        id: 'cocktails',
        name: 'Cocktails',
        description:
          'Handcrafted cocktails made with premium spirits.',
        // TODO: Add cocktail menu PDF if available
        pdfUrl: null,
        items: [
          // TODO: Add real cocktail items
        ],
      },
    ],
  },
]

// Helper: get a menu section by ID
export function getMenuSection(id: string): MenuSection | undefined {
  return menuSections.find((s) => s.id === id)
}

// Menu category cards for the home page feature grid
export const menuFeatures = [
  {
    id: 'pizza',
    title: 'Pizza',
    subtitle: 'Award-Winning',
    description: 'Handcrafted pies with fresh toppings. Cauliflower crust available.',
    image: '/images/menu-pizza.jpg',
    href: '/menu?tab=pizza',
    accentColor: '#C4842A',
  },
  {
    id: 'burgers',
    title: 'Burgers',
    subtitle: 'Built Right',
    description: 'Juicy, award-winning burgers made from quality ingredients.',
    image: '/images/menu-burgers.jpg',
    href: '/menu?tab=burgers',
    accentColor: '#9B3A2E',
  },
  {
    id: 'good-eats',
    title: 'Good Eats',
    subtitle: 'More to Love',
    description: 'Starters, sandwiches, and daily specials worth coming back for.',
    image: '/images/menu-good-eats.jpg',
    href: '/menu?tab=good-eats',
    accentColor: '#5A7A3A',
  },
  {
    id: 'coffee',
    title: 'Coffee',
    subtitle: 'Dakota Joe',
    description: 'Premium coffee from Dakota Joe Coffee Co. served all morning.',
    image: '/images/menu-coffee.jpg',
    href: '/menu?tab=coffee',
    accentColor: '#6B4423',
  },
  {
    id: 'drinks',
    title: 'Drinks',
    subtitle: 'Craft & Cocktails',
    description: 'Rotating craft beers, cocktails, and a full liquor selection.',
    image: '/images/menu-drinks.jpg',
    href: '/menu?tab=drinks',
    accentColor: '#2A5C8A',
  },
]
