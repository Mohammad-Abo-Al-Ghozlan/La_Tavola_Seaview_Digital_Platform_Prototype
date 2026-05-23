export type MenuTag = 'popular' | 'chefs-choice' | 'new' | 'vegetarian' | 'spicy';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  tags?: MenuTag[];
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        id: 's1',
        name: 'Burrata & Heirloom Tomatoes',
        description: 'Creamy imported burrata, slow-roasted heirloom tomatoes, basil oil, sea salt',
        price: '$14',
        tags: ['popular', 'vegetarian'],
      },
      {
        id: 's2',
        name: 'Grilled Octopus',
        description: 'Mediterranean octopus, charred lemon, olive tapenade, smoked paprika aioli',
        price: '$18',
        tags: ['chefs-choice'],
      },
      {
        id: 's3',
        name: 'Mezze Board',
        description: 'Hummus, baba ghanoush, labneh, warm pita, pickles — a nod to the Levant',
        price: '$16',
        tags: ['popular'],
      },
      {
        id: 's4',
        name: 'Tuna Tartare',
        description: 'Fresh tuna, avocado, ginger, sesame, cucumber, ponzu dressing',
        price: '$19',
        tags: ['chefs-choice'],
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    items: [
      {
        id: 'p1',
        name: 'Spaghetti alle Vongole',
        description: 'Fresh clams, white wine, garlic, chili, parsley — coastal Italy in a bowl',
        price: '$22',
        tags: ['popular'],
      },
      {
        id: 'p2',
        name: 'Rigatoni alla Norma',
        description: 'San Marzano tomato, fried eggplant, salted ricotta, fresh basil',
        price: '$18',
        tags: ['vegetarian', 'chefs-choice'],
      },
      {
        id: 'p3',
        name: 'Tagliatelle al Tartufo',
        description: 'Hand-cut egg pasta, black truffle, parmesan cream, toasted hazelnuts',
        price: '$28',
        tags: ['chefs-choice'],
      },
      {
        id: 'p4',
        name: 'Penne Arrabbiata',
        description: 'San Marzano tomato, garlic, fresh chilies, aged parmesan',
        price: '$16',
        tags: ['spicy', 'vegetarian'],
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    items: [
      {
        id: 'pz1',
        name: 'Margherita DOP',
        description: 'San Marzano DOP, fior di latte mozzarella, fresh basil, extra virgin olive oil',
        price: '$18',
        tags: ['popular', 'vegetarian'],
      },
      {
        id: 'pz2',
        name: 'Diavola',
        description: 'Spicy Calabrian salami, mozzarella, chili oil, honey drizzle',
        price: '$21',
        tags: ['popular', 'spicy'],
      },
      {
        id: 'pz3',
        name: 'Prosciutto & Rucola',
        description: 'San Daniele prosciutto, wild rocket, shaved parmesan, cherry tomatoes',
        price: '$24',
        tags: ['chefs-choice'],
      },
      {
        id: 'pz4',
        name: 'Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, taleggio, parmesan, truffle honey',
        price: '$22',
        tags: ['popular'],
      },
    ],
  },
  {
    id: 'seafood',
    label: 'Seafood',
    items: [
      {
        id: 'sf1',
        name: 'Grilled Sea Bass',
        description: 'Whole Mediterranean sea bass, lemon herb butter, roasted fennel, capers',
        price: '$34',
        tags: ['popular', 'chefs-choice'],
      },
      {
        id: 'sf2',
        name: 'Prawns Provençale',
        description: 'Tiger prawns, tomato, white wine, garlic, herbs, crusty bread',
        price: '$29',
        tags: ['popular'],
      },
      {
        id: 'sf3',
        name: 'Linguine allo Scoglio',
        description: 'Mixed shellfish, lobster bisque reduction, cherry tomatoes, fresh herbs',
        price: '$36',
        tags: ['chefs-choice'],
      },
      {
        id: 'sf4',
        name: 'Grilled Calamari',
        description: 'Whole calamari, herb marinade, charred lemon, arugula salad',
        price: '$26',
        tags: ['popular'],
      },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    items: [
      {
        id: 'm1',
        name: 'Bistecca Fiorentina',
        description: 'T-bone steak (600g), rosemary, garlic, truffle butter, roasted potatoes',
        price: '$52',
        tags: ['chefs-choice'],
      },
      {
        id: 'm2',
        name: 'Lamb Chops Scottadito',
        description: 'Grilled lamb chops, mint gremolata, roasted vegetables, jus',
        price: '$38',
        tags: ['popular'],
      },
      {
        id: 'm3',
        name: 'Chicken Milanese',
        description: 'Crispy breadcrumb chicken, arugula, parmesan, cherry tomato, lemon',
        price: '$24',
        tags: ['popular'],
      },
      {
        id: 'm4',
        name: 'Eggplant Parmigiana',
        description: 'Layers of fried eggplant, San Marzano tomato, mozzarella, basil',
        price: '$20',
        tags: ['vegetarian'],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        id: 'd1',
        name: 'Tiramisu della Casa',
        description: 'Our signature tiramisu — espresso-soaked savoiardi, mascarpone, cocoa',
        price: '$10',
        tags: ['popular'],
      },
      {
        id: 'd2',
        name: 'Panna Cotta',
        description: 'Vanilla bean panna cotta, wild berry coulis, mint',
        price: '$9',
        tags: ['popular'],
      },
      {
        id: 'd3',
        name: 'Molten Chocolate Cake',
        description: 'Warm dark chocolate fondant, salted caramel, vanilla gelato',
        price: '$12',
        tags: ['chefs-choice'],
      },
      {
        id: 'd4',
        name: 'Seasonal Gelato',
        description: 'Three scoops of house-made gelato, crispy waffle cone',
        price: '$8',
        tags: [],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        id: 'dr1',
        name: 'Aperol Spritz',
        description: 'Aperol, Prosecco, soda, orange slice — the Italian aperitivo',
        price: '$12',
        tags: ['popular'],
      },
      {
        id: 'dr2',
        name: 'Negroni',
        description: 'Gin, Campari, sweet vermouth, orange peel',
        price: '$14',
        tags: [],
      },
      {
        id: 'dr3',
        name: 'Fresh Lemon Mint',
        description: 'House-pressed lemon, fresh mint, still or sparkling water',
        price: '$7',
        tags: ['popular'],
      },
      {
        id: 'dr4',
        name: 'Wine Selection',
        description: 'Curated Lebanese & Italian wines — ask our sommelier for pairings',
        price: 'from $9',
        tags: [],
      },
    ],
  },
];

export const mostOrdered: string[] = ['s2', 'pz2', 'sf1', 'p1', 'd1'];
