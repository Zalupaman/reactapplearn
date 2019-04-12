import {rerenderWholeTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {message: 'Hi how are you', id: 1, likeCount: 15},
            {message: 'This is my first post', id: 2, likeCount: 23}
        ],

    },
    messagesPage: {
        messageData: [
            {message: 'Some text', id: 1,},
            {message: 'Some text', id: 2},
            {message: 'Some text', id: 3},
            {message: 'Some text', id: 4},
            {message: 'Some text', id: 5}
        ],

        dialogData: [
            {id: 1, name: 'Coder'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Misha'},
            {id: 4, name: 'Vlad'},
            {id: 5, name: 'Zalupa'}
        ],

    }

}
export let addpost = (postMessage) => {
        let newPost = {
            id: 5,
            message: postMessage,
            likeCount:67
        };
    state.profilePage.posts.push(newPost)
    rerenderWholeTree(state)

}


export default state;

