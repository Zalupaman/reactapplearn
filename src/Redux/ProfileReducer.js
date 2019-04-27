let ADD_POST = 'ADD-POST'
let UPDATE_TEXT = 'UPDATE-TEXT'

let initialState = {
    posts: [
        {message: 'Hi how are you', id: 1, likeCount: 15},
        {message: 'This is my first post', id: 2, likeCount: 23}
    ],
        newTextToPost: ''
}

export const profileReducer = (state = initialState,action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: state.newTextToPost,
                    likeCount: 0
                };
                let stateCopy={
                    ...state,
                    posts: [...state.posts,newPost],
                    newTextToPost: ''
                }
                return stateCopy;
            }
            case UPDATE_TEXT: {
                return  {
                    ...state,
                    newTextToPost: action.newText,
                }
            }
            default :
                return state
        }
}

export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXT, newText: text
    }
}