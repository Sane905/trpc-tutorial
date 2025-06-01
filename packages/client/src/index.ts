import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from 'server';

// tRPCクライアントを作成
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3001/trpc',
    }),
  ],
});

async function main() {
  try {
    console.log('tRPC Client Demo');
    console.log('================');

    // Hello procedure を呼び出し
    const helloResult = await trpc.hello.query({ name: 'World' });
    console.log('Hello result:', helloResult);

    // Get users procedure を呼び出し
    const users = await trpc.getUsers.query();
    console.log('Users:', users);

    // Create user mutation を呼び出し
    const newUser = await trpc.createUser.mutate({ name: 'David' });
    console.log('New user created:', newUser);

  } catch (error) {
    console.error('Error:', error);
  }
}

main();