let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
let SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const messageReducer = (state = initialState,action) =>{


    switch (action.type) {

        case  UPDATE_NEW_MESSAGE_BODY: {
          return {
                ...state,
                newMessageBody: action.body
            }

        }
        case SEND_MESSAGE: {
             let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messageData:[...state.messageData,{id: 7, message: body}]
            }

        }
        default:
            return state;
    }
}
export const SendMessageCreator = () =>{
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}
