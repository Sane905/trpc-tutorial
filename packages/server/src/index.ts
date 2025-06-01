import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './router';

const app = express();
const port = process.env.PORT || 3001;

// CORS設定
app.use(cors({
  origin: 'http://localhost:3000', // クライアントのURL
  credentials: true,
}));

// tRPCミドルウェアを設定
app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'tRPC Server is running!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;