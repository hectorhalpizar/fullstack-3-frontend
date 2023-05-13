import AddNewProjectModal from "@/components/modal/AddNewProjectModal";
import PageDescription from "@/components/PageDescription";

import ProjectItem from "@/components/ProjectItem";

import { Button } from "@mui/material";

import { useEffect, useState } from "react";

export default function Admin() {

    const [projects, setProjects] = useState([])
    const [isNewProjectModaVisible, setIsNewProjectModalVisible] = useState(false)

    useEffect(() => {
        fetchProjects();
      }, []);
    
      const fetchProjects = async () => {
        try {
          const response = await fetch("http://172.31.16.138:3000/api/projects");
          const responseJson = await response.json();
          setProjects(responseJson);
        } catch (error) {
          console.log(error);
        }
      };

     const onHandleSubmit = values => {
        console.log(values);
        setProjects(prev => [
            ... prev,
            { ...values, _id: projects.length + 1}]
        )
        setIsNewProjectModalVisible(false)
     }
  
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
                    onClick={ () => setIsNewProjectModalVisible(true) }
                >Add Project</Button>

            </div>

            {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}


            <AddNewProjectModal 
                open= { isNewProjectModaVisible }
                onClose={ () => setIsNewProjectModalVisible(false) }
                onSubmit={ onHandleSubmit }
            />

        </section>
    );
}