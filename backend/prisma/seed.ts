const { PrismaClient } = require('@prisma/client');

async function seed() {
  const prisma = new PrismaClient();

  try {
    const category = await prisma.productCategories.findFirst({});

    if (!category) {
      await prisma.productCategories.createMany({
        data: [
          { name: 'Appliances', discount: 5 },
          { name: 'Furniture', discount: 3 },
          { name: 'Refrigerators', discount: 7.5 },
          { name: 'Smartphones', discount: 2.55 },
          { name: 'Electronics', discount: 4.3 },
        ],
      });
      console.log('Seeding completed.');
    } else {
      console.log('Database is already seeded');
    }
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch(console.error);
