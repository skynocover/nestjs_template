import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const arts = await prisma.article.findMany();
  console.log(arts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
