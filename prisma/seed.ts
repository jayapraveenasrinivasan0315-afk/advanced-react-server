import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123456', 10);
    
    const adminUser = await prisma.user.upsert({
      where: { phone: '+1234567890' },
      update: {},
      create: {
        phone: '+1234567890',
        password: hashedPassword,
        isVerified: true,
        firstName: 'Admin',
        lastName: 'User',
        avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff',
      },
    });

    console.log('✅ Created admin user:', adminUser.phone);

    // Create promo banners
    const promoBanners = await Promise.all([
      prisma.promoBanner.upsert({
        where: { id: 'banner-1' },
        update: {},
        create: {
          id: 'banner-1',
          imageUrl: 'http://100.27.250.197:3001/static/banner1.jpg',
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
          imageUrl: 'http://100.27.250.197:3001/static/banner2.png',
          title: 'Special Offer',
          description: 'Get 20% off on selected items',
          link: '/special-offers',
          isActive: true,
        },
      }),
    ]);

    console.log('✅ Created promo banners:', promoBanners.length);

    // Create categories
    const categories = [
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
    ];

    const categoryMap = {};

    for (const c of categories) {
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

    console.log('✅ Created categories:', categories.length);

    // Create tags
    const tags = [
      {
        name: 'Organic',
        slug: 'organic',
        description: 'Organically grown products',
        color: '#4CAF50',
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

    for (const t of tags) {
      const tag = await prisma.tag.upsert({
        where: { slug: t.slug },
        update: {},
        create: { ...t, isActive: true },
      });
      tagMap[t.slug] = tag;

      const deMap = {
        Organic: 'Bio',
        Fresh: 'Frisch',
        Premium: 'Premium',
        Seasonal: 'Saisonal',
        Healthy: 'Gesund',
      };

      await prisma.tagTranslation.upsert({
        where: { tagId_locale: { tagId: tag.id, locale: 'de' } },
        update: {},
        create: {
          tagId: tag.id,
          locale: 'de',
          name: deMap[t.name] || t.name,
          description: t.description,
        },
      });
    }

    console.log('✅ Created tags:', tags.length);

    // Create sample products
    const products = [
      {
        name: 'Blueberries',
        slug: 'blueberries',
        shortDescription: 'Fresh and juicy blueberries',
        description: 'Perfect for breakfast or desserts',
        price: 60.0,
        stock: 90,
        categorySlug: 'fruits',
        tags: ['fresh', 'healthy', 'seasonal'],
        images: [{
          url: 'https://pngimg.com/uploads/blueberries/blueberries_PNG4.png',
          alt: 'Blueberries',
          isMain: true,
          order: 1,
        }],
        translation: {
          name: 'Blaubeeren',
          slug: 'blaubeeren',
          shortDescription: 'Frische und saftige Blaubeeren',
          description: 'Perfekt für Frühstück oder Desserts',
        },
      },
      {
        name: 'Tomatoes',
        slug: 'tomatoes',
        shortDescription: 'Juicy red tomatoes',
        description: 'Fresh tomatoes, ideal for cooking and salads',
        price: 40.0,
        stock: 100,
        categorySlug: 'vegetables',
        tags: ['fresh', 'organic', 'healthy'],
        images: [{
          url: 'https://pngimg.com/uploads/tomato/tomato_PNG12541.png',
          alt: 'Red tomatoes',
          isMain: true,
          order: 1,
        }],
        translation: {
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
        stock: 50,
        categorySlug: 'dairy',
        tags: ['fresh', 'premium'],
        images: [{
          url: 'https://pngimg.com/uploads/butter/butter_PNG12.png',
          alt: 'Unsalted butter',
          isMain: true,
          order: 1,
        }],
        translation: {
          name: 'Butter',
          slug: 'butter',
          shortDescription: 'Cremige ungesalzene Butter',
          description: 'Frische ungesalzene Butter, perfekt zum Backen',
        },
      },
      {
        name: 'Whole Grain Bread',
        slug: 'whole-grain-bread',
        shortDescription: 'Freshly baked whole grain bread',
        description: 'Healthy bread made with organic grains and seeds',
        price: 45.0,
        stock: 30,
        categorySlug: 'bakery',
        tags: ['fresh', 'healthy'],
        images: [{
          url: 'https://pngimg.com/uploads/bread/bread_PNG2273.png',
          alt: 'Whole Grain Bread',
          isMain: true,
          order: 1,
        }],
        translation: {
          name: 'Vollkornbrot',
          slug: 'vollkornbrot',
          shortDescription: 'Frisch gebackenes Vollkornbrot',
          description: 'Gesundes Brot aus Bio-Getreide und Samen',
        },
      },
      {
        name: 'Orange Juice',
        slug: 'orange-juice',
        shortDescription: 'Freshly squeezed orange juice',
        description: '100% natural orange juice with no added sugar',
        price: 55.0,
        stock: 50,
        categorySlug: 'beverages',
        tags: ['fresh', 'healthy'],
        images: [{
          url: 'https://pngimg.com/uploads/juice/juice_PNG7156.png',
          alt: 'Orange juice',
          isMain: true,
          order: 1,
        }],
        translation: {
          name: 'Orangensaft',
          slug: 'orangensaft',
          shortDescription: 'Frisch gepresster Orangensaft',
          description: '100% natürlicher Orangensaft ohne Zuckerzusatz',
        },
      },
      {
        name: 'Salmon Fillet',
        slug: 'salmon-fillet',
        shortDescription: 'Fresh Atlantic salmon fillet',
        description: 'Rich in Omega-3, perfect for baking or pan-searing',
        price: 320.0,
        stock: 12,
        categorySlug: 'seafood',
        tags: ['fresh', 'premium'],
        images: [{
          url: 'https://pngimg.com/uploads/salmon/salmon_PNG34.png',
          alt: 'Salmon',
          isMain: true,
          order: 1,
        }],
        translation: {
          name: 'Lachsfilet',
          slug: 'lachsfilet',
          shortDescription: 'Frisches Atlantik-Lachsfilet',
          description: 'Reich an Omega-3, perfekt zum Backen oder Anbraten',
        },
      },
    ];

    for (const p of products) {
      const product = await prisma.product.upsert({
        where: { slug: p.slug },
        update: {},
        create: {
          name: p.name,
          slug: p.slug,
          shortDescription: p.shortDescription,
          description: p.description,
          price: p.price,
          oldPrice: null,
          stock: p.stock,
          brand: 'Fresh Market',
          country: 'Local',
          isActive: true,
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

      await prisma.productTranslation.upsert({
        where: { productId_locale: { productId: product.id, locale: 'de' } },
        update: {},
        create: {
          productId: product.id,
          locale: 'de',
          name: p.translation.name,
          slug: p.translation.slug,
          shortDescription: p.translation.shortDescription,
          description: p.translation.description,
        },
      });
    }

    console.log('✅ Created products:', products.length);
    console.log('✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
