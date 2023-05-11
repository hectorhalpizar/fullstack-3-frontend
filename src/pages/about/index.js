import PageDescription from "@/components/PageDescription";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import { useRouter } from "next/router";
import Stack from '@mui/material/Stack';

export default function AboutMe({ skills }) {

    const router = useRouter();

    return (
        <section>
            <PageDescription 
                title="About Me"
                description="Here you will info about me."
            />

            <Grid container spacing={2}>

                <Grid item md={6}>
                    <h2>Get to know me!</h2>                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate vehicula libero, eget scelerisque felis sodales non. Sed in convallis nibh, vel ultricies nibh. Sed molestie scelerisque bibendum. Maecenas cursus interdum imperdiet. Vivamus ultricies bibendum justo, vitae feugiat diam malesuada eget. Integer commodo malesuada convallis. Maecenas a pharetra mi. Nunc tempus diam sed lectus vehicula lobortis. Pellentesque accumsan metus vel diam posuere sodales. Integer sit amet lobortis tortor, a posuere nunc. In ultrices lacus id imperdiet elementum. Nam non imperdiet nisi. Aliquam condimentum augue ut odio sagittis lobortis.</p>
                    <p>Suspendisse potenti. Donec viverra arcu sit amet luctus facilisis. Aenean neque quam, posuere pellentesque volutpat ut, commodo eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer et efficitur nulla. Etiam vel tristique velit. Mauris in nibh leo. Pellentesque vehicula finibus odio, eget tempor dui laoreet dapibus. Pellentesque vehicula semper nibh dictum pellentesque. Proin ut feugiat orci.</p>
                    
                    <Button 
                        variant="contained" 
                        size="large" 
                        onClick={() => router.push("/projects") }>
                        Projects
                    </Button>

                </Grid>

                <Grid item md={6}>               
                    <h2>My Skills</h2>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    {skills.map((skill) => (
                            <Chip key={skill} label={skill} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </section>
    );
}

export async function getStaticProps() {

    let skills = [];

    try {
        const response = await fetch("https://hector-firebase-c154b-default-rtdb.firebaseio.com/skills.json");
        const data = await response.json();

        skills = data.split(",");
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            skills,
        },
        revalidate: 30,
    };
}