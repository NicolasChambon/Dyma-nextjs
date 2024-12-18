import { PrismaClient } from '@prisma/client';
declare global {
  var prisma: PrismaClient;
}

const globalForPrisma = global;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
