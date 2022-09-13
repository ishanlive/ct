
const reducer = (state, action) => {
    if (action === 'increment') {
        return {
            count: state.count + 1,
            move: state.move
        }
    }
    else if (action === 'decrement') {
        return {
            count: state.count - 1,
            move: state.move
        }
    }
    else if (action === 'reset') {
        return {
            count: 0,
            move: state.move
        }
    }
    else if (action.type === 'stepUpdate') {
        return {
            count: state.count,
            move: action.step
        }
    }
    else {
        throw new Error();
    }
}

export default reducer