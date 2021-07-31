import { useEffect, useState } from "react"
import TablePanel from "../products/table"

const Users = () => {
    const [users, setUsers] = useState < { id: number, email: string, username: number; password: any }[] | undefined > ([])
    const userheadertable=['id','email','username','password']
    const btnsuser = [
        {
            title: 'delete',
            color: 'blue',
            rout: 'user/delete'
        },
        {
            title: 'edit',
            color: 'red',
            rout: 'user/edit'
        },

    ]
    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then(res => res.json())
            .then(result => setUsers(result))
    }, [])


    return (
        <TablePanel data={users} heading={userheadertable} btns={btnsuser}/>
    )
}

export default Users;