
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export let getUser = createAsyncThunk("user-slice/fetchUser", async(data, thunkAPI)=>{
    try{
        let res = await fetch("https://api.github.com/users")
        let resData = await res.json()
        return resData;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.message) 
    }
})

export let getOneUser = createAsyncThunk("user-slice/getOneUser", async(data, thunkAPI)=>{
    try{
        let res = await fetch(`https://api.github.com/users/${data}`)
        let resData = await res.json()
        return resData
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})

let UserSlice = createSlice(
    {
        name:"user-slice",
        initialState:{user:[], loading:false, count:0},
        reducers:{
            increaseCount:(state, action)=>{
                state.count+=1;
            },
            decrementCount:(state, action)=>{
                state.count-=1
            }},
            extraReducers:(builder)=>{
                builder
                .addCase(getUser.pending,(state, action)=>{state.loading = true})
                .addCase(getOneUser.pending,(state, action)=>{state.loading=true})
                .addCase(getUser.fulfilled,(state, action)=>{state.loading = false, state.users = action.payload})
                .addCase(getOneUser.fulfilled,(state, action)=>{state.loading=false, state.oneUser = action.payload})     
                .addCase(getUser.rejected,(state, action)=>{state.loading = false, state.error = action.error})
                .addCase(getOneUser.rejected,(state, action)=>{state.loading=false, state.error = action.error})
                
            }
    }
)

export let {increaseCount, decrementCount} = UserSlice.actions
export default UserSlice.reducer