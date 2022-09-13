import {createSlice} from '@reduxjs-toolkit'

const authSlice = createSlice({
    name:'auth',
    initilState:{isLoggedIn: false},
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice  
