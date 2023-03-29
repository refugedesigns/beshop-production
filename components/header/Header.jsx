import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useSpring, animated } from "@react-spring/web";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Hidden,
  Badge,
} from "@mui/material";
import { HiMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { pages, settings } from "@/data/data.header";


export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [scrollOffset, setScrollOffset] = React.useState(0);

  const { backgroundColor } = useSpring({
    backgroundColor: scrollOffset > 10 ? "#FCECEB" : "transparent",
    config: { duration: 200 },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    function handleScroll() {
      setScrollOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollOffset]);

  return (
    <AppBar className={`shadow-none bg-transparent z-50`}>
      <animated.div style={{ backgroundColor }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "Mrs Saint Delafield",
                fontWeight: 500,
                letterSpacing: ".3rem",
                textDecoration: "none",
                fontSize: 32,
                color: "black"
              }}
            >
              GoShop
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "lato",
                  }}
                >
                  <Link className="no-underline text-black" href={page.link}>
                    {page.title}
                  </Link>
                </Button>
              ))}
            </Box>

            <Box className="md: space-x-6" sx={{ flexGrow: 0 }}>
              <Hidden mdDown>
                <IconButton aria-label="faq" LinkComponent={Link} href="/faq">
                  <BiSearch />
                </IconButton>
                <IconButton
                  aria-label="profile"
                  LinkComponent={Link}
                  href="/profile"
                >
                  <AiOutlineUser />
                </IconButton>
                <IconButton aria-label="wishlist" href="/wishlist" LinkComponent={Link}>
                  <AiOutlineHeart />
                </IconButton>
                <IconButton aria-label="cart" LinkComponent={Link}>
                  <Badge color="primary" badgeContent={4}>
                    <BsCart4 height={10} width={10} />
                  </Badge>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <HiMenu
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Hidden>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </animated.div>
    </AppBar>
  );
}
