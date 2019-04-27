import {profileReducer} from "./ProfileReducer";
import {messageReducer} from "./MessageReducer";

let ADD_POST = 'ADD-POST'
let UPDATE_TEXT = 'UPDATE-TEXT'
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
let SEND_MESSAGE = 'SEND-MESSAGE'

let store= {
    //STATE DATA START

    _state:{
        profilePage: {
            posts: [
                {message: 'Hi how are you', id: 1, likeCount: 15},
                {message: 'This is my first post', id: 2, likeCount: 23}
            ],
            newTextToPost: ''
        },
        messagesPage: {

            dialogData: [
                {id: 1, name: 'Coder'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Misha'},
                {id: 4, name: 'Vlad'},
                {id: 5, name: 'Zalupa'}
            ],
            messageData: [
                {id: 1, message: 'Some text', },
                {id: 2, message: 'Some text', },
                {id: 3, message: 'Some text', },
                {id: 4, message: 'Some text', },
                {id: 5, message: 'Some text', }
            ],
            newMessageBody: ''
        },
        sidebar:{}
    },
    // STATE DATA END

    // FUNCTIONS and METHODS begin
    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('State changed')
    },


    // FUNCTIONS and METHODS END

    // DISPATCH begin
    dispatch(action){

       this._state.profilePage = profileReducer(this._state.profilePage,action)
       this._state.messagesPage = messageReducer(this._state.messagesPage,action)

        this._callSubscriber(this._state)

    }
    // DISPATCH END
}

//EXPORT FUNCTIONS START


//EXPORT FUNCTIONS END

export default store;


