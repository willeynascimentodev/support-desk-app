import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState =  {
    user: null,
    isError: false,
    isSuccess: false,
    message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    
})

export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        }).addCase(register.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.user = action.payload
        }).addCase(register.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = acion.payload
            state.user = null
        })
    }
})

export default authSlice.reducer