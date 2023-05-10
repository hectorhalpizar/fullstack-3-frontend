import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home({name, summary}) {

    const router = useRouter();

    return (
        <>
            <section className={styles.Home}>
                <h1 className={styles.Name}>{name}</h1>
                <div className={styles.summary}>{summary}</div>
                <div>
                    <Button variant="contained" size="large" onClick={() => router.push("/projects") }>
                        Projects
                    </Button>
                </div>
            </section>
        </>
        );
}

export async function getStaticProps() {
    return {
        props: {
            name: "Hector Hugo Alpizar C.",
            summary: "Soy un desarrollador full-stack apasionado con 10 de experiencia en el desarrollo de aplicaciones web sólidas. Tengo un sólido conocimiento tanto en el desarrollo front-end como en el back-end, y domino diversos lenguajes de programación, incluyendo Kotlin y Next.JS. Tengo una gran atención al detalle y siempre me esfuerzo por crear interfaces de usuario intuitivas y experiencias de usuario fluidas. La colaboración es una parte clave de mi proceso de desarrollo, y trabajo bien en entornos de desarrollo ágiles y tengo experiencia con sistemas de control de versiones como Git. Estoy dedicado a mantenerme al día con las últimas tendencias y tecnologías de la industria, y siempre estoy buscando mejorar mis habilidades a través del aprendizaje continuo y el desarrollo profesional."
        },
    };
}