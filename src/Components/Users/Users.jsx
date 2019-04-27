import React from 'react'
import classes from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    avatarPhoto: 'https://img.anews.com/media/gallery/75241888/685345066.jpg',
                    followed: false,
                    fullname: 'Sanya',
                    status: 'Im looking for a new job',
                    location: {city: 'Luybertsy', country: 'Rusia'}
                },
                {
                    id: 2,
                    avatarPhoto: 'https://img.anews.com/media/gallery/75241888/685345066.jpg',
                    followed: true,
                    fullname: 'Dima',
                    status: 'I like basketball',
                    location: {city: 'New-York', country: 'USA'}
                },
                {
                    id: 3,
                    avatarPhoto: 'https://img.anews.com/media/gallery/75241888/685345066.jpg',
                    followed: true,
                    fullname: 'Serega',
                    status: 'i love Liza',
                    location: {city: 'Luybertsy', country: 'Rusia'}
                }
            ]
        )
    }
    return (
        <div>

            {
                props.users.map(users => <div key={users.id}>
                        <div className={classes.users}>
                            <div>
                                <div className={classes.avaFollow}>
                                    <img src={users.avatarPhoto} className={classes.avatarPhoto}/>
                                    <div>
                                        {users.followed
                                            ? <button onClick={() => {
                                                props.unfollow(users.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                props.follow(users.id)
                                            }}>Follow</button>}

                                    </div>
                                </div>
                            </div>
                            <div className={classes.information}>
                        <span className={classes.nameStatus}>
                           <div>{users.fullname}</div><div>{users.status}</div>
                        </span>
                                <div>
                                    {users.location.country}
                                </div>
                                <div>
                                    {users.location.city}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default Users;