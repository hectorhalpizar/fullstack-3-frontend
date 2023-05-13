import AddNewProjectModal from "@/components/modals/AddNewProjectModal";
import EditProjectModal from "@/components/modals/EditProjectModal";

import PageDescription from "@/components/PageDescription";

import ProjectItem from "@/components/ProjectItem";

import { Button } from "@mui/material";

import { useEffect, useState } from "react";

export default function Admin() {

    const [editProject, setEditProject] = useState()
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

      const handleOnSubmit = values => {
        const tempProjects = Array.from(projects)
        if (!!values._id) {
          const projectIndex = tempProjects.findIndex(p => p._id === values._id)
          tempProjects[projectIndex] = values;
        }
        else {
          tempProjects.push({
            ...values,
            _id: projects.length + 1,
          })
        }
        setProjects(tempProjects)
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
                onSubmit={ handleOnSubmit }
            />

            <EditProjectModal
                open={ !!editProject }
                onClose={ () => setEditProject() }
                onSubmit={ handleOnSubmit }
                project={ editProject }
            />

        </section>
    );
}