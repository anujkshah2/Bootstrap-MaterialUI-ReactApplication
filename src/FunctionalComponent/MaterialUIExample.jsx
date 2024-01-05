import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions'


const pages = ['Home', 'About', 'Faq', 'Service', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Item(props) {
    return (
        <Paper>
            <img src={props.item.pic} alt="" height="500px" width="100%" />
        </Paper>
    )
}

function MaterialUIExample() {

    var items = [
        { pic: "/images/banner1.jpg" },
        { pic: "/images/banner2.jpg" },
        { pic: "/images/banner3.jpg" }
    ]

    let data = [
        { name: " Product1", pic: "/images/p1.jpg", baseprice: 8000, finalprice: 4000 , discount:50 },
        { name: " Product2", pic: "/images/p2.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product3", pic: "/images/p3.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product4", pic: "/images/p4.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product5", pic: "/images/p5.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product6", pic: "/images/p6.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product7", pic: "/images/p7.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product8", pic: "/images/p8.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product9", pic: "/images/p9.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product10", pic: "/images/p10.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product11", pic: "/images/p11.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product12", pic: "/images/p12.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product13", pic: "/images/p13.jpg", baseprice: 8000, finalprice: 4000, discount:50 },
        { name: " Product14", pic: "/images/p14.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product15", pic: "/images/p15.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product16", pic: "/images/p16.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product17", pic: "/images/p17.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product18", pic: "/images/p18.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product19", pic: "/images/p19.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
        { name: " Product20", pic: "/images/p20.jpg", baseprice: 8000, finalprice: 4000 , discount:50},
    ]

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <>
            <AppBar position="static" color="success">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ShoppingCart sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,

                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                //   letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            EntaWood
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <ShoppingCart sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                //   letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            EntaWood
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="" src="/images/p15.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
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
            </AppBar>

            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <Typography variant="h5" align="center" color="light-green" fontFamily="Dhurjati" bgcolor="#66ff66"> Latest Product ⬇️
            </Typography>

            <Grid container>
                {data.map((item, index) => (
                    <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <Card key={index} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.pic}
                                    alt="photo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.solid black" >
                                    <del className='del' >&#8377;{item.baseprice}</del> &#8377;{item.finalprice} <sup className='discount'>{item.discount}% Off</sup>
                                    </Typography>
                                    <CardActions>
                                        <Stack direction="row" spacing={2}> <Button variant="contained" href="#contained-buttons" color="success" >Add To Cart </Button>
                                        </Stack>
                                    </CardActions>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )

                )}




            </Grid>

        </>
    );
}
export default MaterialUIExample;
