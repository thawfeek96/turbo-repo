import { Elysia } from 'elysia';
import { trpc } from '@elysiajs/trpc';
import { cors } from '@elysiajs/cors';
import {appRouter} from './src/router'


const app = new Elysia();

app.use(cors());
app.use('trcp',  trpc(appRouter));

app.get('/', () => {
    return {
        success: true,
        message: 'Welcome to Feedback Sync V2 Server!',
    };
});

// catch all undefined requests
app.all('*', ({ set }) => {
    set.status = 400;
    return {
        success: false,
        message: 'Path Not Found!',
    };
});

app.listen({
    port: process.env.PORT || 5000,
});


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);