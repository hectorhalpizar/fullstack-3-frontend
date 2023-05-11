import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function Projects({ projects }) {
    return (
        <section>
            <PageDescription
                title="Projects"
                description="These are my projects"
            />

            { projects.map(project => <ProjectItem key={project.id} project={project} />) }
        </section>
    );
}

export async function getServerSideProps() {

    let projects = [];

    try {
        const response = await fetch("http://172.31.16.138:3000/api/projects");
        const data = await response.json();

        projects = data;
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            projects,
        },
    };
}