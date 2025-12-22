import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create promo banners
  const promoBanners = await Promise.all([
    prisma.promoBanner.upsert({
      where: { id: 'banner-1' },
      update: {},
      create: {
        id: 'banner-1',
        imageUrl: 'http://localhost:3000/static/banner1.jpg',
        title: 'Summer Collection',
        description: 'Check out our new summer collection',
        link: '/summer-collection',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-2' },
      update: {},
      create: {
        id: 'banner-2',
        imageUrl: 'http://localhost:3000/static/banner2.png',
        title: 'Special Offer',
        description: 'Get 20% off on selected items',
        link: '/special-offers',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-3' },
      update: {},
      create: {
        id: 'banner-3',
        imageUrl: 'http://localhost:3000/static/banner3.png',
        title: 'New Arrivals',
        description: 'Discover our latest products',
        link: '/new-arrivals',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-4' },
      update: {},
      create: {
        id: 'banner-4',
        imageUrl: 'http://localhost:3000/static/banner4.jpg',
        title: 'Premium Quality',
        description: 'Experience our premium product line',
        link: '/premium',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-5' },
      update: {},
      create: {
        id: 'banner-5',
        imageUrl: 'http://localhost:3000/static/banner1.jpg',
        title: 'Local Products',
        description: 'Support local farmers and producers',
        link: '/local',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-6' },
      update: {},
      create: {
        id: 'banner-6',
        imageUrl: 'http://localhost:3000/static/banner2.png',
        title: 'Organic Selection',
        description: 'Fresh organic products for healthy living',
        link: '/organic',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-7' },
      update: {},
      create: {
        id: 'banner-7',
        imageUrl: 'http://localhost:3000/static/banner3.png',
        title: 'Weekly Deals',
        description: "Check out this week's special deals",
        link: '/deals',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-8' },
      update: {},
      create: {
        id: 'banner-8',
        imageUrl: 'http://localhost:3000/static/banner4.jpg',
        title: 'Fresh Daily',
        description: 'Daily fresh deliveries to your door',
        link: '/fresh-daily',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-9' },
      update: {},
      create: {
        id: 'banner-9',
        imageUrl: 'http://localhost:3000/static/banner1.jpg',
        title: 'Local Products',
        description: 'Support local farmers and producers',
        link: '/local',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-10' },
      update: {},
      create: {
        id: 'banner-10',
        imageUrl: 'http://localhost:3000/static/banner2.png',
        title: 'Organic Selection',
        description: 'Fresh organic products for healthy living',
        link: '/organic',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-11' },
      update: {},
      create: {
        id: 'banner-11',
        imageUrl: 'http://localhost:3000/static/banner3.png',
        title: 'Weekly Deals',
        description: "Check out this week's special deals",
        link: '/deals',
        isActive: true,
      },
    }),
    prisma.promoBanner.upsert({
      where: { id: 'banner-12' },
      update: {},
      create: {
        id: 'banner-12',
        imageUrl: 'http://localhost:3000/static/banner4.jpg',
        title: 'Fresh Daily',
        description: 'Daily fresh deliveries to your door',
        link: '/fresh-daily',
        isActive: true,
      },
    }),
  ]);

  console.log('Created promo banners:', promoBanners.length);

  // Create categories
  const categoriesData = [
    {
      name: 'Fruits',
      slug: 'fruits',
      icon: 'fruits',
      deName: 'Obst',
      deSlug: 'obst',
      deDesc: 'Frisches und köstliches Obst',
    },
    {
      name: 'Vegetables',
      slug: 'vegetables',
      icon: 'vegetables',
      deName: 'Gemüse',
      deSlug: 'gemuese',
      deDesc: 'Frisches Gemüse und Grünzeug',
    },
    {
      name: 'Dairy',
      slug: 'dairy',
      icon: 'dairy',
      deName: 'Milchprodukte',
      deSlug: 'milchprodukte',
      deDesc: 'Milch, Käse und Milchprodukte',
    },

    {
      name: 'Bakery',
      slug: 'bakery',
      icon: 'bakery',
      deName: 'Bäckerei',
      deSlug: 'baeckerei',
      deDesc: 'Frisches Brot und Backwaren',
    },
    {
      name: 'Beverages',
      slug: 'beverages',
      icon: 'beverages',
      deName: 'Getränke',
      deSlug: 'getraenke',
      deDesc: 'Erfrischende Getränke und Säfte',
    },
    {
      name: 'Seafood',
      slug: 'seafood',
      icon: 'seafood',
      deName: 'Meeresfrüchte',
      deSlug: 'meeresfruechte',
      deDesc: 'Frischer Fisch und Meeresfrüchte',
    },
    {
      name: 'Frozen',
      slug: 'frozen',
      icon: 'frozen',
      deName: 'Tiefkühlkost',
      deSlug: 'tiefkuehlkost',
      deDesc: 'Gefrorene Lebensmittel',
    },
    {
      name: 'Grains',
      slug: 'grains',
      icon: 'grains',
      deName: 'Getreide',
      deSlug: 'getreide',
      deDesc: 'Reis, Hafer und Getreideprodukte',
    },
    {
      name: 'Meat',
      slug: 'meat',
      icon: 'meat',
      deName: 'Fleisch',
      deSlug: 'fleisch',
      deDesc: 'Frisches Fleisch und Fleischprodukte',
    },
    {
      name: 'Sweets',
      slug: 'sweets',
      icon: 'sweets',
      deName: 'Süßigkeiten',
      deSlug: 'suessigkeiten',
      deDesc: 'Leckere Süßigkeiten und Desserts',
    },
    {
      name: 'Canned',
      slug: 'canned',
      icon: 'canned',
      deName: 'Konserven',
      deSlug: 'konserven',
      deDesc: 'Lebensmittel in Dosen',
    },
    {
      name: 'Sauces',
      slug: 'sauces',
      icon: 'sauces',
      deName: 'Soßen',
      deSlug: 'sossen',
      deDesc: 'Verschiedene Soßen und Dressings',
    },
    {
      name: 'Snacks',
      slug: 'snacks',
      icon: 'snacks',
      deName: 'Snacks',
      deSlug: 'snacks',
      deDesc: 'Kleine Zwischenmahlzeiten und Knabbereien',
    },
    {
      name: 'Nuts',
      slug: 'nuts',
      icon: 'nuts',
      deName: 'Nüsse',
      deSlug: 'nuesse',
      deDesc: 'Gesunde Nüsse und Kerne',
    },
    {
      name: 'Spices',
      slug: 'spices',
      icon: 'spices',
      deName: 'Gewürze',
      deSlug: 'gewuerze',
      deDesc: 'Aromatische Gewürze und Kräuter',
    },
    {
      name: 'Household',
      slug: 'household',
      icon: 'household',
      deName: 'Haushalt',
      deSlug: 'haushalt',
      deDesc: 'Produkte für den täglichen Haushalt',
    },
  ];

  const categoryMap = {};

  for (const c of categoriesData) {
    const category = await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: {
        name: c.name,
        slug: c.slug,
        description: `${c.name} products`,
        isActive: true,
        icon: c.icon,
      },
    });
    categoryMap[c.slug] = category;

    // Add German translation if available
    if (c.deName) {
      await prisma.categoryTranslation.upsert({
        where: { categoryId_locale: { categoryId: category.id, locale: 'de' } },
        update: {},
        create: {
          categoryId: category.id,
          locale: 'de',
          name: c.deName,
          slug: c.deSlug,
          description: c.deDesc,
        },
      });
    }
  }

  const subCategoriesData = [
    // Fruits
    {
      parentSlug: 'fruits',
      name: 'Citrus',
      slug: 'citrus',
      deName: 'Zitrusfrüchte',
      deSlug: 'zitrusfruechte',
      deDesc: 'Orangen, Zitronen und mehr',
    },
    {
      parentSlug: 'fruits',
      name: 'Berries',
      slug: 'berries',
      deName: 'Beeren',
      deSlug: 'beeren',
      deDesc: 'Frische Erdbeeren, Himbeeren und mehr',
    },
    {
      parentSlug: 'fruits',
      name: 'Tropical Fruits',
      slug: 'tropical-fruits',
      deName: 'Tropische Früchte',
      deSlug: 'tropische-fruechte',
      deDesc: 'Bananen, Mangos und Ananas',
    },

    // Vegetables
    {
      parentSlug: 'vegetables',
      name: 'Leafy Greens',
      slug: 'leafy-greens',
      deName: 'Blattgemüse',
      deSlug: 'blattgemuese',
      deDesc: 'Salat, Spinat und Kohl',
    },
    {
      parentSlug: 'vegetables',
      name: 'Root Vegetables',
      slug: 'root-vegetables',
      deName: 'Wurzelgemüse',
      deSlug: 'wurzelgemuese',
      deDesc: 'Karotten, Kartoffeln und Zwiebeln',
    },
    {
      parentSlug: 'vegetables',
      name: 'Tomatoes & Peppers',
      slug: 'tomatoes-peppers',
      deName: 'Tomaten & Paprika',
      deSlug: 'tomaten-paprika',
      deDesc: 'Frische Tomaten und Paprika',
    },

    // Dairy
    {
      parentSlug: 'dairy',
      name: 'Milk & Cream',
      slug: 'milk-cream',
      deName: 'Milch & Sahne',
      deSlug: 'milch-sahne',
      deDesc: 'Vollmilch, Sahne und mehr',
    },
    {
      parentSlug: 'dairy',
      name: 'Cheese',
      slug: 'cheese',
      deName: 'Käse',
      deSlug: 'kaese',
      deDesc: 'Schnittkäse, Weichkäse und Frischkäse',
    },
    {
      parentSlug: 'dairy',
      name: 'Yogurt',
      slug: 'yogurt',
      deName: 'Joghurt',
      deSlug: 'joghurt',
      deDesc: 'Natur- und Fruchtjoghurt',
    },

    // Bakery
    {
      parentSlug: 'bakery',
      name: 'Bread',
      slug: 'bread',
      deName: 'Brot',
      deSlug: 'brot',
      deDesc: 'Frisches Vollkorn- und Weißbrot',
    },
    {
      parentSlug: 'bakery',
      name: 'Rolls',
      slug: 'rolls',
      deName: 'Brötchen',
      deSlug: 'broetchen',
      deDesc: 'Knusprige Brötchen und Semmeln',
    },
    {
      parentSlug: 'bakery',
      name: 'Pastries',
      slug: 'pastries',
      deName: 'Gebäck',
      deSlug: 'gebaeck',
      deDesc: 'Croissants, Kuchen und süßes Gebäck',
    },

    // Beverages
    {
      parentSlug: 'beverages',
      name: 'Water',
      slug: 'water',
      deName: 'Wasser',
      deSlug: 'wasser',
      deDesc: 'Mineralwasser und stilles Wasser',
    },
    {
      parentSlug: 'beverages',
      name: 'Juices',
      slug: 'juices',
      deName: 'Säfte',
      deSlug: 'saefte',
      deDesc: 'Fruchtsäfte und Smoothies',
    },
    {
      parentSlug: 'beverages',
      name: 'Soft Drinks',
      slug: 'soft-drinks',
      deName: 'Erfrischungsgetränke',
      deSlug: 'erfrischungsgetraenke',
      deDesc: 'Cola, Limonade und Eistee',
    },

    // Seafood
    {
      parentSlug: 'seafood',
      name: 'Fish Fillet',
      slug: 'fish-fillet',
      deName: 'Fischfilet',
      deSlug: 'fischfilet',
      deDesc: 'Lachs, Kabeljau und Thunfisch',
    },
    {
      parentSlug: 'seafood',
      name: 'Shellfish',
      slug: 'shellfish',
      deName: 'Schalentiere',
      deSlug: 'schalentiere',
      deDesc: 'Garnelen, Muscheln und Krabben',
    },

    // Frozen
    {
      parentSlug: 'frozen',
      name: 'Ice Cream',
      slug: 'ice-cream',
      deName: 'Eiscreme',
      deSlug: 'eiscreme',
      deDesc: 'Verschiedene Eissorten',
    },
    {
      parentSlug: 'frozen',
      name: 'Frozen Pizza',
      slug: 'frozen-pizza',
      deName: 'Tiefkühlpizza',
      deSlug: 'tiefkuehlpizza',
      deDesc: 'Pizza und Fertiggerichte',
    },
    {
      parentSlug: 'frozen',
      name: 'Frozen Veggies',
      slug: 'frozen-veggies',
      deName: 'Tiefkühlgemüse',
      deSlug: 'tiefkuehlgemuese',
      deDesc: 'Erbsen, Bohnen und Gemüsemischungen',
    },

    // Grains
    {
      parentSlug: 'grains',
      name: 'Pasta',
      slug: 'pasta',
      deName: 'Nudeln',
      deSlug: 'nudeln',
      deDesc: 'Spaghetti, Penne und Fusilli',
    },
    {
      parentSlug: 'grains',
      name: 'Rice',
      slug: 'rice',
      deName: 'Reis',
      deSlug: 'reis',
      deDesc: 'Basmati, Jasmin und Vollkornreis',
    },
    {
      parentSlug: 'grains',
      name: 'Cereal',
      slug: 'cereal',
      deName: 'Müsli',
      deSlug: 'muesli',
      deDesc: 'Cornflakes, Haferflocken und Granola',
    },

    // Meat
    {
      parentSlug: 'meat',
      name: 'Poultry',
      slug: 'poultry',
      deName: 'Geflügel',
      deSlug: 'gefluegel',
      deDesc: 'Hähnchen und Pute',
    },
    {
      parentSlug: 'meat',
      name: 'Beef',
      slug: 'beef',
      deName: 'Rindfleisch',
      deSlug: 'rindfleisch',
      deDesc: 'Steaks, Hackfleisch und Braten',
    },
    {
      parentSlug: 'meat',
      name: 'Pork',
      slug: 'pork',
      deName: 'Schweinefleisch',
      deSlug: 'schweinefleisch',
      deDesc: 'Schnitzel, Koteletts und Würstchen',
    },

    // Sweets
    {
      parentSlug: 'sweets',
      name: 'Chocolate',
      slug: 'chocolate',
      deName: 'Schokolade',
      deSlug: 'schokolade',
      deDesc: 'Tafelschokolade und Pralinen',
    },
    {
      parentSlug: 'sweets',
      name: 'Cookies',
      slug: 'cookies',
      deName: 'Kekse',
      deSlug: 'kekse',
      deDesc: 'Butterkekse und Plätzchen',
    },
    {
      parentSlug: 'sweets',
      name: 'Gummies',
      slug: 'gummies',
      deName: 'Fruchtgummi',
      deSlug: 'fruchtgummi',
      deDesc: 'Gummibärchen und Lakritz',
    },

    // Canned
    {
      parentSlug: 'canned',
      name: 'Canned Vegetables',
      slug: 'canned-vegetables',
      deName: 'Gemüsekonserven',
      deSlug: 'gemuesekonserven',
      deDesc: 'Mais, Erbsen und Bohnen in Dosen',
    },
    {
      parentSlug: 'canned',
      name: 'Soups',
      slug: 'soups',
      deName: 'Suppen',
      deSlug: 'suppen',
      deDesc: 'Fertige Suppen und Eintöpfe',
    },

    // Sauces
    {
      parentSlug: 'sauces',
      name: 'Tomato Sauce',
      slug: 'tomato-sauce',
      deName: 'Tomatensoße',
      deSlug: 'tomaten-sosse',
      deDesc: 'Soßen für Pasta und Pizza',
    },
    {
      parentSlug: 'sauces',
      name: 'Oils & Vinegar',
      slug: 'oils-vinegar',
      deName: 'Öl & Essig',
      deSlug: 'oel-essig',
      deDesc: 'Olivenöl, Sonnenblumenöl und Balsamico',
    },

    // Snacks
    {
      parentSlug: 'snacks',
      name: 'Chips',
      slug: 'chips',
      deName: 'Chips',
      deSlug: 'chips',
      deDesc: 'Kartoffelchips und Tortillas',
    },
    {
      parentSlug: 'snacks',
      name: 'Crackers',
      slug: 'crackers',
      deName: 'Cracker',
      deSlug: 'cracker',
      deDesc: 'Salzgebäck und Cracker',
    },

    // Nuts
    {
      parentSlug: 'nuts',
      name: 'Almonds',
      slug: 'almonds',
      deName: 'Mandeln',
      deSlug: 'mandeln',
      deDesc: 'Geröstete und naturbelassene Mandeln',
    },
    {
      parentSlug: 'nuts',
      name: 'Mixed Nuts',
      slug: 'mixed-nuts',
      deName: 'Nussmischungen',
      deSlug: 'nussmischungen',
      deDesc: 'Studentenfutter und Nuss-Mix',
    },

    // Spices
    {
      parentSlug: 'spices',
      name: 'Salt & Pepper',
      slug: 'salt-pepper',
      deName: 'Salz & Pfeffer',
      deSlug: 'salz-pfeffer',
      deDesc: 'Meersalz, Jodsalz und Pfefferkörner',
    },
    {
      parentSlug: 'spices',
      name: 'Dried Herbs',
      slug: 'dried-herbs',
      deName: 'Getrocknete Kräuter',
      deSlug: 'getrocknete-kraeuter',
      deDesc: 'Oregano, Basilikum und Thymian',
    },

    // Household
    {
      parentSlug: 'household',
      name: 'Cleaning Supplies',
      slug: 'cleaning-supplies',
      deName: 'Reinigungsmittel',
      deSlug: 'reinigungsmittel',
      deDesc: 'Allesreiniger, Spülmittel und Schwämme',
    },
    {
      parentSlug: 'household',
      name: 'Paper Goods',
      slug: 'paper-goods',
      deName: 'Papierwaren',
      deSlug: 'papierwaren',
      deDesc: 'Toilettenpapier, Küchenrollen und Servietten',
    },
  ];

  for (const s of subCategoriesData) {
    const parent = categoryMap[s.parentSlug];

    if (!parent) {
      console.warn(`Parent category not found for ${s.slug}`);
      continue;
    }

    const subcategory = await prisma.category.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        name: s.name,
        slug: s.slug,
        description: `${s.name} products`,
        parentId: parent.id,
        isActive: true,
      },
    });

    categoryMap[s.slug] = subcategory;

    // DE translation
    await prisma.categoryTranslation.upsert({
      where: {
        categoryId_locale: {
          categoryId: subcategory.id,
          locale: 'de',
        },
      },
      update: {},
      create: {
        categoryId: subcategory.id,
        locale: 'de',
        name: s.deName,
        slug: s.deSlug,
        description: s.deDesc,
      },
    });
  }

  console.log('Created subcategories with German translations');

  console.log('Created categories with German translations');

  // Create tags
  const tagsData = [
    {
      name: 'Organic',
      slug: 'organic',
      description: 'Organically grown products',
      color: '#4CAF50',
    },
    {
      name: 'Local',
      slug: 'local',
      description: 'Locally sourced products',
      color: '#2196F3',
    },
    {
      name: 'Fresh',
      slug: 'fresh',
      description: 'Fresh and crisp products',
      color: '#FF9800',
    },
    {
      name: 'Premium',
      slug: 'premium',
      description: 'Premium quality products',
      color: '#9C27B0',
    },
    {
      name: 'Seasonal',
      slug: 'seasonal',
      description: 'Seasonal products',
      color: '#F44336',
    },
    {
      name: 'Healthy',
      slug: 'healthy',
      description: 'Healthy and nutritious products',
      color: '#8BC34A',
    },
  ];

  const tagMap = {};

  for (const t of tagsData) {
    const tag = await prisma.tag.upsert({
      where: { slug: t.slug },
      update: {},
      create: { ...t, isActive: true },
    });
    tagMap[t.slug] = tag;

    // German translations
    const deMap = {
      Organic: 'Bio',
      Local: 'Lokal',
      Fresh: 'Frisch',
      Premium: 'Premium',
      Seasonal: 'Saisonal',
      Healthy: 'Gesund',
    };
    const deDesc = {
      Organic: 'Biologisch angebaute Produkte',
      Local: 'Lokal bezogene Produkte',
      Fresh: 'Frische und knusprige Produkte',
      Premium: 'Premium-Qualitätsprodukte',
      Seasonal: 'Saisonale Produkte',
      Healthy: 'Gesunde und nahrhafte Produkte',
    };

    await prisma.tagTranslation.upsert({
      where: { tagId_locale: { tagId: tag.id, locale: 'de' } },
      update: {},
      create: {
        tagId: tag.id,
        locale: 'de',
        name: deMap[t.name],
        description: deDesc[t.name],
      },
    });
  }

  console.log('Created tags with German translations');

  // Create products
  const productsData = [
    {
      name: 'Blueberries',
      slug: 'blueberries',
      shortDescription: 'Fresh and juicy blueberries',
      description: 'Perfect for breakfast or desserts',
      price: 60.0,
      oldPrice: 70.0,
      stock: 90,
      categorySlug: 'berries', // Субкатегорія з списку
      tags: ['fresh', 'healthy', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/blueberries/blueberries_PNG4.png',
          alt: 'Blueberries',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Blaubeeren',
        slug: 'blaubeeren',
        shortDescription: 'Frische und saftige Blaubeeren',
        description: 'Perfekt für Frühstück oder Desserts',
      },
    },
    {
      name: 'Raspberries',
      slug: 'raspberries',
      shortDescription: 'Sweet red raspberries',
      description: 'Locally grown and fresh raspberries',
      price: 65.0,
      oldPrice: 75.0,
      stock: 80,
      categorySlug: 'berries', // Субкатегорія з списку
      tags: ['fresh', 'organic', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/raspberry/raspberry_PNG5041.png',
          alt: 'Raspberries',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Himbeeren',
        slug: 'himbeeren',
        shortDescription: 'Süße rote Himbeeren',
        description: 'Lokal angebaut und frisch',
      },
    },
    {
      name: 'Cucumbers',
      slug: 'cucumbers',
      shortDescription: 'Fresh green cucumbers',
      description: 'Crisp cucumbers, perfect for salads',
      price: 35.0,
      oldPrice: 40.0,
      stock: 8,
      categorySlug: 'vegetables', // Немає специфічної субкатегорії в списку, лишаємо головну
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cucumber/cucumber_PNG84317.png',
          alt: 'Fresh cucumbers',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gurken',
        slug: 'gurken',
        shortDescription: 'Frische grüne Gurken',
        description: 'Knackige Gurken, perfekt für Salate',
      },
    },
    {
      name: 'Tomatoes',
      slug: 'tomatoes',
      shortDescription: 'Juicy red tomatoes',
      description: 'Fresh tomatoes, ideal for cooking and salads',
      price: 40.0,
      oldPrice: 50.0,
      stock: 6,
      categorySlug: 'tomatoes-peppers', // Субкатегорія з списку
      tags: ['fresh', 'organic', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Red tomatoes',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tomaten',
        slug: 'tomaten',
        shortDescription: 'Saftige rote Tomaten',
        description: 'Frische Tomaten, ideal zum Kochen und für Salate',
      },
    },
    {
      name: 'Butter',
      slug: 'butter',
      shortDescription: 'Creamy unsalted butter',
      description: 'Fresh unsalted butter, perfect for baking',
      price: 55.0,
      oldPrice: 65.0,
      stock: 1,
      categorySlug: 'milk-cream', // Субкатегорія з списку
      tags: ['fresh', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/butter/butter_PNG12.png',
          alt: 'Unsalted butter',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Butter',
        slug: 'butter',
        shortDescription: 'Cremige ungesalzene Butter',
        description: 'Frische ungesalzene Butter, perfekt zum Backen',
      },
    },
    {
      name: 'Mozzarella Cheese',
      slug: 'mozzarella-cheese',
      shortDescription: 'Soft mozzarella cheese',
      description: 'Creamy mozzarella, ideal for pizzas and salads',
      price: 75.0,
      oldPrice: 85.0,
      stock: 60,
      categorySlug: 'cheese', // Субкатегорія з списку
      tags: ['premium', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cheese/cheese_PNG25336.png',
          alt: 'Mozzarella cheese',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Mozzarella Käse',
        slug: 'mozzarella-kaese',
        shortDescription: 'Weicher Mozzarella Käse',
        description: 'Cremiger Mozzarella, ideal für Pizza und Salate',
      },
    },
    {
      name: 'Pineapple',
      slug: 'pineapple',
      shortDescription: 'Sweet tropical pineapple',
      description: 'Juicy pineapple, perfect for desserts and smoothies',
      price: 80.0,
      oldPrice: 95.0,
      stock: 50,
      categorySlug: 'tropical-fruits', // Субкатегорія з списку
      tags: ['fresh', 'healthy', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pineapple/pineapple_PNG2756.png',
          alt: 'Pineapple',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Ananas',
        slug: 'ananas',
        shortDescription: 'Süße tropische Ananas',
        description: 'Saftige Ananas, perfekt für Desserts und Smoothies',
      },
    },
    {
      name: 'Mango',
      slug: 'mango',
      shortDescription: 'Ripe juicy mango',
      description: 'Sweet mango, perfect for smoothies and desserts',
      price: 90.0,
      oldPrice: 100.0,
      stock: 4,
      categorySlug: 'tropical-fruits', // Субкатегорія з списку
      tags: ['fresh', 'premium', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/mango/mango_PNG9164.png',
          alt: 'Ripe mango',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Mango',
        slug: 'mango',
        shortDescription: 'Reife saftige Mango',
        description: 'Süße Mango, perfekt für Smoothies und Desserts',
      },
    },
    {
      name: 'Bell Peppers',
      slug: 'bell-peppers',
      shortDescription: 'Fresh colorful bell peppers',
      description: 'Crisp bell peppers, perfect for cooking and salads',
      price: 45.0,
      oldPrice: 55.0,
      stock: 100,
      categorySlug: 'tomatoes-peppers', // Субкатегорія з списку
      tags: ['fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3232.png',
          alt: 'Bell peppers',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Paprika',
        slug: 'paprika',
        shortDescription: 'Frische bunte Paprika',
        description: 'Knackige Paprika, perfekt zum Kochen und für Salate',
      },
    },
    {
      name: 'Cottage Cheese',
      slug: 'cottage-cheese',
      shortDescription: 'Soft and creamy cottage cheese',
      description: 'Low-fat cottage cheese, ideal for healthy meals',
      price: 50.0,
      oldPrice: 60.0,
      stock: 1,
      categorySlug: 'cheese', // Підходить до субкатегорії Käse
      tags: ['fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cottage_cheese/cottage_cheese_PNG1.png',
          alt: 'Cottage cheese',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Hüttenkäse',
        slug: 'huettenkaese',
        shortDescription: 'Weicher und cremiger Hüttenkäse',
        description: 'Fettarmer Hüttenkäse, ideal für gesunde Mahlzeiten',
      },
    },
    {
      name: 'Red Apples',
      slug: 'red-apples',
      shortDescription: 'Crisp and sweet red apples',
      description: 'Crisp and sweet red apples, perfect for snacks',
      price: 50.0,
      oldPrice: 60.0,
      stock: 120,
      categorySlug: 'fruits', // В списку немає субкатегорії для яблук, лишаємо головну
      tags: ['fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/apple/apple_PNG12489.png',
          alt: 'Red apples',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rote Äpfel',
        slug: 'rote-aepfel',
        shortDescription: 'Knackige und süße rote Äpfel',
        description: 'Knackige und süße rote Äpfel, perfekt für Snacks',
      },
    },
    {
      name: 'Bananas',
      slug: 'bananas',
      shortDescription: 'Ripe yellow bananas',
      description: 'Sweet and ripe bananas, ideal for smoothies',
      price: 30.0,
      oldPrice: 0,
      stock: 200,
      categorySlug: 'tropical-fruits', // Субкатегорія з списку
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/banana/banana_PNG845.png',
          alt: 'Ripe bananas',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Bananen',
        slug: 'bananen',
        shortDescription: 'Reife gelbe Bananen',
        description: 'Süße und reife Bananen, ideal für Smoothies',
      },
    },
    {
      name: 'Carrots',
      slug: 'carrots',
      shortDescription: 'Fresh orange carrots',
      description: 'Crunchy and fresh carrots, grown locally',
      price: 25.0,
      oldPrice: 30.0,
      stock: 3,
      categorySlug: 'root-vegetables', // Субкатегорія з списку
      tags: ['fresh', 'organic', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/carrot/carrot_PNG4978.png',
          alt: 'Fresh carrots',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Karotten',
        slug: 'karotten',
        shortDescription: 'Frische orange Karotten',
        description: 'Knackige und frische Karotten, lokal angebaut',
      },
    },
    {
      name: 'Broccoli',
      slug: 'broccoli',
      shortDescription: 'Green broccoli florets',
      description: 'Fresh broccoli, great for salads and cooking',
      price: 40.0,
      oldPrice: 50.0,
      stock: 80,
      categorySlug: 'vegetables', // В списку немає підходящої субкатегорії, лишаємо головну
      tags: ['fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/broccoli/broccoli_PNG2829.png',
          alt: 'Green broccoli',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Brokkoli',
        slug: 'brokkoli',
        shortDescription: 'Grüne Brokkoli-Röschen',
        description: 'Frischer Brokkoli, ideal für Salate und Kochen',
      },
    },
    {
      name: 'Milk',
      slug: 'milk',
      shortDescription: 'Fresh whole milk',
      description: 'Fresh whole milk from local farms',
      price: 20.0,
      oldPrice: 25.0,
      stock: 7,
      categorySlug: 'milk-cream', // Субкатегорія з списку
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/milk/milk_PNG12733.png',
          alt: 'Fresh milk',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Milch',
        slug: 'milch',
        shortDescription: 'Frische Vollmilch',
        description: 'Frische Vollmilch von lokalen Bauernhöfen',
      },
    },
    {
      name: 'Cheddar Cheese',
      slug: 'cheddar-cheese',
      shortDescription: 'Aged cheddar cheese',
      description: 'Rich and flavorful aged cheddar cheese',
      price: 70.0,
      oldPrice: 90.0,
      stock: 60,
      categorySlug: 'cheese', // Субкатегорія з списку
      tags: ['premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cheese/cheese_PNG25321.png',
          alt: 'Cheddar cheese',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Cheddar Käse',
        slug: 'cheddar-kaese',
        shortDescription: 'Gereifter Cheddar Käse',
        description: 'Reicher und aromatischer gereifter Cheddar Käse',
      },
    },
    {
      name: 'Almonds',
      slug: 'almonds',
      shortDescription: 'Crunchy almonds',
      description: 'Fresh and crunchy almonds, perfect for snacks',
      price: 90.0,
      oldPrice: 110.0,
      stock: 70,
      categorySlug: 'almonds', // Субкатегорія з списку (в розділі Nuts)
      tags: ['organic', 'healthy', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/almond/almond_PNG62.png',
          alt: 'Crunchy almonds',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Mandeln',
        slug: 'mandeln',
        shortDescription: 'Knackige Mandeln',
        description: 'Frische und knackige Mandeln, perfekt für Snacks',
      },
    },
    {
      name: 'Spinach',
      slug: 'spinach',
      shortDescription: 'Fresh green spinach',
      description: 'Leafy green spinach, rich in nutrients',
      price: 35.0,
      oldPrice: 45.0,
      stock: 90,
      categorySlug: 'leafy-greens', // Субкатегорія з списку
      tags: ['fresh', 'healthy', 'organic'],
      images: [
        {
          url: 'https://pngimg.com/uploads/leafy_greens/spinach_PNG12.png',
          alt: 'Fresh spinach',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Spinat',
        slug: 'spinat',
        shortDescription: 'Frischer grüner Spinat',
        description: 'Blattspinat, reich an Nährstoffen',
      },
    },
    {
      name: 'Orange Juice',
      slug: 'orange-juice',
      shortDescription: 'Freshly squeezed orange juice',
      description: '100% natural orange juice with no added sugar',
      price: 55.0,
      oldPrice: 65.0,
      stock: 50,
      categorySlug: 'juices', // Субкатегорія з списку
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/juice/juice_PNG7156.png',
          alt: 'Orange juice',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Orangensaft',
        slug: 'orangensaft',
        shortDescription: 'Frisch gepresster Orangensaft',
        description: '100% natürlicher Orangensaft ohne Zuckerzusatz',
      },
    },
    {
      name: 'Greek Yogurt',
      slug: 'greek-yogurt',
      shortDescription: 'Creamy Greek yogurt',
      description: 'Thick and creamy Greek yogurt, rich in protein',
      price: 45.0,
      oldPrice: 55.0,
      stock: 80,
      categorySlug: 'yogurt', // Субкатегорія з списку
      tags: ['fresh', 'healthy', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/yogurt/yogurt_PNG15190.png',
          alt: 'Greek yogurt',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Griechischer Joghurt',
        slug: 'griechischer-joghurt',
        shortDescription: 'Cremiger griechischer Joghurt',
        description: 'Dicker und cremiger griechischer Joghurt, proteinreich',
      },
    },
    {
      name: 'Chicken Breast',
      slug: 'chicken-breast',
      shortDescription: 'Fresh skinless chicken breast',
      description: 'High-quality poultry meat, perfect for grilling or salads',
      price: 120.0,
      oldPrice: 140.0,
      stock: 45,
      categorySlug: 'poultry',
      tags: ['fresh', 'protein', 'dietary'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chicken/chicken_PNG2145.png',
          alt: 'Chicken Breast',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Hähnchenbrust',
        slug: 'haehnchenbrust',
        shortDescription: 'Frische Hähnchenbrust ohne Haut',
        description:
          'Hochwertiges Geflügelfleisch, perfekt zum Grillen oder für Salate',
      },
    },
    {
      name: 'Beef Steak',
      slug: 'beef-steak',
      shortDescription: 'Premium beef ribeye',
      description: 'Tender and juicy beef steak from local farms',
      price: 250.0,
      oldPrice: 280.0,
      stock: 15,
      categorySlug: 'beef',
      tags: ['premium', 'fresh', 'steak'],
      images: [
        {
          url: 'https://pngimg.com/uploads/steak/steak_PNG34.png',
          alt: 'Beef Steak',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rindersteak',
        slug: 'rindersteak',
        shortDescription: 'Premium-Rindersteak',
        description: 'Zartes und saftiges Rindersteak von lokalen Bauernhöfen',
      },
    },

    // BAKERY
    {
      name: 'Whole Grain Bread',
      slug: 'whole-grain-bread',
      shortDescription: 'Freshly baked whole grain bread',
      description: 'Healthy bread made with organic grains and seeds',
      price: 45.0,
      oldPrice: 0,
      stock: 30,
      categorySlug: 'bread',
      tags: ['fresh', 'bakery', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/bread/bread_PNG2273.png',
          alt: 'Whole Grain Bread',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Vollkornbrot',
        slug: 'vollkornbrot',
        shortDescription: 'Frisch gebackenes Vollkornbrot',
        description: 'Gesundes Brot aus Bio-Getreide und Samen',
      },
    },
    {
      name: 'Butter Croissant',
      slug: 'butter-croissant',
      shortDescription: 'Flaky French-style croissant',
      description: 'Traditional butter croissant with a golden crust',
      price: 25.0,
      oldPrice: 30.0,
      stock: 50,
      categorySlug: 'pastries',
      tags: ['fresh', 'sweet', 'breakfast'],
      images: [
        {
          url: 'https://pngimg.com/uploads/croissant/croissant_PNG46.png',
          alt: 'Croissant',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Buttercroissant',
        slug: 'buttercroissant',
        shortDescription: 'Fluffiges Buttercroissant',
        description: 'Traditionelles Buttercroissant mit goldener Kruste',
      },
    },

    // SEAFOOD
    {
      name: 'Salmon Fillet',
      slug: 'salmon-fillet',
      shortDescription: 'Fresh Atlantic salmon fillet',
      description: 'Rich in Omega-3, perfect for baking or pan-searing',
      price: 320.0,
      oldPrice: 350.0,
      stock: 12,
      categorySlug: 'fish-fillet',
      tags: ['fresh', 'premium', 'seafood'],
      images: [
        {
          url: 'https://pngimg.com/uploads/salmon/salmon_PNG34.png',
          alt: 'Salmon',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Lachsfilet',
        slug: 'lachsfilet',
        shortDescription: 'Frisches Atlantik-Lachsfilet',
        description: 'Reich an Omega-3, perfekt zum Backen oder Anbraten',
      },
    },
    {
      name: 'King Prawns',
      slug: 'king-prawns',
      shortDescription: 'Large peeled king prawns',
      description: 'Delicious prawns, ideal for pasta and stir-fry',
      price: 400.0,
      oldPrice: 450.0,
      stock: 20,
      categorySlug: 'shellfish',
      tags: ['frozen', 'seafood', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/shrimp/shrimp_PNG18277.png',
          alt: 'Prawns',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Riesengarnelen',
        slug: 'riesengarnelen',
        shortDescription: 'Große geschälte Riesengarnelen',
        description: 'Köstliche Garnelen, ideal für Pasta und Pfannengerichte',
      },
    },

    // GRAINS
    {
      name: 'Spaghetti Pasta',
      slug: 'spaghetti-pasta',
      shortDescription: 'Durum wheat spaghetti',
      description: 'Classic Italian pasta made from 100% durum wheat',
      price: 35.0,
      oldPrice: 40.0,
      stock: 150,
      categorySlug: 'pasta',
      tags: ['italian', 'pantry'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spaghetti/spaghetti_PNG78.png',
          alt: 'Spaghetti',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Spaghetti',
        slug: 'spaghetti',
        shortDescription: 'Hartweizen-Spaghetti',
        description: 'Klassische italienische Pasta aus 100% Hartweizen',
      },
    },
    {
      name: 'Basmati Rice',
      slug: 'basmati-rice',
      shortDescription: 'Long grain aromatic rice',
      description: 'Premium quality basmati rice, perfect for curries',
      price: 85.0,
      oldPrice: 100.0,
      stock: 65,
      categorySlug: 'rice',
      tags: ['pantry', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/rice/rice_PNG12.png',
          alt: 'Basmati Rice',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Basmati-Reis',
        slug: 'basmati-reis',
        shortDescription: 'Langmähniges aromatischer Reis',
        description: 'Hochwertiger Basmati-Reis, perfekt für Currys',
      },
    },

    // SWEETS
    {
      name: 'Dark Chocolate',
      slug: 'dark-chocolate',
      shortDescription: '70% Cocoa dark chocolate',
      description: 'Rich dark chocolate made from premium cocoa beans',
      price: 60.0,
      oldPrice: 75.0,
      stock: 85,
      categorySlug: 'chocolate',
      tags: ['sweet', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chocolate/chocolate_PNG12.png',
          alt: 'Dark Chocolate',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Dunkle Schokolade',
        slug: 'dunkle-schokolade',
        shortDescription: '70% Kakao dunkle Schokolade',
        description: 'Reiche dunkle Schokolade aus hochwertigen Kakaobohnen',
      },
    },

    // BEVERAGES
    {
      name: 'Mineral Water',
      slug: 'mineral-water',
      shortDescription: 'Sparkling mineral water',
      description: 'Fresh sparkling water from alpine springs',
      price: 15.0,
      oldPrice: 0,
      stock: 300,
      categorySlug: 'water',
      tags: ['drinks', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/water_glass/water_glass_PNG15165.png',
          alt: 'Water',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Mineralwasser',
        slug: 'mineralwasser',
        shortDescription: 'Spritziges Mineralwasser',
        description: 'Frisches Mineralwasser aus Alpenquellen',
      },
    },

    // FROZEN
    {
      name: 'Frozen Peas',
      slug: 'frozen-peas',
      shortDescription: 'Garden fresh frozen peas',
      description: 'Sweet garden peas, snap-frozen to lock in nutrients',
      price: 30.0,
      oldPrice: 40.0,
      stock: 90,
      categorySlug: 'frozen-veggies',
      tags: ['frozen', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/peas/peas_PNG23.png',
          alt: 'Frozen Peas',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tiefkühl-Erbsen',
        slug: 'tiefkuehl-erbsen',
        shortDescription: 'Gartenfrische Tiefkühl-Erbsen',
        description:
          'Süße Gartenerbsen, schockgefrostet, um Nährstoffe zu erhalten',
      },
    },

    // SNACKS
    {
      name: 'Potato Chips',
      slug: 'potato-chips',
      shortDescription: 'Classic salted potato chips',
      description: 'Crispy potato chips seasoned with sea salt',
      price: 40.0,
      oldPrice: 45.0,
      stock: 110,
      categorySlug: 'chips',
      tags: ['snacks', 'salty'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chips/chips_PNG65.png',
          alt: 'Chips',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Kartoffelchips',
        slug: 'kartoffelchips',
        shortDescription: 'Klassisch gesalzene Kartoffelchips',
        description: 'Knusprige Kartoffelchips, mit Meersalz gewürzt',
      },
    },

    // NUTS
    {
      name: 'Walnuts',
      slug: 'walnuts',
      shortDescription: 'Shelled walnut halves',
      description: 'Rich in Omega-3, perfect for baking and snacking',
      price: 110.0,
      oldPrice: 130.0,
      stock: 40,
      categorySlug: 'nuts', // Головна категорія, бо субкатегорії 'walnuts' немає
      tags: ['healthy', 'nuts'],
      images: [
        {
          url: 'https://pngimg.com/uploads/walnut/walnut_PNG46.png',
          alt: 'Walnuts',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Walnüsse',
        slug: 'walnuesse',
        shortDescription: 'Geschälte Walnusshälften',
        description: 'Reich an Omega-3, perfekt zum Backen und Naschen',
      },
    },

    // SAUCES
    {
      name: 'Olive Oil',
      slug: 'olive-oil',
      shortDescription: 'Extra virgin olive oil',
      description: 'First cold press extra virgin olive oil from Spain',
      price: 180.0,
      oldPrice: 210.0,
      stock: 35,
      categorySlug: 'oils-vinegar',
      tags: ['cooking', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/olive_oil/olive_oil_PNG12.png',
          alt: 'Olive Oil',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Olivenöl',
        slug: 'olivenoel',
        shortDescription: 'Natives Olivenöl Extra',
        description:
          'Natives Olivenöl Extra aus der ersten Kaltpressung aus Spanien',
      },
    },

    // FRUITS (Citrus)
    {
      name: 'Lemons',
      slug: 'lemons',
      shortDescription: 'Fresh sour lemons',
      description: 'Zesty and fresh lemons, rich in Vitamin C',
      price: 40.0,
      oldPrice: 0,
      stock: 100,
      categorySlug: 'citrus',
      tags: ['fresh', 'citrus'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lemon/lemon_PNG73.png',
          alt: 'Lemon',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Zitronen',
        slug: 'zitronen',
        shortDescription: 'Frische saure Zitronen',
        description: 'Spritzige und frische Zitronen, reich an Vitamin C',
      },
    },

    // SPICES
    {
      name: 'Black Pepper',
      slug: 'black-pepper',
      shortDescription: 'Ground black pepper',
      description: 'Aromatic ground black pepper for seasoning',
      price: 20.0,
      oldPrice: 25.0,
      stock: 200,
      categorySlug: 'salt-pepper',
      tags: ['spices', 'cooking'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG1241.png',
          alt: 'Black Pepper',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Schwarzer Pfeffer',
        slug: 'schwarzer-pfeffer',
        shortDescription: 'Gemahlener schwarzer Pfeffer',
        description: 'Aromatischer gemahlener schwarzer Pfeffer zum Würzen',
      },
    },

    // HOUSEHOLD
    {
      name: 'Dish Soap',
      slug: 'dish-soap',
      shortDescription: 'Lemon scented dish soap',
      description: 'Tough on grease, gentle on hands with fresh lemon scent',
      price: 50.0,
      oldPrice: 60.0,
      stock: 75,
      categorySlug: 'cleaning-supplies',
      tags: ['household', 'cleaning'],
      images: [
        {
          url: 'https://pngimg.com/uploads/liquid_soap/liquid_soap_PNG23.png',
          alt: 'Dish Soap',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Spülmittel',
        slug: 'spuelmittel',
        shortDescription: 'Spülmittel mit Zitronenduft',
        description:
          'Stark gegen Fett, sanft zu den Händen mit frischem Zitronenduft',
      },
    },
    {
      name: 'Paper Towels',
      slug: 'paper-towels',
      shortDescription: 'Absorbent paper towels',
      description: '2-layer absorbent paper towels for kitchen use',
      price: 35.0,
      oldPrice: 40.0,
      stock: 120,
      categorySlug: 'paper-goods',
      tags: ['household', 'pantry'],
      images: [
        {
          url: 'https://pngimg.com/uploads/paper_towel/paper_towel_PNG45.png',
          alt: 'Paper Towel',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Küchenrollen',
        slug: 'kuechenrollen',
        shortDescription: 'Saugfähige Küchenrollen',
        description: '2-lagige saugfähige Küchenrollen für den Küchengebrauch',
      },
    },

    // VEGETABLES (Leafy)
    {
      name: 'Iceberg Lettuce',
      slug: 'iceberg-lettuce',
      shortDescription: 'Crisp iceberg lettuce',
      description: 'Fresh and crunchy lettuce, ideal for burgers and salads',
      price: 30.0,
      oldPrice: 35.0,
      stock: 40,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'vegetables'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG52.png',
          alt: 'Lettuce',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Eisbergsalat',
        slug: 'eisbergsalat',
        shortDescription: 'Knackiger Eisbergsalat',
        description:
          'Frischer und knackiger Salat, ideal für Burger und Salate',
      },
    },

    // CANNED
    {
      name: 'Canned Sweet Corn',
      slug: 'canned-sweet-corn',
      shortDescription: 'Sweet corn kernels in brine',
      description: 'Naturally sweet corn kernels, perfect for salads and sides',
      price: 28.0,
      oldPrice: 35.0,
      stock: 130,
      categorySlug: 'canned-vegetables',
      tags: ['pantry', 'canned'],
      images: [
        {
          url: 'https://pngimg.com/uploads/corn/corn_PNG45.png',
          alt: 'Sweet Corn',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Maiskonserve',
        slug: 'maiskonserve',
        shortDescription: 'Süßer Mais in Salzlake',
        description:
          'Natürlich süße Maiskörner, perfekt für Salate und Beilagen',
      },
    },
    // FRUITS & VEGETABLES
    {
      name: 'Grapefruit',
      slug: 'grapefruit',
      shortDescription: 'Zesty red grapefruit',
      description: 'Perfectly balanced sweet and bitter citrus fruit',
      price: 55.0,
      oldPrice: 65.0,
      stock: 80,
      categorySlug: 'citrus',
      tags: ['fresh', 'citrus', 'dietary'],
      images: [
        {
          url: 'https://pngimg.com/uploads/grapefruit/grapefruit_PNG15291.png',
          alt: 'Grapefruit',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Grapefruit',
        slug: 'grapefruit',
        shortDescription: 'Spritzige rote Grapefruit',
        description: 'Perfekt ausbalancierte süß-bittere Zitrusfrucht',
      },
    },
    {
      name: 'Radishes',
      slug: 'radishes',
      shortDescription: 'Crunchy red radishes',
      description: 'Small, spicy radishes, perfect for spring salads',
      price: 25.0,
      oldPrice: 30.0,
      stock: 60,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'local', 'spring'],
      images: [
        {
          url: 'https://pngimg.com/uploads/radish/radish_PNG35.png',
          alt: 'Radish',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Radieschen',
        slug: 'radieschen',
        shortDescription: 'Knackige rote Radieschen',
        description: 'Kleine, würzige Radieschen, perfekt für Frühlingssalate',
      },
    },
    {
      name: 'Red Cabbage',
      slug: 'red-cabbage',
      shortDescription: 'Fresh red cabbage head',
      description: 'Crisp red cabbage, ideal for coleslaw or pickling',
      price: 35.0,
      oldPrice: 0,
      stock: 45,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'healthy', 'vegetables'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cabbage/cabbage_PNG8814.png',
          alt: 'Red Cabbage',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rotkohl',
        slug: 'rotkohl',
        shortDescription: 'Frischer Rotkohlkopf',
        description:
          'Knackiger Rotkohl, ideal für Krautsalat oder zum Einlegen',
      },
    },

    // DAIRY & CHEESE
    {
      name: 'Camembert Cheese',
      slug: 'camembert-cheese',
      shortDescription: 'Soft creamy Camembert',
      description: 'French-style soft cheese with a mild, earthy flavor',
      price: 95.0,
      oldPrice: 110.0,
      stock: 25,
      categorySlug: 'cheese',
      tags: ['dairy', 'premium', 'soft-cheese'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cheese/cheese_PNG25298.png',
          alt: 'Camembert',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Camembert',
        slug: 'camembert',
        shortDescription: 'Weicher cremiger Camembert',
        description:
          'Weichkäse nach französischer Art mit mildem, erdigen Geschmack',
      },
    },
    {
      name: 'Sour Cream',
      slug: 'sour-cream',
      shortDescription: 'Fresh 15% fat sour cream',
      description: 'Creamy sour cream, perfect for dressings and soups',
      price: 30.0,
      oldPrice: 35.0,
      stock: 90,
      categorySlug: 'milk-cream',
      tags: ['dairy', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/sauce/sauce_PNG52.png',
          alt: 'Sour Cream',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Schmand',
        slug: 'schmand',
        shortDescription: 'Frischer 15% Fett Schmand',
        description: 'Cremiger Schmand, perfekt für Dressings und Suppen',
      },
    },

    // BAKERY
    {
      name: 'Pretzels',
      slug: 'pretzels',
      shortDescription: 'Traditional salted pretzels',
      description: 'German-style lye pretzels with coarse sea salt',
      price: 18.0,
      oldPrice: 22.0,
      stock: 40,
      categorySlug: 'rolls',
      tags: ['fresh', 'bakery', 'german'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pretzel/pretzel_PNG37.png',
          alt: 'Pretzel',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Brezeln',
        slug: 'brezeln',
        shortDescription: 'Traditionelle Salzbrezeln',
        description: 'Laugenbrezeln nach deutscher Art mit grobem Meersalz',
      },
    },
    {
      name: 'Blueberry Muffin',
      slug: 'blueberry-muffin',
      shortDescription: 'Soft muffin with berries',
      description: 'Sweet muffin baked with fresh blueberries',
      price: 40.0,
      oldPrice: 45.0,
      stock: 30,
      categorySlug: 'pastries',
      tags: ['sweet', 'bakery', 'breakfast'],
      images: [
        {
          url: 'https://pngimg.com/uploads/muffin/muffin_PNG52.png',
          alt: 'Muffin',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Blaubeer-Muffin',
        slug: 'blaubeer-muffin',
        shortDescription: 'Weicher Muffin mit Beeren',
        description: 'Süßer Muffin, gebacken mit frischen Blaubeeren',
      },
    },

    // MEAT
    {
      name: 'Minced Beef',
      slug: 'minced-beef',
      shortDescription: 'Fresh lean minced beef',
      description: 'Ground beef, perfect for burgers or bolognese sauce',
      price: 180.0,
      oldPrice: 210.0,
      stock: 20,
      categorySlug: 'beef',
      tags: ['meat', 'fresh', 'cooking'],
      images: [
        {
          url: 'https://pngimg.com/uploads/meat/meat_PNG34.png',
          alt: 'Minced Beef',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rinderhackfleisch',
        slug: 'rinderhackfleisch',
        shortDescription: 'Frisches mageres Rinderhack',
        description:
          'Rinderhackfleisch, perfekt für Burger oder Bolognese-Sauce',
      },
    },
    {
      name: 'Bratwurst',
      slug: 'bratwurst',
      shortDescription: 'Grilled pork sausages',
      description: 'Classic pork sausages with traditional spices',
      price: 130.0,
      oldPrice: 150.0,
      stock: 35,
      categorySlug: 'pork',
      tags: ['meat', 'grill', 'traditional'],
      images: [
        {
          url: 'https://pngimg.com/uploads/sausage/sausage_PNG1245.png',
          alt: 'Bratwurst',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Bratwurst',
        slug: 'bratwurst',
        shortDescription: 'Grillwürstchen vom Schwein',
        description: 'Klassische Schweinswürstchen mit traditionellen Gewürzen',
      },
    },

    // SEAFOOD
    {
      name: 'Mussels',
      slug: 'mussels',
      shortDescription: 'Fresh whole mussels',
      description: 'Fresh black mussels, ideal for Mediterranean dishes',
      price: 190.0,
      oldPrice: 220.0,
      stock: 15,
      categorySlug: 'shellfish',
      tags: ['seafood', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/mussel/mussel_PNG12.png',
          alt: 'Mussels',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Miesmuscheln',
        slug: 'miesmuscheln',
        shortDescription: 'Frische ganze Muscheln',
        description: 'Frische Miesmuscheln, ideal für mediterrane Gerichte',
      },
    },

    // GRAINS & PANTRY
    {
      name: 'Penne Rigate',
      slug: 'penne-rigate',
      shortDescription: 'Ribbed durum wheat pasta',
      description: 'Classic ribbed pasta tubes for better sauce adhesion',
      price: 35.0,
      oldPrice: 0,
      stock: 140,
      categorySlug: 'pasta',
      tags: ['pantry', 'pasta', 'italian'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pasta/pasta_PNG38.png',
          alt: 'Penne',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Penne Rigate',
        slug: 'penne-rigate',
        shortDescription: 'Gerippte Hartweizennudeln',
        description: 'Klassische gerippte Nudeln для кращого утримання соусу',
      },
    },
    {
      name: 'Honey',
      slug: 'honey',
      shortDescription: 'Natural blossom honey',
      description: 'Pure wildflower honey, sweet and aromatic',
      price: 120.0,
      oldPrice: 140.0,
      stock: 55,
      categorySlug: 'sweets',
      tags: ['natural', 'sweet', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/honey/honey_PNG12.png',
          alt: 'Honey',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Blütenhonig',
        slug: 'bluetenhonig',
        shortDescription: 'Natürlicher Blütenhonig',
        description: 'Reiner Wildblütenhonig, süß und aromatisch',
      },
    },

    // BEVERAGES
    {
      name: 'Green Tea',
      slug: 'green-tea',
      shortDescription: 'Organic green tea bags',
      description: 'Refreshing green tea with antioxidant properties',
      price: 45.0,
      oldPrice: 55.0,
      stock: 110,
      categorySlug: 'beverages',
      tags: ['drinks', 'healthy', 'tea'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tea/tea_PNG1245.png',
          alt: 'Tea',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Grüner Tee',
        slug: 'gruener-tee',
        shortDescription: 'Bio-Grüntee-Beutel',
        description:
          'Erfrischender grüner Tee mit antioxidativen Eigenschaften',
      },
    },
    {
      name: 'Iced Tea Peach',
      slug: 'iced-tea-peach',
      shortDescription: 'Refreshing peach iced tea',
      description: 'Sweet iced tea drink with natural peach flavor',
      price: 25.0,
      oldPrice: 30.0,
      stock: 180,
      categorySlug: 'soft-drinks',
      tags: ['drinks', 'cold', 'sweet'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tea/tea_PNG43.png',
          alt: 'Iced Tea',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Eistee Pfirsich',
        slug: 'eistee-pfirsich',
        shortDescription: 'Erfrischender Pfirsich-Eistee',
        description: 'Süßes Eistee-Getränk mit natürlichem Pfirsicharoma',
      },
    },

    // FROZEN
    {
      name: 'Frozen Strawberries',
      slug: 'frozen-strawberries',
      shortDescription: 'Whole frozen strawberries',
      description: 'Perfect for smoothies, desserts, and baking all year round',
      price: 70.0,
      oldPrice: 85.0,
      stock: 50,
      categorySlug: 'frozen',
      tags: ['frozen', 'berries'],
      images: [
        {
          url: 'https://pngimg.com/uploads/strawberry/strawberry_PNG2598.png',
          alt: 'Frozen Berry',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tiefkühl-Erdbeeren',
        slug: 'tiefkuehl-erdbeeren',
        shortDescription: 'Ganze gefrorene Erdbeeren',
        description:
          'Perfekt für Smoothies, Desserts und Backen das ganze Jahr über',
      },
    },

    // SNACKS
    {
      name: 'Salted Peanuts',
      slug: 'salted-peanuts',
      shortDescription: 'Roasted salted peanuts',
      description: 'Classic roasted peanuts with sea salt seasoning',
      price: 35.0,
      oldPrice: 40.0,
      stock: 120,
      categorySlug: 'snacks',
      tags: ['snacks', 'salty', 'nuts'],
      images: [
        {
          url: 'https://pngimg.com/uploads/peanut/peanut_PNG28.png',
          alt: 'Peanuts',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gesalzene Erdnüsse',
        slug: 'gesalzene-erdnuesse',
        shortDescription: 'Geröstete gesalzene Erdnüsse',
        description: 'Klassisch geröstete Erdnüsse mit Meersalzwürze',
      },
    },
    {
      name: 'Tortilla Chips',
      slug: 'tortilla-chips',
      shortDescription: 'Crunchy corn tortilla chips',
      description: 'Triangular corn chips, perfect for dipping in salsa',
      price: 45.0,
      oldPrice: 50.0,
      stock: 95,
      categorySlug: 'chips',
      tags: ['snacks', 'mexican'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chips/chips_PNG72.png',
          alt: 'Tortilla Chips',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tortilla-Chips',
        slug: 'tortilla-chips',
        shortDescription: 'Knusprige Mais-Tortilla-Chips',
        description: 'Dreieckige Maischips, perfekt zum Dippen in Salsa',
      },
    },

    // SAUCES & CONDIMENTS
    {
      name: 'Balsamic Vinegar',
      slug: 'balsamic-vinegar',
      shortDescription: 'Aged balsamic vinegar from Modena',
      description: 'Dark, concentrated, and intensely flavoured vinegar',
      price: 110.0,
      oldPrice: 130.0,
      stock: 40,
      categorySlug: 'oils-vinegar',
      tags: ['cooking', 'premium', 'italian'],
      images: [
        {
          url: 'https://pngimg.com/uploads/vinegar/vinegar_PNG12.png',
          alt: 'Balsamic',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Balsamico-Essig',
        slug: 'balsamico-essig',
        shortDescription: 'Gereifter Balsamico-Essig aus Modena',
        description: 'Dunkler, konzentrierter und geschmacksintensiver Essig',
      },
    },
    {
      name: 'Mayonnaise',
      slug: 'mayonnaise',
      shortDescription: 'Creamy classic mayonnaise',
      description: 'Rich mayonnaise made with free-range eggs',
      price: 45.0,
      oldPrice: 55.0,
      stock: 70,
      categorySlug: 'sauces',
      tags: ['sauce', 'pantry'],
      images: [
        {
          url: 'https://pngimg.com/uploads/mayonnaise/mayonnaise_PNG12.png',
          alt: 'Mayo',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Mayonnaise',
        slug: 'mayonnaise',
        shortDescription: 'Cremige klassische Mayonnaise',
        description:
          'Reiche Mayonnaise hergestellt aus Eiern aus Freilandhaltung',
      },
    },

    // NUTS
    {
      name: 'Pistachios',
      slug: 'pistachios',
      shortDescription: 'Roasted and salted pistachios',
      description: 'Premium pistachios in shell, perfectly roasted',
      price: 160.0,
      oldPrice: 190.0,
      stock: 50,
      categorySlug: 'nuts',
      tags: ['healthy', 'nuts', 'snack'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pistachio/pistachio_PNG24.png',
          alt: 'Pistachios',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Pistazien',
        slug: 'pistazien',
        shortDescription: 'Geröstete und gesalzene Pistazien',
        description: 'Premium-Pistazien in der Schale, perfekt geröstet',
      },
    },

    // SPICES
    {
      name: 'Paprika Powder',
      slug: 'paprika-powder',
      shortDescription: 'Sweet smoked paprika',
      description: 'Ground sweet paprika with a mild smoky aroma',
      price: 25.0,
      oldPrice: 30.0,
      stock: 150,
      categorySlug: 'spices',
      tags: ['spices', 'cooking'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spices/spices_PNG12.png',
          alt: 'Paprika',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Paprikapulver',
        slug: 'paprikapulver',
        shortDescription: 'Süßes geräuchertes Paprika',
        description: 'Gemahlenes edelsüßes Paprika mit mildem Raucharoma',
      },
    },

    // HOUSEHOLD
    {
      name: 'Laundry Detergent',
      slug: 'laundry-detergent',
      shortDescription: 'Liquid laundry detergent',
      description: 'Effective detergent for colored and white clothes',
      price: 220.0,
      oldPrice: 250.0,
      stock: 40,
      categorySlug: 'cleaning-supplies',
      tags: ['household', 'cleaning'],
      images: [
        {
          url: 'https://pngimg.com/uploads/detergent/detergent_PNG12.png',
          alt: 'Detergent',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Waschmittel',
        slug: 'waschmittel',
        shortDescription: 'Flüssigwaschmittel',
        description: 'Effektives Waschmittel für bunte und weiße Kleidung',
      },
    },
    {
      name: 'Sponge Set',
      slug: 'sponge-set',
      shortDescription: 'Cleaning sponges 3-pack',
      description: 'Durable sponges for kitchen and household cleaning',
      price: 15.0,
      oldPrice: 0,
      stock: 200,
      categorySlug: 'cleaning-supplies',
      tags: ['household', 'cleaning'],
      images: [
        {
          url: 'https://pngimg.com/uploads/sponge/sponge_PNG12.png',
          alt: 'Sponge',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Schwamm-Set',
        slug: 'schwamm-set',
        shortDescription: 'Reinigungsschwämme 3er-Pack',
        description: 'Langlebige Schwämme für Küche und Haushalt',
      },
    },

    // CANNED
    {
      name: 'Canned Tuna',
      slug: 'canned-tuna',
      shortDescription: 'Tuna chunks in sunflower oil',
      description: 'Ready-to-eat tuna chunks, perfect for quick salads',
      price: 65.0,
      oldPrice: 75.0,
      stock: 100,
      categorySlug: 'canned',
      tags: ['pantry', 'seafood', 'ready-to-eat'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tuna/tuna_PNG12.png',
          alt: 'Canned Tuna',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Thunfischdose',
        slug: 'thunfischdose',
        shortDescription: 'Thunfischstücke in Sonnenblumenöl',
        description:
          'Verzehrfertige Thunfischstücke, perfekt für schnelle Salate',
      },
    },
    {
      name: 'Tomato Soup Canned',
      slug: 'tomato-soup-canned',
      shortDescription: 'Classic creamy tomato soup',
      description: 'Warm and comforting tomato soup in a convenient can',
      price: 40.0,
      oldPrice: 45.0,
      stock: 80,
      categorySlug: 'soups',
      tags: ['canned', 'quick-meal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/soup/soup_PNG12.png',
          alt: 'Canned Soup',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tomatensuppe',
        slug: 'tomatensuppe',
        shortDescription: 'Klassische cremige Tomatensuppe',
        description:
          'Warme und wohltuende Tomatensuppe in der praktischen Dose',
      },
    },

    // ADDITIONAL FRUITS/VEG
    {
      name: 'Pear',
      slug: 'pear',
      shortDescription: 'Sweet Conference pear',
      description: 'Juicy and soft pear, high in fiber',
      price: 45.0,
      oldPrice: 50.0,
      stock: 120,
      categorySlug: 'fruits',
      tags: ['fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pear/pear_PNG3475.png',
          alt: 'Pear',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Birne',
        slug: 'birne',
        shortDescription: 'Süße Conference-Birne',
        description: 'Saftige und weiche Birne, ballaststoffreich',
      },
    },
    {
      name: 'Zucchini',
      slug: 'zucchini',
      shortDescription: 'Fresh green zucchini',
      description: 'Young and tender zucchini, perfect for roasting',
      price: 30.0,
      oldPrice: 35.0,
      stock: 75,
      categorySlug: 'vegetables',
      tags: ['fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/zucchini/zucchini_PNG1245.png',
          alt: 'Zucchini',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Zucchini',
        slug: 'zucchini',
        shortDescription: 'Frische grüne Zucchini',
        description: 'Junge und zarte Zucchini, perfekt zum Rösten',
      },
    },
    {
      name: 'Walnut kernels',
      slug: 'walnut-kernels',
      shortDescription: 'Natural walnut halves',
      description: 'Raw walnut halves, great for brain health',
      price: 130.0,
      oldPrice: 150.0,
      stock: 45,
      categorySlug: 'nuts',
      tags: ['nuts', 'raw', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/walnut/walnut_PNG46.png',
          alt: 'Walnut',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Walnusskerne',
        slug: 'walnusskerne',
        shortDescription: 'Natürliche Walnusshälften',
        description: 'Rohe Walnusshälften, gut für die Herzgesundheit',
      },
    },
    {
      name: 'Popcorn',
      slug: 'popcorn',
      shortDescription: 'Microwave salted popcorn',
      description: 'Classic cinema-style salted popcorn for microwave',
      price: 25.0,
      oldPrice: 0,
      stock: 150,
      categorySlug: 'snacks',
      tags: ['snack', 'cinema'],
      images: [
        {
          url: 'https://pngimg.com/uploads/popcorn/popcorn_PNG12.png',
          alt: 'Popcorn',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Popcorn',
        slug: 'popcorn',
        shortDescription: 'Mikrowellen-Salzpopcorn',
        description:
          'Klassisches gesalzenes Popcorn im Kino-Stil für die Mikrowelle',
      },
    },
    {
      name: 'Ketchup',
      slug: 'ketchup',
      shortDescription: 'Classic tomato ketchup',
      description: 'Tomato ketchup made from sun-ripened tomatoes',
      price: 35.0,
      oldPrice: 40.0,
      stock: 120,
      categorySlug: 'sauces',
      tags: ['sauce', 'pantry'],
      images: [
        {
          url: 'https://pngimg.com/uploads/ketchup/ketchup_PNG12.png',
          alt: 'Ketchup',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Ketchup',
        slug: 'ketchup',
        shortDescription: 'Klassischer Tomatenketchup',
        description: 'Tomatenketchup aus sonnengereiften Tomaten',
      },
    },
    {
      name: 'San Marzano Tomatoes',
      slug: 'san-marzano-tomatoes-premium',
      shortDescription: 'Long meaty Italian tomatoes',
      description:
        'The best tomatoes for authentic sauces, known for their thin skin and sweet flavor.',
      price: 85.0,
      oldPrice: 100.0,
      stock: 45,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12590.png',
          alt: 'San Marzano',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'San Marzano Tomaten',
        slug: 'san-marzano-tomaten-premium',
        shortDescription: 'Lange fleischige italienische Tomaten',
        description: 'Die besten Tomaten für authentische Saucen.',
      },
    },
    {
      name: 'Chocolate Habanero',
      slug: 'chocolate-habanero-hot',
      shortDescription: 'Extra hot spicy pepper',
      description:
        'Unique dark brown chili with extreme heat and smoky undertones.',
      price: 40.0,
      oldPrice: 0,
      stock: 25,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'premium', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG25.png',
          alt: 'Chocolate Habanero',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Schoko-Habanero',
        slug: 'schoko-habanero-scharf',
        shortDescription: 'Extrascharfe Paprika',
        description: 'Einzigartiger dunkelbrauner Chili mit extremer Schärfe.',
      },
    },
    {
      name: 'Yellow Grape Tomatoes',
      slug: 'yellow-grape-tomatoes-organic',
      shortDescription: 'Sweet bite-sized yellow tomatoes',
      description:
        'Naturally sweet and juicy, perfect for kids or colorful salads.',
      price: 55.0,
      oldPrice: 65.0,
      stock: 60,
      categorySlug: 'tomatoes-peppers',
      tags: ['organic', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12589.png',
          alt: 'Yellow Tomato',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gelbe Traubentomaten',
        slug: 'gelbe-traubentomaten-bio',
        shortDescription: 'Süße mundgerechte gelbe Tomaten',
        description: 'Natürlich süß und saftig.',
      },
    },
    {
      name: 'Sweet Snack Peppers',
      slug: 'mini-snack-peppers-mix',
      shortDescription: 'Small seedless crunchy peppers',
      description:
        'Bag of colorful mini peppers, great for healthy lunchboxes.',
      price: 60.0,
      oldPrice: 70.0,
      stock: 90,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3271.png',
          alt: 'Snack Peppers',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Snack-Paprika Mix',
        slug: 'snack-paprika-mix',
        shortDescription: 'Kleine knackige Paprika',
        description: 'Bunte Mini-Paprika, ideal für die Brotdose.',
      },
    },
    {
      name: 'Heirloom Beefsteak',
      slug: 'heirloom-beefsteak-local',
      shortDescription: 'Giant flavorful garden tomato',
      description:
        'Locally grown giant tomatoes with rich aroma and meaty texture.',
      price: 95.0,
      oldPrice: 110.0,
      stock: 30,
      categorySlug: 'tomatoes-peppers',
      tags: ['local', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Beefsteak',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Ochsenherztomate',
        slug: 'ochsenherztomate-lokal',
        shortDescription: 'Riesige aromatische Gartentomate',
        description: 'Lokal angebaut mit reichem Aroma.',
      },
    },
    {
      name: 'Poblano Chili',
      slug: 'poblano-chili-mild',
      shortDescription: 'Large mild dark green chili',
      description:
        'Perfect for stuffing or roasting, with a rich savory flavor.',
      price: 45.0,
      oldPrice: 0,
      stock: 70,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'healthy', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3232.png',
          alt: 'Poblano',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Poblano-Chili',
        slug: 'poblano-chili-mild',
        shortDescription: 'Große milde dunkelgrüne Chili',
        description: 'Perfekt zum Füllen oder Rösten.',
      },
    },
    {
      name: 'Tigerella Tomatoes',
      slug: 'tigerella-striped-tomatoes',
      shortDescription: 'Striped decorative juicy tomatoes',
      description:
        'Beautiful red and yellow striped tomatoes with a tangy finish.',
      price: 70.0,
      oldPrice: 80.0,
      stock: 35,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'seasonal', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12589.png',
          alt: 'Tigerella',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tigerella-Tomaten',
        slug: 'tigerella-tomaten',
        shortDescription: 'Gestreifte dekorative Tomaten',
        description: 'Wunderschöne rot-gelb gestreifte Tomaten.',
      },
    },
    {
      name: 'Long Red Peppers',
      slug: 'kapia-red-peppers-long',
      shortDescription: 'Sweet pointed red peppers',
      description:
        'Kapia style long peppers, the best choice for traditional roasting.',
      price: 50.0,
      oldPrice: 55.0,
      stock: 120,
      categorySlug: 'tomatoes-peppers',
      tags: ['local', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3272.png',
          alt: 'Long Peppers',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Spitzpaprika Rot',
        slug: 'spitzpaprika-rot-lang',
        shortDescription: 'Süße rote Spitzpaprika',
        description: 'Kapia-Stil, ideal zum Rösten.',
      },
    },
    {
      name: 'Green Thai Chili',
      slug: 'green-thai-chili-small',
      shortDescription: 'Very hot small green chilies',
      description: 'Essential for Asian sauces and spicy stir-fries.',
      price: 30.0,
      oldPrice: 35.0,
      stock: 200,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG1245.png',
          alt: 'Thai Chili',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Grüner Thai-Chili',
        slug: 'gruener-thai-chili',
        shortDescription: 'Sehr scharfe kleine grüne Chilis',
        description: 'Unverzichtbar für die asiatische Küche.',
      },
    },
    {
      name: 'Black Pearl Pepper',
      slug: 'black-pearl-pepper-unique',
      shortDescription: 'Dark purple sweet pepper',
      description:
        'A gourmet variety with nearly black skin and deep red flesh.',
      price: 88.0,
      oldPrice: 100.0,
      stock: 15,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'organic', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3232.png',
          alt: 'Black Pepper',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Black Pearl Paprika',
        slug: 'black-pearl-paprika',
        shortDescription: 'Dunkelviolette süße Paprika',
        description: 'Eine Gourmet-Sorte mit fast schwarzer Haut.',
      },
    },

    // --- ROOT VEGETABLES (root-vegetables) ---
    {
      name: 'White Daikon',
      slug: 'daikon-radish-white-long',
      shortDescription: 'Crispy long Japanese radish',
      description:
        'A mild-flavored, large white radish used often in salads or pickling.',
      price: 35.0,
      oldPrice: 40.0,
      stock: 80,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'healthy', 'organic'],
      images: [
        {
          url: 'https://pngimg.com/uploads/radish/radish_PNG35.png',
          alt: 'Daikon',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Daikon-Rettich',
        slug: 'daikon-rettich-weiss',
        shortDescription: 'Knackiger langer weißer Rettich',
        description: 'Ein milder weißer Rettich für Salate.',
      },
    },
    {
      name: 'Kohlrabi Green',
      slug: 'kohlrabi-green-crispy-local',
      shortDescription: 'Sweet and crunchy kohlrabi',
      description: 'High in Vitamin C, great for eating raw as a snack.',
      price: 28.0,
      oldPrice: 35.0,
      stock: 150,
      categorySlug: 'root-vegetables',
      tags: ['local', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cabbage/cabbage_PNG8814.png',
          alt: 'Kohlrabi',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Kohlrabi Grün',
        slug: 'kohlrabi-gruen-knackig',
        shortDescription: 'Süßer und knackiger Kohlrabi',
        description: 'Viel Vitamin C, ideal zum Rohverzehr.',
      },
    },
    {
      name: 'Red Potatoes',
      slug: 'red-potatoes-organic-bag',
      shortDescription: 'Firm red-skinned potatoes',
      description: 'Waxy texture, best for boiling and potato salads.',
      price: 25.0,
      oldPrice: 0,
      stock: 500,
      categorySlug: 'root-vegetables',
      tags: ['organic', 'local', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/potato/potato_PNG491.png',
          alt: 'Red Potatoes',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rote Kartoffeln',
        slug: 'rote-kartoffeln-bio',
        shortDescription: 'Feste Kartoffeln mit roter Schale',
        description: 'Ideal zum Kochen und für Kartoffelsalat.',
      },
    },
    {
      name: 'Yellow Turmeric',
      slug: 'fresh-turmeric-root-healthy',
      shortDescription: 'Aromatic fresh turmeric root',
      description:
        'Raw turmeric root, powerful superfood for juices and cooking.',
      price: 150.0,
      oldPrice: 180.0,
      stock: 40,
      categorySlug: 'root-vegetables',
      tags: ['premium', 'healthy', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/ginger/ginger_PNG12.png',
          alt: 'Turmeric',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gelber Kurkuma',
        slug: 'gelber-kurkuma-frisch',
        shortDescription: 'Aromatische frische Kurkumawurzel',
        description: 'Rohes Superfood für Säfte.',
      },
    },
    {
      name: 'Black Radish',
      slug: 'black-radish-winter-strong',
      shortDescription: 'Traditional winter black radish',
      description:
        'Strong, spicy flavor, very popular in European winter cuisine.',
      price: 32.0,
      oldPrice: 38.0,
      stock: 70,
      categorySlug: 'root-vegetables',
      tags: ['seasonal', 'local', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/radish/radish_PNG35.png',
          alt: 'Black Radish',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Schwarzer Rettich',
        slug: 'schwarzer-rettich-winter',
        shortDescription: 'Traditioneller schwarzer Rettich',
        description: 'Starker, würziger Geschmack.',
      },
    },
    {
      name: 'Parsley Root',
      slug: 'parsley-root-soup-organic',
      shortDescription: 'Aromatic white soup root',
      description: 'Essential for making authentic vegetable broths.',
      price: 45.0,
      oldPrice: 55.0,
      stock: 90,
      categorySlug: 'root-vegetables',
      tags: ['organic', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/parsley/parsley_PNG12.png',
          alt: 'Parsley Root',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Petersilienwurzel',
        slug: 'petersilienwurzel-bio',
        shortDescription: 'Aromatische weiße Suppenwurzel',
        description: 'Unverzichtbar für Gemüsebrühen.',
      },
    },
    {
      name: 'Shallots',
      slug: 'gourmet-shallots-small-local',
      shortDescription: 'Mild and sweet small shallots',
      description: 'Gourmet choice for fine sauces and dressings.',
      price: 55.0,
      oldPrice: 65.0,
      stock: 120,
      categorySlug: 'root-vegetables',
      tags: ['local', 'premium', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/onion/onion_PNG3821.png',
          alt: 'Shallots',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Schalotten',
        slug: 'schalotten-gourmet',
        shortDescription: 'Milde und süße kleine Schalotten',
        description: 'Gourmet-Wahl für feine Saucen.',
      },
    },
    {
      name: 'Horseradish',
      slug: 'horseradish-root-spicy-fresh',
      shortDescription: 'Very spicy white root',
      description: 'Freshly grated for sauces or as a healthy immune booster.',
      price: 90.0,
      oldPrice: 0,
      stock: 35,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/ginger/ginger_PNG12.png',
          alt: 'Horseradish',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Meerrettich',
        slug: 'meerrettich-wurzel',
        shortDescription: 'Sehr scharfe weiße Wurzel',
        description: 'Frisch gerieben für Saucen.',
      },
    },
    {
      name: 'Jerusalem Artichoke',
      slug: 'topinambur-root-organic-local',
      shortDescription: 'Sweet nutty winter tuber',
      description:
        'Also known as Topinambur, a healthy alternative to potatoes.',
      price: 75.0,
      oldPrice: 85.0,
      stock: 50,
      categorySlug: 'root-vegetables',
      tags: ['organic', 'healthy', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/potato/potato_PNG493.png',
          alt: 'Topinambur',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Topinambur',
        slug: 'topinambur-bio',
        shortDescription: 'Süße nussige Winterknolle',
        description: 'Gesunde Alternative zu Kartoffeln.',
      },
    },
    {
      name: 'Sand-Grown Carrots',
      slug: 'premium-sand-carrots-local',
      shortDescription: 'Extra sweet sand-grown carrots',
      description:
        'Special variety grown in sandy soil for superior sweetness.',
      price: 35.0,
      oldPrice: 40.0,
      stock: 200,
      categorySlug: 'root-vegetables',
      tags: ['local', 'premium', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/carrot/carrot_PNG4980.png',
          alt: 'Sand Carrots',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Sandmöhren',
        slug: 'sandmoehren-premium',
        shortDescription: 'Extra süße Sandmöhren',
        description: 'Besondere Sorte für höchste Süße.',
      },
    },

    // --- LEAFY GREENS (leafy-greens) ---
    {
      name: 'Curly Kale',
      slug: 'curly-kale-superfood-organic',
      shortDescription: 'Organic dark green kale',
      description:
        'The ultimate superfood, perfect for kale chips or healthy smoothies.',
      price: 48.0,
      oldPrice: 55.0,
      stock: 60,
      categorySlug: 'leafy-greens',
      tags: ['organic', 'healthy', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG22.png',
          alt: 'Curly Kale',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Grünkohl',
        slug: 'gruenkohl-bio',
        shortDescription: 'Bio-Grünkohl',
        description: 'Das ultimative Superfood.',
      },
    },
    {
      name: 'Endive Salad',
      slug: 'endive-salad-fresh-seasonal',
      shortDescription: 'Slightly bitter leafy endive',
      description: 'Classic winter salad with a sophisticated bitter profile.',
      price: 38.0,
      oldPrice: 45.0,
      stock: 45,
      categorySlug: 'leafy-greens',
      tags: ['seasonal', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG52.png',
          alt: 'Endive',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Endiviensalat',
        slug: 'endivie-frisch',
        shortDescription: 'Leicht bitterer Blattsalat',
        description: 'Klassischer Wintersalat.',
      },
    },
    {
      name: 'Corn Salad',
      slug: 'lambs-lettuce-fresh-local',
      shortDescription: 'Tender nutty corn salad',
      description:
        'Small dark green leaves with a unique nutty flavor. Also known as Lamb’s lettuce.',
      price: 52.0,
      oldPrice: 60.0,
      stock: 40,
      categorySlug: 'leafy-greens',
      tags: ['local', 'fresh', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG10.png',
          alt: 'Corn Salad',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Feldsalat',
        slug: 'feldsalat-lokal',
        shortDescription: 'Zarter nussiger Feldsalat',
        description: 'Kleine dunkelgrüne Blätter.',
      },
    },
    {
      name: 'Red Oak Leaf',
      slug: 'red-oak-leaf-lettuce-fresh',
      shortDescription: 'Soft burgundy oak leaf lettuce',
      description: 'Beautiful red frilly leaves, mild and buttery taste.',
      price: 34.0,
      oldPrice: 40.0,
      stock: 55,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG5214.png',
          alt: 'Oak Leaf',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Roter Eichblattsalat',
        slug: 'eichblattsalat-rot',
        shortDescription: 'Weicher burgunderroter Salat',
        description: 'Milder und butteriger Geschmack.',
      },
    },
    {
      name: 'Pak Choi Baby',
      slug: 'baby-pak-choi-asian-fresh',
      shortDescription: 'Tender mini Chinese cabbage',
      description: 'Perfect for quick stir-fries or steaming whole.',
      price: 58.0,
      oldPrice: 0,
      stock: 40,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'healthy', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cabbage/cabbage_PNG8814.png',
          alt: 'Pak Choi',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Baby Pak Choi',
        slug: 'baby-pak-choi',
        shortDescription: 'Zarter Mini-Chinakohl',
        description: 'Ideal zum schnellen Anbraten.',
      },
    },
    {
      name: 'Radicchio Head',
      slug: 'radicchio-red-bitter-fresh',
      shortDescription: 'Bold bitter red Italian lettuce',
      description:
        'Crunchy red and white leaves, adds a spicy kick to mixed salads.',
      price: 42.0,
      oldPrice: 50.0,
      stock: 65,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'seasonal', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG5214.png',
          alt: 'Radicchio',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Radicchio',
        slug: 'radicchio-frisch',
        shortDescription: 'Kräftiger bitterer roter Salat',
        description: 'Knackige rot-weiße Blätter.',
      },
    },
    {
      name: 'Watercress Bunches',
      slug: 'watercress-fresh-super-healthy',
      shortDescription: 'Peppery small green leaves',
      description: 'Very high in vitamins, great for sandwiches or soups.',
      price: 45.0,
      oldPrice: 55.0,
      stock: 30,
      categorySlug: 'leafy-greens',
      tags: ['healthy', 'fresh', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/parsley/parsley_PNG12.png',
          alt: 'Watercress',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Brunnenkresse',
        slug: 'brunnenkresse-frisch',
        shortDescription: 'Pfeffrige kleine Blätter',
        description: 'Sehr hoher Vitamin-Gehalt.',
      },
    },
    {
      name: 'Mustard Greens',
      slug: 'mustard-greens-spicy-leaf',
      shortDescription: 'Spicy pungent green leaves',
      description: 'Adds a mustard-like heat to your salads and sautés.',
      price: 48.0,
      oldPrice: 0,
      stock: 25,
      categorySlug: 'leafy-greens',
      tags: ['organic', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG5.png',
          alt: 'Mustard Greens',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Senfblätter',
        slug: 'senfblaetter-scharf',
        shortDescription: 'Scharfe würzige Blätter',
        description: 'Verleiht Salaten eine senfartige Schärfe.',
      },
    },
    {
      name: 'Red Chard',
      slug: 'red-swiss-chard-organic',
      shortDescription: 'Green leaves with red stems',
      description: 'Beautiful rainbow chard variety, earthy and delicious.',
      price: 54.0,
      oldPrice: 65.0,
      stock: 40,
      categorySlug: 'leafy-greens',
      tags: ['organic', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG10.png',
          alt: 'Red Chard',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Roter Mangold',
        slug: 'mangold-rot-bio',
        shortDescription: 'Grüne Blätter mit roten Stielen',
        description: 'Erdig und köstlich.',
      },
    },
    {
      name: 'Mizuna Salad',
      slug: 'mizuna-japanese-salad-leaf',
      shortDescription: 'Mild Japanese feathery greens',
      description: 'A decorative and tasty Japanese leaf used in mixed salads.',
      price: 59.0,
      oldPrice: 70.0,
      stock: 35,
      categorySlug: 'leafy-greens',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/parsley/parsley_PNG12.png',
          alt: 'Mizuna',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Mizuna Salat',
        slug: 'mizuna-salat',
        shortDescription: 'Milder japanischer Salat',
        description: 'Dekorative japanische Blätter.',
      },
    },
    {
      name: 'Habenero Orange',
      slug: 'habanero-orange-extreme',
      shortDescription: 'Fruit-flavored extra hot chili',
      description:
        'Bright orange habanero peppers with a tropical aroma and intense heat.',
      price: 42.0,
      oldPrice: 50.0,
      stock: 35,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'premium', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG25.png',
          alt: 'Habanero Orange',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Habanero Orange',
        slug: 'habanero-orange-extrem',
        shortDescription: 'Fruchtiger extrascharfer Chili',
        description: 'Leuchtend orangefarbene Habaneros mit tropischem Aroma.',
      },
    },
    {
      name: 'Green Zebra Tomato',
      slug: 'green-zebra-tomato-unique',
      shortDescription: 'Tangy emerald striped tomato',
      description:
        'A gourmet green tomato with yellow stripes and a refreshingly tart flavor.',
      price: 78.0,
      oldPrice: 90.0,
      stock: 40,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'organic', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12589.png',
          alt: 'Green Zebra',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Green Zebra Tomate',
        slug: 'green-zebra-tomate-einzigartig',
        shortDescription: 'Pikante smaragdgestreifte Tomate',
        description: 'Gourmet-Tomate mit gelben Streifen.',
      },
    },
    {
      name: 'Cubanelle Pepper',
      slug: 'cubanelle-sweet-fryer',
      shortDescription: 'Mild pepper for frying',
      description:
        'Also known as the Italian frying pepper, it has a thin skin and mild heat.',
      price: 52.0,
      oldPrice: 0,
      stock: 110,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3232.png',
          alt: 'Cubanelle',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Cubanelle Paprika',
        slug: 'cubanelle-bratpaprika',
        shortDescription: 'Milde Paprika zum Braten',
        description: 'Dünnhäutige Paprika, ideal für die Pfanne.',
      },
    },
    {
      name: 'Kumato Black Tomato',
      slug: 'kumato-black-premium-box',
      shortDescription: 'Dark juicy gourmet tomato',
      description:
        'Distinctive brownish-red skin with an exceptionally sweet and intense taste.',
      price: 88.0,
      oldPrice: 110.0,
      stock: 55,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12590.png',
          alt: 'Kumato',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Kumato Tomate',
        slug: 'kumato-schwarz-premium',
        shortDescription: 'Dunkle saftige Gourmet-Tomate',
        description: 'Außergewöhnlich süßer und intensiver Geschmack.',
      },
    },
    {
      name: 'Serrano Chili',
      slug: 'serrano-chili-fresh-green',
      shortDescription: 'Spicy Mexican green chili',
      description:
        'Hotter than jalapeños, perfect for making fresh pico de gallo salsa.',
      price: 28.0,
      oldPrice: 35.0,
      stock: 180,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG1245.png',
          alt: 'Serrano',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Serrano Chili',
        slug: 'serrano-chili-frisch',
        shortDescription: 'Scharfer mexikanischer Chili',
        description: 'Schärfer als Jalapeños, ideal für Salsas.',
      },
    },
    {
      name: 'Yellow Italian Pepper',
      slug: 'yellow-marconi-sweet',
      shortDescription: 'Long sweet yellow pepper',
      description:
        'Marconi-style long pepper, prized for its sweetness and crunchy texture.',
      price: 58.0,
      oldPrice: 65.0,
      stock: 95,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'seasonal', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3271.png',
          alt: 'Yellow Marconi',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gelbe Spitzpaprika',
        slug: 'gelbe-spitzpaprika-suess',
        shortDescription: 'Lange süße gelbe Paprika',
        description: 'Sehr süß und knackig.',
      },
    },

    // --- ROOT VEGETABLES (root-vegetables) ---
    {
      name: 'Rainbow Carrots',
      slug: 'rainbow-carrots-organic-mix',
      shortDescription: 'Mix of purple, yellow, and white carrots',
      description: 'Beautiful bunch of heirloom carrots in various colors.',
      price: 72.0,
      oldPrice: 85.0,
      stock: 50,
      categorySlug: 'root-vegetables',
      tags: ['organic', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/carrot/carrot_PNG4980.png',
          alt: 'Rainbow Carrots',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Regenbogenkarotten',
        slug: 'regenbogen-moehren-bio',
        shortDescription: 'Bunter Karotten-Mix',
        description: 'Mischung aus violetten, gelben und weißen Karotten.',
      },
    },
    {
      name: 'Purple Kohlrabi',
      slug: 'purple-kohlrabi-seasonal-local',
      shortDescription: 'Striking purple skin vegetable',
      description:
        'Mild, sweet cabbage-like flavor with a crisp white interior.',
      price: 32.0,
      oldPrice: 40.0,
      stock: 65,
      categorySlug: 'root-vegetables',
      tags: ['local', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cabbage/cabbage_PNG8814.png',
          alt: 'Purple Kohlrabi',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Roter Kohlrabi',
        slug: 'roter-kohlrabi-lokal',
        shortDescription: 'Gemüse mit violetter Schale',
        description: 'Milder, süßer Geschmack.',
      },
    },
    {
      name: 'Turnip',
      slug: 'white-turnip-fresh-root',
      shortDescription: 'Classic purple-top turnip',
      description: 'Traditional root vegetable, great for stews or mashing.',
      price: 24.0,
      oldPrice: 30.0,
      stock: 140,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/beet/beet_PNG28.png',
          alt: 'Turnip',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Speiserübe',
        slug: 'speiseruebe-frisch',
        shortDescription: 'Klassische Mairübe',
        description: 'Traditionelles Wurzelgemüse für Eintöpfe.',
      },
    },
    {
      name: 'Golden Beets',
      slug: 'golden-beets-sweet-organic',
      shortDescription: 'Mild sweet yellow beets',
      description:
        'Less earthy than red beets, these yellow varieties are very sweet.',
      price: 48.0,
      oldPrice: 55.0,
      stock: 45,
      categorySlug: 'root-vegetables',
      tags: ['organic', 'fresh', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/beet/beet_PNG28.png',
          alt: 'Golden Beets',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gelbe Bete',
        slug: 'gelbe-bete-bio',
        shortDescription: 'Milde süße gelbe Bete',
        description: 'Weniger erdig als rote Bete.',
      },
    },
    {
      name: 'Rutabaga',
      slug: 'rutabaga-winter-root-large',
      shortDescription: 'Hardy winter root vegetable',
      description:
        'A cross between a cabbage and a turnip, perfect for roasting.',
      price: 28.0,
      oldPrice: 0,
      stock: 90,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/potato/potato_PNG493.png',
          alt: 'Rutabaga',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Steckrübe',
        slug: 'steckruebe-winter',
        shortDescription: 'Robustes Winterwurzelgemüse',
        description: 'Ideal zum Rösten oder für Eintöpfe.',
      },
    },
    {
      name: 'Yam',
      slug: 'fresh-yam-root-premium',
      shortDescription: 'Starchy tropical root',
      description: 'Authentic tropical yam, excellent for boiling or frying.',
      price: 95.0,
      oldPrice: 110.0,
      stock: 30,
      categorySlug: 'root-vegetables',
      tags: ['premium', 'healthy', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/potato/potato_PNG493.png',
          alt: 'Yam',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Yamswurzel',
        slug: 'yams-frisch',
        shortDescription: 'Stärkehaltige Tropenwurzel',
        description: 'Hervorragend zum Kochen oder Braten.',
      },
    },

    // --- LEAFY GREENS (leafy-greens) ---
    {
      name: 'Lollo Bionda',
      slug: 'lollo-bionda-lettuce-green',
      shortDescription: 'Curly green leaf lettuce',
      description: 'The green version of Lollo Rosso, very curly and mild.',
      price: 32.0,
      oldPrice: 38.0,
      stock: 75,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG5211.png',
          alt: 'Lollo Bionda',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Lollo Bionda',
        slug: 'lollo-bionda-gruen',
        shortDescription: 'Krauser grüner Blattsalat',
        description: 'Sehr dekorativ und mild im Geschmack.',
      },
    },
    {
      name: 'Red Oak Lettuce',
      slug: 'red-oak-leaf-organic-fresh',
      shortDescription: 'Burgundy oak-shaped leaves',
      description:
        'Nutty flavor and beautiful red leaves, perfect for mixed salads.',
      price: 36.0,
      oldPrice: 42.0,
      stock: 60,
      categorySlug: 'leafy-greens',
      tags: ['organic', 'fresh', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG5214.png',
          alt: 'Red Oak',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Eichblattsalat Rot',
        slug: 'eichblattsalat-rot-bio',
        shortDescription: 'Burgunderfarbene Blätter',
        description: 'Nussiger Geschmack.',
      },
    },
    {
      name: 'Tatsoi',
      slug: 'tatsoi-spoon-mustard-green',
      shortDescription: 'Spoon-shaped oriental green',
      description:
        'A close relative of Pak Choi with a mild, buttery mustard flavor.',
      price: 55.0,
      oldPrice: 0,
      stock: 40,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG22.png',
          alt: 'Tatsoi',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Tatsoi',
        slug: 'tatsoi-senf-gemuese',
        shortDescription: 'Löffelförmiges Asia-Gemüse',
        description: 'Milder, buttriger Senfgeschmack.',
      },
    },
    {
      name: 'Sorrel',
      slug: 'fresh-sorrel-leaves-tangy',
      shortDescription: 'Tart and lemony green leaves',
      description:
        'Traditional herb-like leaf used for soups and tangy salads.',
      price: 45.0,
      oldPrice: 55.0,
      stock: 50,
      categorySlug: 'leafy-greens',
      tags: ['seasonal', 'local', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG12.png',
          alt: 'Sorrel',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Sauerampfer',
        slug: 'sauerampfer-frisch',
        shortDescription: 'Zitronig-saure Blätter',
        description: 'Traditionell für Suppen verwendet.',
      },
    },
    {
      name: 'Red Veined Spinach',
      slug: 'red-veined-spinach-special',
      shortDescription: 'Decorative red-stemmed spinach',
      description: 'Tender baby spinach leaves with striking red veins.',
      price: 62.0,
      oldPrice: 75.0,
      stock: 30,
      categorySlug: 'leafy-greens',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG12.png',
          alt: 'Red Vein Spinach',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rotschnitt-Spinat',
        slug: 'rotschnitt-spinat-besonder',
        shortDescription: 'Dekorativer Spinat',
        description: 'Zarte Blätter mit roten Adern.',
      },
    },
    {
      name: 'Dandelion Greens',
      slug: 'dandelion-greens-bitter-detox',
      shortDescription: 'Nutrient-rich bitter leaves',
      description:
        'Slightly bitter greens, prized for their health and detox benefits.',
      price: 48.0,
      oldPrice: 0,
      stock: 25,
      categorySlug: 'leafy-greens',
      tags: ['healthy', 'organic', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG5.png',
          alt: 'Dandelion',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Löwenzahnsalat',
        slug: 'loewenzahn-frisch-bio',
        shortDescription: 'Nährstoffreiche bittere Blätter',
        description: 'Geschätzt für Detox-Vorteile.',
      },
    },

    // --- MIXED VEGETABLES (vegetables) ---
    {
      name: 'Brussels Sprouts',
      slug: 'brussels-sprouts-fresh-stalk',
      shortDescription: 'Miniature cabbage-like buds',
      description:
        'Fresh sprouts, excellent when roasted with balsamic or honey.',
      price: 45.0,
      oldPrice: 55.0,
      stock: 120,
      categorySlug: 'vegetables',
      tags: ['fresh', 'seasonal', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cabbage/cabbage_PNG8814.png',
          alt: 'Brussels Sprouts',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rosenkohl',
        slug: 'rosenkohl-frisch',
        shortDescription: 'Kleine Kohlsprossen',
        description: 'Hervorragend zum Rösten.',
      },
    },
    {
      name: 'Artichoke Large',
      slug: 'globe-artichoke-premium-fresh',
      shortDescription: 'Large green globe artichoke',
      description:
        'Gourmet flower bud, perfect for steaming and dipping in butter.',
      price: 130.0,
      oldPrice: 160.0,
      stock: 20,
      categorySlug: 'vegetables',
      tags: ['premium', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/asparagus/asparagus_PNG12.png',
          alt: 'Artichoke',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Artischocke Groß',
        slug: 'artischocke-premium',
        shortDescription: 'Große grüne Artischocke',
        description: 'Gourmet-Blütenknospe.',
      },
    },
    {
      name: 'Sugar Snap Peas',
      slug: 'sugar-snap-peas-crisp-sweet',
      shortDescription: 'Edible pod sweet peas',
      description:
        'Crunchy and sweet, eat the whole pod as a snack or stir-fry ingredient.',
      price: 85.0,
      oldPrice: 100.0,
      stock: 55,
      categorySlug: 'vegetables',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/peas/peas_PNG23.png',
          alt: 'Snap Peas',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Zuckerschoten',
        slug: 'zuckerschoten-frisch',
        shortDescription: 'Essbare süße Erbsen',
        description: 'Knackig und süß.',
      },
    },
    {
      name: 'Butternut Squash',
      slug: 'butternut-squash-organic-whole',
      shortDescription: 'Sweet and nutty winter squash',
      description:
        'Smooth skin and dense orange flesh, ideal for creamy soups.',
      price: 50.0,
      oldPrice: 60.0,
      stock: 80,
      categorySlug: 'vegetables',
      tags: ['organic', 'healthy', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Butternut',
          isMain: true,
          order: 1,
        },
      ], // Заглушка
      translation: {
        locale: 'de',
        name: 'Butternuss-Kürbis',
        slug: 'butternuss-kuerbis-bio',
        shortDescription: 'Nussiger Winterkürbis',
        description: 'Ideal für cremige Suppen.',
      },
    },
    {
      name: 'Fennel Bulb',
      slug: 'fresh-fennel-bulb-aromatic',
      shortDescription: 'Anise-flavored crunchy bulb',
      description:
        'Sweet and aromatic, great raw in salads or braised as a side dish.',
      price: 38.0,
      oldPrice: 45.0,
      stock: 45,
      categorySlug: 'vegetables',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/onion/onion_PNG3825.png',
          alt: 'Fennel',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Fenchelknolle',
        slug: 'fenchelknolle-frisch',
        shortDescription: 'Aromatische Knolle',
        description: 'Anisartiger Geschmack.',
      },
    },
    {
      name: 'Leeks',
      slug: 'fresh-leeks-local-bundle',
      shortDescription: 'Mild onion-like stems',
      description:
        'Essential for soups and quiches, with a subtle sweet onion flavor.',
      price: 30.0,
      oldPrice: 0,
      stock: 130,
      categorySlug: 'vegetables',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/onion/onion_PNG3825.png',
          alt: 'Leeks',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Lauch',
        slug: 'lauch-frisch-lokal',
        shortDescription: 'Milde Zwiebelgewächse',
        description: 'Unverzichtbar für Suppen.',
      },
    },
    {
      name: 'Radicchio Treviso',
      slug: 'radicchio-treviso-long-premium',
      shortDescription: 'Long Italian bitter lettuce',
      description:
        'Elegant long leaves with a bitter profile, perfect for grilling.',
      price: 68.0,
      oldPrice: 80.0,
      stock: 25,
      categorySlug: 'leafy-greens',
      tags: ['premium', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG5214.png',
          alt: 'Treviso',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Radicchio Treviso',
        slug: 'radicchio-treviso-premium',
        shortDescription: 'Langer italienischer Salat',
        description: 'Elegant und bitter.',
      },
    },
    {
      name: 'Savoy Cabbage',
      slug: 'savoy-cabbage-crinkled-head',
      shortDescription: 'Beautiful crinkled leaf cabbage',
      description:
        'Mild flavor and flexible leaves, perfect for making cabbage rolls.',
      price: 40.0,
      oldPrice: 48.0,
      stock: 50,
      categorySlug: 'vegetables',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/cabbage/cabbage_PNG8814.png',
          alt: 'Savoy Cabbage',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Wirsing',
        slug: 'wirsing-frisch',
        shortDescription: 'Gekräuselter Kohlkopf',
        description: 'Ideal für Kohlrouladen.',
      },
    },
    {
      name: 'White Asparagus',
      slug: 'white-asparagus-premium-royal',
      shortDescription: 'Tender white royal asparagus',
      description: 'The "white gold" of spring, exceptionally tender and mild.',
      price: 180.0,
      oldPrice: 220.0,
      stock: 40,
      categorySlug: 'vegetables',
      tags: ['premium', 'seasonal', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/asparagus/asparagus_PNG12.png',
          alt: 'White Asparagus',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Weißer Spargel',
        slug: 'weisser-spargel-premium',
        shortDescription: 'Zarter königlicher Spargel',
        description: 'Das "weiße Gold" des Frühlings.',
      },
    },
    {
      name: 'Romanesco Broccoli',
      slug: 'romanesco-broccoli-fractal-green',
      shortDescription: 'Fractal patterned cauliflower',
      description:
        'Visually stunning and nutty flavor, a mix between broccoli and cauliflower.',
      price: 85.0,
      oldPrice: 100.0,
      stock: 35,
      categorySlug: 'vegetables',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/broccoli/broccoli_PNG2829.png',
          alt: 'Romanesco',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Romanesco',
        slug: 'romanesco-frisch',
        shortDescription: 'Fraktaler Blumenkohl',
        description: 'Nussiger Geschmack.',
      },
    },
    {
      name: 'Red Currant Tomatoes',
      slug: 'red-currant-tomatoes-tiny',
      shortDescription: 'Smallest pea-sized tomatoes',
      description: 'Incredibly tiny and sweet tomatoes, perfect for garnish.',
      price: 110.0,
      oldPrice: 0,
      stock: 20,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'seasonal', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12589.png',
          alt: 'Currant Tomato',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Johannisbeertomaten',
        slug: 'johannisbeertomaten-klein',
        shortDescription: 'Erbsengroße Tomaten',
        description: 'Unglaublich süß.',
      },
    },
    {
      name: 'Spring Garlic',
      slug: 'spring-garlic-green-local',
      shortDescription: 'Immature mild green garlic',
      description:
        'Looks like a leek but has a mild garlic flavor, available only in spring.',
      price: 35.0,
      oldPrice: 42.0,
      stock: 60,
      categorySlug: 'root-vegetables',
      tags: ['seasonal', 'local', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/garlic/garlic_PNG12739.png',
          alt: 'Spring Garlic',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Knoblauchgrün',
        slug: 'knoblauchgruen-fruehling',
        shortDescription: 'Milder grüner Knoblauch',
        description: 'Nur im Frühling verfügbar.',
      },
    },
    {
      name: 'Thai Bird Eye Chili',
      slug: 'thai-bird-eye-chili-red',
      shortDescription: 'Very hot small red chilies',
      description:
        'Small but extremely fiery chilies, essential for authentic Thai curries.',
      price: 35.0,
      oldPrice: 45.0,
      stock: 150,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG25.png',
          alt: 'Thai Chili',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Thai-Chili',
        slug: 'thai-chili-rot-scharf',
        shortDescription: 'Sehr scharfe kleine rote Chilis',
        description: 'Kleine, aber extrem feurige Chilis.',
      },
    },
    {
      name: 'Oxheart Tomato',
      slug: 'oxheart-tomato-giant-local',
      shortDescription: 'Large heart-shaped tomato',
      description:
        'Fleshy and aromatic tomatoes with very few seeds, ideal for slicing.',
      price: 90.0,
      oldPrice: 110.0,
      stock: 25,
      categorySlug: 'tomatoes-peppers',
      tags: ['local', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Oxheart',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Ochsenherztomate',
        slug: 'ochsenherztomate-riesig',
        shortDescription: 'Große herzförmige Tomate',
        description: 'Fleischig und aromatisch mit wenigen Samen.',
      },
    },
    {
      name: 'Anaheim Pepper',
      slug: 'anaheim-pepper-mild-green',
      shortDescription: 'Mild long green pepper',
      description:
        'Versatile mild chili, perfect for stuffing or making mild salsas.',
      price: 45.0,
      oldPrice: 0,
      stock: 100,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'healthy', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3232.png',
          alt: 'Anaheim',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Anaheim-Paprika',
        slug: 'anaheim-paprika-mild',
        shortDescription: 'Milde lange grüne Paprika',
        description: 'Vielseitige milde Chili.',
      },
    },

    // --- ROOT VEGETABLES (root-vegetables) ---
    {
      name: 'Lotus Root',
      slug: 'lotus-root-exotic-fresh',
      shortDescription: 'Crunchy exotic root slice',
      description:
        'Unique patterned root with a crunchy texture, great for stir-fries and chips.',
      price: 160.0,
      oldPrice: 190.0,
      stock: 15,
      categorySlug: 'root-vegetables',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/potato/potato_PNG493.png',
          alt: 'Lotus Root',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Lotuswurzel',
        slug: 'lotuswurzel-exotisch',
        shortDescription: 'Knackige exotische Wurzel',
        description: 'Einzigartig gemusterte Wurzel.',
      },
    },
    {
      name: 'Yellow Carrots',
      slug: 'yellow-carrots-sweet-local',
      shortDescription: 'Mildly sweet yellow carrots',
      description:
        'Heirloom variety with a bright yellow color and crunchy texture.',
      price: 30.0,
      oldPrice: 35.0,
      stock: 200,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/carrot/carrot_PNG4980.png',
          alt: 'Yellow Carrots',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Gelbe Möhren',
        slug: 'gelbe-moehren-frisch',
        shortDescription: 'Mild-süße gelbe Karotten',
        description: 'Alte Sorte mit leuchtend gelber Farbe.',
      },
    },
    {
      name: 'Burdock Root',
      slug: 'burdock-root-gobo-fresh',
      shortDescription: 'Slender earthy herbal root',
      description:
        'Common in Japanese cuisine (Gobo), known for its earthy flavor and health benefits.',
      price: 120.0,
      oldPrice: 0,
      stock: 20,
      categorySlug: 'root-vegetables',
      tags: ['premium', 'healthy', 'organic'],
      images: [
        {
          url: 'https://pngimg.com/uploads/ginger/ginger_PNG12.png',
          alt: 'Burdock',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Klettenwurzel',
        slug: 'klettenwurzel-gobo',
        shortDescription: 'Schlanke erdige Wurzel',
        description: 'Bekannt aus der japanischen Küche.',
      },
    },

    // --- LEAFY GREENS (leafy-greens) ---
    {
      name: 'Microgreens Mix',
      slug: 'microgreens-mix-nutrient-box',
      shortDescription: 'Tiny nutrient-dense seedlings',
      description:
        'Young vegetable greens that are approximately 1–3 inches tall, packed with vitamins.',
      price: 75.0,
      oldPrice: 90.0,
      stock: 40,
      categorySlug: 'leafy-greens',
      tags: ['healthy', 'premium', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG22.png',
          alt: 'Microgreens',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Microgreens-Mix',
        slug: 'microgreens-mix-naehrstoff',
        shortDescription: 'Kleine nährstoffreiche Keimlinge',
        description: 'Junges Gemüse voller Vitamine.',
      },
    },
    {
      name: 'Mustard Spinach (Komatsuna)',
      slug: 'mustard-spinach-komatsuna-fresh',
      shortDescription: 'Mild Asian leafy green',
      description:
        'Versatile green with a taste between spinach and mustard greens.',
      price: 55.0,
      oldPrice: 65.0,
      stock: 50,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'healthy', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG12.png',
          alt: 'Komatsuna',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Senfspinat',
        slug: 'senfspinat-komatsuna',
        shortDescription: 'Mildes asiatisches Blattgemüse',
        description: 'Geschmack zwischen Spinat und Senf.',
      },
    },
    {
      name: 'Belgian Endive',
      slug: 'belgian-endive-white-chicory',
      shortDescription: 'Crisp white chicory heads',
      description:
        'Small, cylindrical heads with creamy white leaves and a slightly bitter taste.',
      price: 68.0,
      oldPrice: 80.0,
      stock: 60,
      categorySlug: 'leafy-greens',
      tags: ['seasonal', 'premium', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG52.png',
          alt: 'Endive',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Chicorée Weiß',
        slug: 'chicoree-weiss-belgisch',
        shortDescription: 'Knackige weiße Chicorée-Köpfe',
        description: 'Leicht bitterer Geschmack.',
      },
    },

    // --- GENERAL VEGETABLES (vegetables) ---
    {
      name: 'Okra (Lady Fingers)',
      slug: 'okra-lady-fingers-fresh',
      shortDescription: 'Fresh green seed pods',
      description:
        'Excellent for thickening stews or frying, a staple in Southern and Indian cooking.',
      price: 110.0,
      oldPrice: 130.0,
      stock: 45,
      categorySlug: 'vegetables',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/asparagus/asparagus_PNG12.png',
          alt: 'Okra',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Okra',
        slug: 'okra-frisch',
        shortDescription: 'Frische grüne Schoten',
        description: 'Ideal für Eintöpfe oder zum Braten.',
      },
    },
    {
      name: 'Bitter Melon',
      slug: 'bitter-melon-gourd-fresh',
      shortDescription: 'Extra bitter medicinal vegetable',
      description:
        'Known for its distinct bitter flavor and numerous health benefits.',
      price: 95.0,
      oldPrice: 0,
      stock: 30,
      categorySlug: 'vegetables',
      tags: ['healthy', 'organic', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/zucchini/zucchini_PNG1245.png',
          alt: 'Bitter Melon',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Bittermelone',
        slug: 'bittermelone-frisch',
        shortDescription: 'Bitteres Heilgemüse',
        description: 'Bekannt für gesundheitliche Vorteile.',
      },
    },
    {
      name: 'Pattypan Squash',
      slug: 'pattypan-squash-yellow-mini',
      shortDescription: 'Small flying saucer-shaped squash',
      description: 'Tender mini squash, perfect for roasting whole with herbs.',
      price: 58.0,
      oldPrice: 70.0,
      stock: 55,
      categorySlug: 'vegetables',
      tags: ['seasonal', 'fresh', 'local'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Pattypan',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Pattisons',
        slug: 'pattison-kuerbis-mini',
        shortDescription: 'Kleiner ufo-förmiger Kürbis',
        description: 'Zarter Minikürbis zum Rösten.',
      },
    },
    {
      name: 'Chayote',
      slug: 'chayote-mexican-squash-fresh',
      shortDescription: 'Mild pear-shaped squash',
      description:
        'Crisp vegetable with a mild taste similar to cucumber or zucchini.',
      price: 48.0,
      oldPrice: 55.0,
      stock: 65,
      categorySlug: 'vegetables',
      tags: ['fresh', 'healthy', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pear/pear_PNG3475.png',
          alt: 'Chayote',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Chayote',
        slug: 'chayote-frisch',
        shortDescription: 'Milder birnenförmiger Kürbis',
        description: 'Knackig und mild.',
      },
    },
    {
      name: 'Spaghetti Squash',
      slug: 'spaghetti-squash-large-yellow',
      shortDescription: 'Pasta-like yellow squash',
      description: 'Flesh separates into noodle-like strands when cooked.',
      price: 60.0,
      oldPrice: 75.0,
      stock: 40,
      categorySlug: 'vegetables',
      tags: ['healthy', 'seasonal', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Spaghetti Squash',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Spaghettikürbis',
        slug: 'spaghettikuerbis-gelb',
        shortDescription: 'Nudelartiger gelber Kürbis',
        description: 'Fruchtfleisch wird wie Nudeln.',
      },
    },
    {
      name: 'Bamboo Shoots',
      slug: 'bamboo-shoots-fresh-tender',
      shortDescription: 'Crunchy young bamboo stalks',
      description: 'Common in Asian stir-fries, providing a unique crunch.',
      price: 140.0,
      oldPrice: 170.0,
      stock: 25,
      categorySlug: 'vegetables',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/asparagus/asparagus_PNG12.png',
          alt: 'Bamboo',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Bambussprossen',
        slug: 'bambussprossen-frisch',
        shortDescription: 'Knackige junge Bambustriebe',
        description: 'Ideal für Pfannengerichte.',
      },
    },
    {
      name: 'Purple Broccoli',
      slug: 'purple-sprouting-broccoli-seasonal',
      shortDescription: 'Vibrant purple broccoli stems',
      description:
        'A colorful and slightly sweeter version of traditional broccoli.',
      price: 72.0,
      oldPrice: 85.0,
      stock: 35,
      categorySlug: 'vegetables',
      tags: ['seasonal', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/broccoli/broccoli_PNG2829.png',
          alt: 'Purple Broccoli',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Lila Brokkoli',
        slug: 'lila-brokkoli-saisonal',
        shortDescription: 'Farbenfroher violetter Brokkoli',
        description: 'Etwas süßer als grüner Brokkoli.',
      },
    },
    {
      name: 'Daikon Greens',
      slug: 'daikon-leafy-greens-fresh',
      shortDescription: 'Nutritious radish leaves',
      description:
        'Edible green tops of the daikon radish, excellent for sautéing.',
      price: 30.0,
      oldPrice: 0,
      stock: 50,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'healthy', 'organic'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG12.png',
          alt: 'Daikon Greens',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Rettichgrün',
        slug: 'rettichgruen-frisch',
        shortDescription: 'Nährstoffreiche Rettichblätter',
        description: 'Essbares Grün vom Daikon.',
      },
    },
    {
      name: 'Kohlrabi Microgreens',
      slug: 'kohlrabi-micro-greens-live',
      shortDescription: 'Live purple micro kohlrabi',
      description:
        'Highly concentrated nutrients in tiny, beautiful purple stems.',
      price: 85.0,
      oldPrice: 100.0,
      stock: 20,
      categorySlug: 'leafy-greens',
      tags: ['premium', 'healthy', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG22.png',
          alt: 'Kohlrabi Micro',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Kohlrabi-Microgreens',
        slug: 'kohlrabi-microgreens-frisch',
        shortDescription: 'Lebendige lila Microgreens',
        description: 'Hochkonzentrierte Nährstoffe.',
      },
    },
    {
      name: 'Edamame Pods',
      slug: 'edamame-fresh-green-pods',
      shortDescription: 'Fresh young soybeans',
      description: 'Perfect steamed with sea salt for a protein-rich snack.',
      price: 98.0,
      oldPrice: 120.0,
      stock: 45,
      categorySlug: 'vegetables',
      tags: ['healthy', 'fresh', 'premium'],
      images: [
        {
          url: 'https://pngimg.com/uploads/peas/peas_PNG23.png',
          alt: 'Edamame',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Edamame',
        slug: 'edamame-frisch-schoten',
        shortDescription: 'Frische junge Sojabohnen',
        description: 'Proteinreicher Snack.',
      },
    },
    {
      name: 'Parsnip Mini',
      slug: 'mini-parsnips-sweet-local',
      shortDescription: 'Sweet tender small parsnips',
      description: 'Baby-sized parsnips that are extra sweet and tender.',
      price: 52.0,
      oldPrice: 60.0,
      stock: 50,
      categorySlug: 'root-vegetables',
      tags: ['local', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/parsley/parsley_PNG12.png',
          alt: 'Mini Parsnip',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Minipastinaken',
        slug: 'minipastinaken-suess',
        shortDescription: 'Süße zarte kleine Pastinaken',
        description: 'Besonders süße Baby-Variante.',
      },
    },
    {
      name: 'Radicchio Castelfranco',
      slug: 'radicchio-castelfranco-variegated',
      shortDescription: 'Spotted "tulip" lettuce',
      description:
        'Known for its beautiful cream leaves with red spots and mild taste.',
      price: 115.0,
      oldPrice: 140.0,
      stock: 15,
      categorySlug: 'leafy-greens',
      tags: ['premium', 'fresh', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG52.png',
          alt: 'Castelfranco',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Radicchio Castelfranco',
        slug: 'radicchio-castelfranco-premium',
        shortDescription: 'Gepunkteter Edelsalat',
        description: 'Wunderschöne cremefarbene Blätter.',
      },
    },
    {
      name: 'Savoy Spinach',
      slug: 'savoy-spinach-crinkled-leaf',
      shortDescription: 'Thick crinkled spinach leaves',
      description: 'More texture and deeper flavor than flat-leaf spinach.',
      price: 42.0,
      oldPrice: 50.0,
      stock: 70,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'organic', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG12.png',
          alt: 'Savoy Spinach',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Savoy-Spinat',
        slug: 'savoy-spinat-bio',
        shortDescription: 'Dickblättriger Spinat',
        description: 'Gekräuselte Blätter mit tiefem Aroma.',
      },
    },
    {
      name: 'Long White Onions',
      slug: 'long-white-calçot-onions',
      shortDescription: 'Spanish-style grill onions',
      description: 'Similar to Calçots, perfect for roasting on an open flame.',
      price: 38.0,
      oldPrice: 45.0,
      stock: 110,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'local', 'seasonal'],
      images: [
        {
          url: 'https://pngimg.com/uploads/onion/onion_PNG3825.png',
          alt: 'Calcot',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Calçot-Zwiebeln',
        slug: 'calcots-zwiebeln-frisch',
        shortDescription: 'Lange weiße Grillzwiebeln',
        description: 'Ideal zum Grillen über offener Flamme.',
      },
    },
    {
      name: 'Red Leaf Chicory',
      slug: 'red-leaf-chicory-bitter',
      shortDescription: 'Bold bitter winter green',
      description:
        'Deep red color and strong bitterness, ideal for winter salads.',
      price: 55.0,
      oldPrice: 0,
      stock: 45,
      categorySlug: 'leafy-greens',
      tags: ['seasonal', 'healthy', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/lettuce/lettuce_PNG52.png',
          alt: 'Chicory',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Roter Chicorée',
        slug: 'roter-chicoree-saisonal',
        shortDescription: 'Kräftig-bitterer Wintersalat',
        description: 'Tiefrote Farbe.',
      },
    },
    {
      name: 'Mixed Chili Peppers',
      slug: 'mixed-chili-peppers-heat-box',
      shortDescription: 'Assorted hot peppers box',
      description:
        'A mix of jalapeño, habanero, and serrano for all levels of heat.',
      price: 65.0,
      oldPrice: 80.0,
      stock: 90,
      brand: 'Forest Fresh',
      country: 'China',
      isActive: true,
      categorySlug: 'tomatoes-peppers',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/chili_pepper/chili_pepper_PNG25.png',
          alt: 'Mixed Chili',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Chili-Mix Box',
        slug: 'chili-mix-box-scharf',
        shortDescription: 'Sortierte scharfe Paprika',
        description: 'Mischung verschiedener Schärfegrade.',
      },
    },
    {
      name: 'Purple Thai Eggplant',
      slug: 'thai-eggplant-purple-mini',
      shortDescription: 'Round small purple eggplant',
      description: 'Golf ball-sized eggplants used in Asian curries.',
      price: 78.0,
      oldPrice: 95.0,
      stock: 40,
      brand: 'Forest Fresh',
      country: 'China',
      isActive: true,
      categorySlug: 'vegetables',
      tags: ['fresh', 'premium', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/eggplant/eggplant_PNG2789.png',
          alt: 'Thai Eggplant',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Thai-Aubergine Lila',
        slug: 'thai-aubergine-lila-mini',
        shortDescription: 'Runde kleine lila Aubergine',
        description: 'Perfekt für asiatische Currys.',
      },
    },
    {
      name: 'Wild Asparagus',
      slug: 'wild-asparagus-thin-seasonal',
      shortDescription: 'Thin forest asparagus stems',
      description:
        'Very thin, dark green, and intensely flavored seasonal asparagus.',
      price: 195.0,
      oldPrice: 230.0,
      brand: 'Forest Fresh',
      country: 'China',
      isActive: true,
      stock: 12,
      categorySlug: 'vegetables',
      tags: ['premium', 'seasonal', 'fresh'],
      images: [
        {
          url: 'https://pngimg.com/uploads/asparagus/asparagus_PNG12.png',
          alt: 'Wild Asparagus',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Wildspargel',
        slug: 'wildspargel-wald-frisch',
        shortDescription: 'Dünne Waldspargelstangen',
        description: 'Intensiv im Geschmack.',
      },
    },
    {
      name: 'Golden Turnip',
      slug: 'golden-turnip-sweet-root',
      shortDescription: 'Yellow-fleshed sweet turnip',
      description: 'A sweeter and milder version of the classic white turnip.',
      price: 36.0,
      oldPrice: 45.0,
      stock: 80,
      categorySlug: 'root-vegetables',
      tags: ['fresh', 'local', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/beet/beet_PNG28.png',
          alt: 'Golden Turnip',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Goldrübe',
        slug: 'goldruebe-frisch-suess',
        shortDescription: 'Gelbfleischige süße Rübe',
        description: 'Milder als die klassische Mairübe.',
      },
    },
    {
      name: 'Red Leaf Spinach',
      slug: 'red-leaf-spinach-oriental',
      shortDescription: 'Large oriental spinach leaves',
      description: 'Thick leaves with red center, great for steaming.',
      price: 49.0,
      oldPrice: 60.0,
      stock: 50,
      categorySlug: 'leafy-greens',
      tags: ['fresh', 'organic', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/spinach/spinach_PNG12.png',
          alt: 'Oriental Spinach',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Roter Blattspinat',
        slug: 'roter-blattspinat-oriental',
        shortDescription: 'Großer orientalischer Spinat',
        description: 'Dicke Blätter mit roter Mitte.',
      },
    },
    {
      name: 'Shishito Peppers',
      slug: 'shishito-peppers-japanese-grill',
      shortDescription: 'Wrinkled mild Japanese pepper',
      description: 'One in ten is spicy! Great for a quick pan-fry with salt.',
      price: 89.0,
      oldPrice: 110.0,
      stock: 35,
      categorySlug: 'tomatoes-peppers',
      tags: ['premium', 'fresh', 'healthy'],
      images: [
        {
          url: 'https://pngimg.com/uploads/pepper/pepper_PNG3232.png',
          alt: 'Shishito',
          isMain: true,
          order: 1,
        },
      ],
      translation: {
        locale: 'de',
        name: 'Shishito-Paprika',
        slug: 'shishito-paprika-japanisch',
        shortDescription: 'Runzelige milde Paprika',
        description: 'Ideal zum schnellen Anbraten.',
      },
    },
  ];

  // Create products with proper category references and tag connections
  for (const p of productsData) {
    const product = await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        shortDescription: p.shortDescription,
        description: p.description,
        price: p.price,
        oldPrice: p.oldPrice || null,
        stock: p.stock,

        // 👇 NEW FIELDS FOR FACETS
        brand: p.brand || 'Generic',
        country: p.country || 'Unknown',
        isActive: p.isActive ?? true,

        categories: {
          connect: [{ id: categoryMap[p.categorySlug]?.id }],
        },
        tags: {
          connect: p.tags
            .map((tagSlug) => ({ id: tagMap[tagSlug]?.id }))
            .filter((tag) => tag.id),
        },
        images: {
          create: p.images,
        },
      },
    });

    // Create product translation
    await prisma.productTranslation.create({
      data: {
        productId: product.id,
        locale: p.translation.locale,
        name: p.translation.name,
        slug: p.translation.slug,
        shortDescription: p.translation.shortDescription,
        description: p.translation.description,
      },
    });
  }

  console.log('Created products with German translations');
  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
