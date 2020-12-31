import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        selectedMail: null,
        isComposeOpen: false,
    },
    reducers: {
        selectMail: (state, action) => {
            state.selectedMail = action.payload
        },
        openCompose: (state) => {
            state.isComposeOpen = true
        },
        closeCompose: (state) => {
            state.isComposeOpen = false
        },
    },
})

export const { selectMail, openCompose, closeCompose } = mailSlice.actions

export const selectOpenMail = (state) => state.mail.selectedMail

export const selectIsComposeOpen = (state) => state.mail.isComposeOpen

export default mailSlice.reducer
