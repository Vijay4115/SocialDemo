
const user = (state = {}, action) => {

    switch (action.type) {
        case 'LOGIN':
            return action.payload

        case 'GOOGLELOGIN':
            return action.payload

        case 'FB_LOGIN':
            return action.payload;

        case 'APPLE_LOGIN':
            return action.payload;


        default:
            return state;
    }
}

export default user;