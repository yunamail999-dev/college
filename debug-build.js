import { build } from 'vite';
import react from '@vitejs/plugin-react';

async function runBuild() {
    try {
        await build({
            plugins: [react()],
            logLevel: 'error'
        });
        console.log('Build OK!');
    } catch (e) {
        console.error('------- BUILD FAILED CAUGHT -------');
        console.error(e);
    }
}

runBuild();
