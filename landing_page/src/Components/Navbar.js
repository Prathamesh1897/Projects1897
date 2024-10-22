import react, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon></HomeIcon>,
    },
    {
      text: "About",
      icon: <InfoIcon></InfoIcon>,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon></CommentRoundedIcon>,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon></PhoneRoundedIcon>,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt=""></img>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar -cart-icon"></BsCart2>
        </a>
        <button className="primary-button">Book Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}></HiOutlineBars3>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <list>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </list>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
