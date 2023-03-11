import React,{ useState,useRef} from 'react';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
//import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Home from './Home';
import Contact from './Contact';

const Navbar = () => {
    const home = useRef(null);
    const about = useRef(null);
    const testimonials = useRef(null);
    const work = useRef(null);

    const scrollToSection =(elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions =[
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "Vision",
            icon: <InfoIcon />,
        },{
            text: "Offerings",
            icon: <CommentRoundedIcon />,
        },{
            text: "Feedback",
            icon: <PhoneRoundedIcon />,
        }
    ]

  return (
    <nav>
        <div className="nav-logo-container" >
            <img src={Logo} data-aos="fade-in" alt=""/>
        </div>
        <div data-aos="fade-in" className="navbar-links-container">
            <a href={home} onClick={()=> scrollToSection(home)}>Home</a>
            <a href={about} onClick={()=> scrollToSection(about)}>Vision</a>
            <a href="">Offerings</a>
            <a href="">Feedback</a>

            <button className="primary-button">
                Join Us
            </button>
        </div>
        <div className="navbar-menu-container" >
            <HiOutlineBars3 onClick={ () => setOpenMenu(true)} />
        </div>

        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor="right">
            <Box 
            sx={{ width: 250}}
            role="presentation"
            onClick={() =>setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >

                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text} />
                                
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
    
  )
}

export default Navbar