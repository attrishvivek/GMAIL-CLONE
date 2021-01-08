import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
   SendMessageIsOpen: false,
  },
  reducers: {
    selectMail:(state,action)=>{
state.selectedMail=action.payload;
    },
    openSendMessage: (state) => {
     
      state.SendMessageIsOpen= true;
    },
    closeSendMessage: (state) => {
      state.SendMessageIsOpen= false;
    },
    
  },
});

export const
 { selectMail,
  openSendMessage,
  closeSendMessage
 } = mailSlice.actions;

 export const selectOpenMail =(state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.SendMessageIsOpen;

export default mailSlice.reducer;
