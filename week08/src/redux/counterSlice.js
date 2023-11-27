import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit/dist';

const fetchData = createAsyncThunk('api/getdata', async () => {
    try {
        const data = await fetch("https://656352e7ee04015769a70e28.mockapi.io/arr");
        if (!data) {
            throw new Error("not found data");
        } else {
            const res = await data.json();
            return res;
        }
    } catch (error) {
        throw new Error(error);
    }
})

const updateData = createAsyncThunk('api/update', async (item) => {
    try {
        const data = await fetch(`https://656352e7ee04015769a70e28.mockapi.io/arr/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        });
        if (!data) {
            throw new Error("not found data");
        } else {
            const res = await data.json();
            return res;
        }
    } catch (error) {
        throw new Error(error);
    }
})

const deteteData = createAsyncThunk('api/delete', async (item) => {
    try {
        const data = await fetch(`https://656352e7ee04015769a70e28.mockapi.io/arr/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!data) {
            throw new Error("not found data");
        } else {
            const res = await data.json();
            return res;
        }
    } catch (error) {
        throw new Error(error);
    }
})

const createData = createAsyncThunk('api/create', async (item) => {
    try {
        const data = await fetch(`https://656352e7ee04015769a70e28.mockapi.io/arr`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        });
        if (!data) {
            throw new Error("create error data");
        } else {
            const res = await data.json();
            return res;
        }
    } catch (error) {
        throw new Error(error);
    }
})


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        arr: [],
        loading: true,
        error: null,
        dataupdate: {},
        updatesuccess: false,
        deletesuccess: false,
        createsuccess: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.arr = action.payload;
        })
            .addCase(updateData.fulfilled, (state, action) => {
                const updatedItemIndex = state.arr.findIndex(item => item.id === action.payload.id);
                if (updatedItemIndex !== -1) {
                    state.arr[updatedItemIndex] = action.payload;
                }
            })
            .addCase(deteteData.fulfilled, (state, action) => {
                state.arr = state.arr.filter(item => item.id !== action.payload.id)
            })
            .addCase(createData.fulfilled, (state, action) => {
                state.arr = [...state.arr, action.payload]
            })
    }

})

export { fetchData, updateData, deteteData, createData };


export default counterSlice.reducer;