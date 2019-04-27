let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_STATE = 'SET_STATE'

let initialState = {
    users:[ ]

}


export const UsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {
                            ...users,
                            followed: true}
                    }
                    return users
                })
            }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {
                            ...users,
                            followed: false
                        }
                    }
                    return users
                })
            }
        }

        case SET_STATE:{
            return {
                ...state,
                users:[...state.users,...action.users]
            }
        }

        default:
            return state


    }
}

export const followAC = (userId) => ({
    type:FOLLOW,
    userId
})
export const unfollowAC = (userId) =>({
    type:UNFOLLOW,
    userId
})
    export const setUsersAC = (users) =>({
        type:SET_STATE,
        users
    })

