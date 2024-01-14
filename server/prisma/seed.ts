import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  // perfil de acesso admin:
  const adminProfile = await prisma.profile.upsert({
    where: {name: "ADMIN"},
    update: {},
    create: {
      name: "ADMIN",
      access: "CRUDS"
    }
  })

  // administrador de sistema
  const adminUser = await prisma.user.upsert({
    where: {email: "admin@gmail.com.br"},
    update: {},
    create: {
      name: "ADMIN",
      email: "admin@gmail.com.br",
      password: "admin123",
      profileId: adminProfile.id,
      imageUrl: null
    }
  });

  // perfils iniciais:
  const marketing = await prisma.profile.upsert({
    where: {name: "Marketing"},
    update: {},
    create: {
      name: "Marketing",
      access: "CRS",
    }
  });

  const software = await prisma.profile.upsert({
    where: {name: "Software"},
    update: {},
    create: {
      name: "Software",
      access: "CRUS",
    }
  })

  // usuarios iniciais:
  const aline = await prisma.user.upsert({
    where: {email: "aline.marketing@gmail.com.br"},
    update: {},
    create: {
      name: "Aline",
      email: "aline.marketing@gmail.com.br",
      password: "aline123",
      profileId: marketing.id,
      imageUrl: null
    }
  });

  const josh = await prisma.user.upsert({
    where: {email: "josh.software@gmail.com.br"},
    update: {},
    create: {
      name: "Josh",
      email: "josh.software@gmail.com.br",
      password: "aline123",
      profileId: software.id,
      imageUrl: null
    }
  });
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
