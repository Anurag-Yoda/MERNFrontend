import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [{
        id : 'a1',
        image: 'https://vignette.wikia.nocookie.net/godofwar/images/b/b3/Kratos_Mugshot.jpg/revision/latest?cb=20180826024705',
        name : 'Kratos',
        places: "3"

    }];




    return (
      <UsersList items ={USERS}/>
    )
}

export default Users;
