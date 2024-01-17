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
      password: "josh123",
      profileId: software.id,
      imageUrl: null
    }
  });

  // pastas iniciais:

  const dashboardAdmin = await prisma.folder.upsert({
    where: {id: 1},
    update: {},
    create: {
      id: 1,
      usersWithAccess: {connect: {id: adminUser.id}},
      ownerId: adminUser.id,
      folderName: "DashBoard ADMIN"
    }
  })

  const dashboardTi = await prisma.folder.upsert({
    where: {id: 2},
    update: {},
    create: {
      id: 2,
      usersWithAccess: {connect: {id: adminUser.id}},
      ownerId: josh.id,
      folderName: "DashBoard TI"
    },
  })

  const newsTi = await prisma.folder.upsert({
    where: {id: 3},
    update: {},
    create: {
      id: 3,
      usersWithAccess: {connect: {id: adminUser.id}},
      parentFolderId: dashboardTi.id,
      ownerId: josh.id,
      folderName: "News"
    },
  })

  const sprint = await prisma.folder.upsert({
    where: {id: 4},
    update: {},
    create: {
      id: 4,
      usersWithAccess: {connect: {id: adminUser.id}},
      parentFolderId: newsTi.id,
      ownerId: josh.id,
      folderName: "sprint"
    },
  })


  const sprint1 = await prisma.folder.upsert({
    where: {id: 5},
    update: {},
    create: {
      id: 5,
      parentFolderId: sprint.id,
      ownerId: josh.id,
      folderName: "sprint1"
    },
  })

  const metasAdmin = await prisma.folder.upsert({
    where: {id: 6},
    update: {},
    create: {
      id: 6,
      parentFolderId: dashboardAdmin.id,
      ownerId: adminUser.id,
      folderName: "metas"
    },
  })
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
