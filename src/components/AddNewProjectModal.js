import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ProjectFrom from "./forms/ProjectForm.js";

export default function AddNewProjectModal({ open, onClose, onSubmit }) {
    return(
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Adding new Project
            </DialogTitle>
            <DialogContent>
                <ProjectFrom 
                    onSubmit={onSubmit}
                />
            </DialogContent>
            <DialogActions>
            <Button
                variant="contained"
                type="onSubmit"
                form='project-form'>
                Add Project    
                 </Button>
                <Button
                variant="contained"
                color="error"
                type="reset"
                form='project-form'
                 >Clear form
                 </Button>
            </DialogActions>
        </Dialog>
    );
}