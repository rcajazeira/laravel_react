// resources/js/Pages/Home/Home.jsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Bem-vindo à Página Inicial</h1>
            <p>Este é um exemplo de página configurada com Laravel e React usando Inertia.js.</p>

            <Link href="/about" className={styles.button}>
                Ir para a Página Sobre
            </Link>
        </div>
    );
};

export default Home;