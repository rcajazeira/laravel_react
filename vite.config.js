import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // Importar o plugin do React

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // Adicione seus pontos de entrada
            refresh: true,
        }),
        react(), // Habilita o suporte a React
    ],
});
