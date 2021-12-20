import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: "#111111"
    },
    tabs: {
        color: "#ffffff",
        textDecoration: "none",
        marginRight: "1rem",
        fontSize: "1.4rem"
    }
})
const NavBar =() =>{
    const classes = useStyle();
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to='./' exact>CRUD app</NavLink>
                <NavLink className={classes.tabs} to='all-user' exact>All users </NavLink>
                <NavLink className={classes.tabs} to='add-user' exact>Add users</NavLink>
            </Toolbar>
        </AppBar>
    ) 
}

export default NavBar;