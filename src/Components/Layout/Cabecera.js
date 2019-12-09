import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Redirect, withRouter, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import Backdrop from '@material-ui/core/Backdrop';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	avatarButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
	},
	bigAvatar: {
		marginLeft: theme.spacing(5),
		marginRight: theme.spacing(5),
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: 60,
		height: 60,
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
	nombreMenu: {
		marginLeft: theme.spacing(9)
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

function Cabecera() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const abrir = Boolean(anchorEl);
	const [salir, setSalir] = React.useState(false)
	const [abrirMenu, setAbrirMenu] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setSalir(true)
	};

	const handleClick = () => {
		setAbrirMenu(!abrirMenu)
	};

	if (salir === true) {
		return (<Redirect to='/login' />)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Backdrop open={open} className={classes.back} onClick={() => handleDrawerClose()} />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Script Hub Share
          			</Typography>
					<Typography variant="h6" className={classes.title}>

					</Typography>
					<Typography variant="h6" className={classes.title}>

					</Typography>
					<>
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								className={classes.menuButton}
								onClick={handleMenu}
								color="inherit"
							>
								<Avatar alt="..." src='https://i.imgur.com/lEVEyiW.jpg' />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={abrir}
								onClose={() => setAnchorEl(null)}>
								<MenuItem disabled><em>Usuario</em></MenuItem>
								<MenuItem onClick={() => handleClose()}>Cerrar Sesión</MenuItem>
							</Menu>
						</div>
					</>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<Avatar alt="..." src='https://i.imgur.com/lEVEyiW.jpg' className={classes.bigAvatar} />

					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Typography variant='button' className={classes.nombreMenu}>Usuario Script Hub</Typography>
				<Divider />
				<List>
					<Link to='/inicio' style={{ textDecoration: 'none', color: 'inherit' }}>
						<ListItem button>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Inicio" />
						</ListItem>
					</Link>
					<ListItem button onClick={handleClick}>
						<ListItemIcon>
							<FingerprintIcon />
						</ListItemIcon>
						<ListItemText primary="Grestionar proyectos" />
						{abrirMenu ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={abrirMenu} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link to='/añadir' style={{ textDecoration: 'none', color: 'inherit' }}>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<PostAddOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary="Añadir" />
								</ListItem>
							</Link>
							<Link to='/editar' style={{ textDecoration: 'none', color: 'inherit' }}>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<EditOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary="Editar" />
								</ListItem>
							</Link>
							<Link to='/eliminar' style={{ textDecoration: 'none', color: 'inherit' }}>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<DeleteOutlineOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary="Eliminar" />
								</ListItem>
							</Link>
						</List>
					</Collapse>
				</List>
				<Divider />
			</Drawer>
		</div>
	);
}

export default withRouter(Cabecera);