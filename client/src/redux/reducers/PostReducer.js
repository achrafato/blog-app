


const PostReducer = (state=[], action) => {
    switch(action.type){
        case "fetch":
            return action.payload
        case "create":
            return [...state,action.payload]
        case "delete":
            return state.filter(post=>post._id !== action.payload._id)
        case "update":
            return state.map(post=>post._id === action.payload._id ? action.payload : post) 
        default:
            return state
    }
}

export default PostReducer