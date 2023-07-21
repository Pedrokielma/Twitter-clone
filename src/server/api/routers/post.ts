/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PrismaClient } from '@prisma/client';

type Context = {
    prisma: PrismaClient;
  };

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }: { ctx: Context }) => {
    return ctx.prisma.post.findMany();
  }),
});
