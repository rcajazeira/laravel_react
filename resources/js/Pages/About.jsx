// resources/js/Pages/About.jsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import styles from './About.module.css'; // Vamos criar este CSS em seguida

const About = () => {
    return (
        <div className={styles.container}>
            <h1>Sobre nós</h1>
            <p>Esta é a página "Sobre". Um exemplo simples de uma segunda página com o Inertia.js.</p>
            <p>O botão abaixo leva você de volta à página inicial.</p>

            <Link href="/" className={styles.button}>
                Voltar para a Página Inicial
            </Link>
        </div>
    );
};

export default About;