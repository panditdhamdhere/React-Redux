export default reducer = (state=0, action) => {
if (action.type=='deposit'){
    return state + actionif.payload
}
else if (action.type=='withdraw'){
    return state - actionif.payload
}
else {
    return state;
}
}