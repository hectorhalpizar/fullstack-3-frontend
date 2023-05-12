import { Grid, TextField } from "@mui/material";
import { useForm , Controller } from "react-hook-form";
import * as yup from 'yup';

export default function ProjectFrom ({}) {

    const defaultValues = {
        name: "",
        description: "",
        overview: "",
        tools: [],
        imageUrl: ""
    }

    const projectFormSchema = yup.object().shape({
        name: yup.string().required('You neeed to add a name'),
        description: yup.string(),
        overview: yup.string(),
        tools: yup.array(),
        imageUrl: yup.string(),
    });

    const { control } = useForm({
            defaultValues,
            resolver: yupResolver(projectFormSchema),
            mode: 'all'
        });

    return (
        <form>
            <Grid container spacing={4}>
                <Grid item>
                    <Controller 
                        control = {control}
                        name='name'
                        render={ ({field, fieldState}) => (
                            <TextField 
                                { ...field}
                                label='Project Name'
                                variant='outlined'
                                fullWidth
                                error={ !!fieldState.error }
                                helperText={ fieldState.error?.message }
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </form>
    )
}