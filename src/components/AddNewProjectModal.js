import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ProjectFrom from "./forms/ProjectForm.js";

export default function AddNewProjectModal({ open, onClose }) {
    return(
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Adding new Project
            </DialogTitle>
            <DialogContent>
                <ProjectFrom />
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    );
}