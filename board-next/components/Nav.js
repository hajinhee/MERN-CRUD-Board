import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {createSvgIcon} from '@mui/material/utils';
import {useDispatch, connect} from 'react-redux';
import { useSelector } from 'react-redux';

const pages = {
    subTitles: [
        'home', 'board', 'board List'
    ],
    urls: ["/", '/board/addBoard', '/board/boardList']
};

export function Nav() {
    const dispatch = useDispatch()

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            style={{
                marginBottom: "20px"
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters="disableGutters">
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                        {
                            pages
                                .urls
                                .map((urls, i) => (
                                    <a
                                        href={urls}
                                        key={i}
                                        style={{
                                            textDecoration: 'none'
                                        }}>
                                        <Button
                                            key={i}
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
                                                color: 'white',
                                                display: 'block'
                                            }}>
                                            {pages.subTitles[i]}
                                        </Button>
                                    </a>
                                ))
                        }
                    </Box>

                    
                </Toolbar>
            </Container>
        </AppBar>
      
    );
}

