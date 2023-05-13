import { Button, Box, Grid } from "@mui/material";
import PageDescription from "@/components/PageDescription";
import { Chip } from "@mui/material";

function Project({ project }) {
    return (<>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <PageDescription 
                title={project.name}
                description="Here you will info about me."
            />

            <Box textAlign="center">
                <Button variant="contained" size="large">
                    Project Link
                </Button>
            </Box>

            <Box>
                <img
                    src={project.imageUrl}

                >
                </img>        
            </Box>

            <h1>Project Overview</h1>

            <Box>
                <span>{project.description}</span>
            </Box>

            <h1>Tools Used</h1>

            {/* <Box>
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    {skills.map((skill) => (
                            <Chip key={skill} label={skill} />
                        ))}
                    </Stack>

            </Box> */}

        </Grid>
    </>);
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    
    try {
        const response = await fetch(`http://172.31.16.138:3000/api/projects/${id}`);
        const project = await response.json();
        console.log("Project " + project);
        return {
            props: {
                project,
            },
        }
    }  catch (error) {
        console.error(error);
    }
}

export default Project;