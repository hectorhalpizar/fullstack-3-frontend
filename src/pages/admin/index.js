import PageDescription from "@/components/PageDescription";

import ProjectItem from "@/components/ProjectItem";

import { Button } from "@mui/material";

import { useEffect, useState } from "react";

export default function Admin() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
      }, []);
    
      const fetchProjects = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/projects");
          const responseJson = await response.json();
          setProjects(responseJson);
        } catch (error) {
          console.log(error);
        }
      };
  
    return (
        <section>
            <PageDescription
                title="Admin"
                description="I will admin my projects here"
            />


            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Button
                    variant="contained"
                    size="large"
                >Add Project</Button>

                { projects.map(project => <ProjectItem key={project.id} project={project} />) }
            </div>

        </section>
    );
}