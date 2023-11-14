import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        arr: [
            { id: 1, name: "To check email" },
            { id: 2, name: "UI Task web page" },
            { id: 3, name: "Learn javascript basic" },
            { id: 4, name: "Learn HTML Advance" },
            { id: 5, name: "Medical App UI" },
            { id: 6, name: "Learn Java" },
        ]
    },
    reducers: {

    },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer