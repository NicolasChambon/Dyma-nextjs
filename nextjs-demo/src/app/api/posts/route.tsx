import { prisma } from '@/lib/prisma';

export const POST = async (request: Request) => {
  const body: { title: string } = await request.json();
  const post = await prisma.post.create({
    data: {
      title: body.title
    }
  });
  return new Response(JSON.stringify(post), { status: 201 });
};

export const PATCH = async (request: Request) => {
  const body: { id: string; isDone: boolean } = await request.json();
  const post = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      isDone: body.isDone
    }
  });
  return new Response(JSON.stringify(post), { status: 200 });
};

export const DELETE = async (request: Request) => {
  const body: { id: string } = await request.json();
  await prisma.post.delete({
    where: {
      id: body.id
    }
  });
  return new Response(
    JSON.stringify({
      message: 'Ressource deleted successfully',
      id: body.id
    }),
    { status: 200 }
  );
};
