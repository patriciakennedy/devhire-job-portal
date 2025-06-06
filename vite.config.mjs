import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        server: {
            proxy: {
                '/api': 'http://localhost:5002',
            },
        },
        plugins: [react()],
        server: {
            port: 9000,
        },
    };
});
