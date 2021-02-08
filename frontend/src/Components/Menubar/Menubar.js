import './Menubar.css';
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ContactForm from '../ContactForm/ContactForm';


const Menubar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "85px";
        } else {
            document.getElementById("navbar").style.top = "0px";
        }
        prevScrollpos = currentScrollPos;
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className='menu-wrap'>
                <div className='web-logo'>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <a href='/'><img src='./Images/HomeScreenImages/logo.svg' alt='preciso-fashion-logo' className='logo-img' /></a>
                    </div>
                </div>
                <div className="nav-links" id='navbar'>
                    <a href='/'>HOME</a>
                    <a href='/'>ABOUT US</a>
                    <a href='/'>OUR EXPERTISE</a>
                    <a href='/'>OUR BRANDS</a>
                    <a href='/'>COLLECTIONS</a>
                    <a onMouseEnter={handleShow} >CONTACT US</a>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                                Close
                </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                </Button>
                </Modal.Footer> */}
                <ContactForm />
            </Modal>
        </React.Fragment>
    )
}
export default Menubar;

// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

// export default function TransitionsModal() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <button type="button" onClick={handleOpen}>
//                 react-transition-group
//       </button>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={open}>
//                     <div className={classes.paper}>
//                         <h2 id="transition-modal-title">Transition modal</h2>
//                         <p id="transition-modal-description">react-transition-group animates me.</p>
//                     </div>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }


// export default class Menubar extends Component {
//     render() {


//         return (
//             <>

//             </>
//         )
//     }
// }