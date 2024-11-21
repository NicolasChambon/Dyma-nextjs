import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}

// global is defined in
const globalForPrisma = global;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query']
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
