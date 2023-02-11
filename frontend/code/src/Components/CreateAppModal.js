import { Button, Typography, Modal, Box, TextField, MenuItem } from '@mui/material/';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};

const currencies = [
    {
        value: 'react',
        label: 'React App',
    }
];


function CreateAppModal() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [shrinkState, setShrinkState] = React.useState(false);

    const [currency, setCurrency] = React.useState('App Type');

    const handleChange = (event) => {
        setShrinkState(true);
        setCurrency(event.target.value);
    };

    // const handleChange = (event) => {
    //     // console.log(event)
    //     var fieldName = event.target.id;

    //     switch (fieldName) {

    //         case "appName":
    //             const validName = /^[a-z0-9._-]+$/;
    //             var appName = document.getElementById("appNameError");
    //             if (!validName.test(event.target.value)) {
    //                 appName.innerText = "App name can contain: a-z, 0-9, '_', '-'";
    //                 appName.style.display = "block";
    //             } else {
    //                 appName.innerText = "";
    //             }
    //             break;

    //         case "appDescription":
    //             const validDesc = /^$/;
    //             var appDescError = document.getElementById("appDescError");
    //             if (event.target.value.length === 0) {
    //                 appDescError.innerText = "App name cannot be empty";
    //                 appDescError.style.display = "block";
    //             } else {
    //                 appDescError.innerText = "";
    //             }
    //             break;

    //         default:
    //     }
    // }

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="p-5">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create App
                    </Typography>

                    <TextField fullWidth className="mt-3" id="app_name" label="App Name" variant="standard" />
                    <TextField fullWidth className="mt-3" id="app_description" label="App Description" variant="standard" />
                    <div className="pt-4">
                        <TextField
                            id="app_type"
                            select
                            label="App Type"
                            value={currency}
                            onChange={handleChange}
                            size="small"
                            fullWidth
                            variant="standard"
                            InputLabelProps={{ shrink: shrinkState }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <TextField fullWidth className="mt-3" id="git_url" label="Git URL" variant="standard" />
                    <TextField fullWidth className="mt-3" id="branch_name" label="Branch Name" variant="standard" />
                    <TextField fullWidth className="mt-3" id="collaborator" label="Collaborator" variant="standard" />
                    <TextField fullWidth className="mt-3" id="token_name" label="Token Name" variant="standard" />
                    <TextField fullWidth className="mt-3" id="token_value" label="Token Value" variant="standard" />
                    <div className="d-flex gap-3 pt-4">
                    <Button variant="contained">Create</Button>
                    <Button variant="contained" className="bg-light text-dark" >Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default CreateAppModal;