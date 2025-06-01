import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name}!`,
      };
    }),

  getUsers: t.procedure
    .query(() => {
      return [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
    }),

  createUser: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      const newUser = {
        id: Math.floor(Math.random() * 1000),
        name: input.name,
      };
      return newUser;
    }),
});

export type AppRouter = typeof appRouter;