import { getUsers, deleteUser } from "../Service/api.js";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '80%', 
        margin: '3% 5%'
    }, 
    thead: {
        '& > *' :{
            background: 'black',
            color: 'white',
            fontSize: '1.1rem'
        }
    },
    row: {
        '&: > *' :{
            fontSize: '1rem'
        }
    }
})
const AllUser = () =>{
    const[users, setUsers]=useState([]);
    const classes = useStyles();
    let count = 1;
    useEffect(() => {
        getAllusers();
    },[])
    
    const getAllusers= async() =>{
        const response = await getUsers();
        // console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async(id) =>{
        await deleteUser(id);
        getAllusers();
    }

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            {/* <TableCell>{user.id}</TableCell> */}
                            <TableCell>{count++}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={ () => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
} 
export default AllUser;