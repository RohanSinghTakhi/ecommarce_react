import { createSlice, nanoid } from "@reduxjs/toolkit";

 
const initialState = { users: [{ id: 1, name: "Sign in", email: "" },{}] };

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUserIndex = state.users.findIndex(user => user.id === id);

      if (existingUserIndex !== -1) {
        state.users[existingUserIndex] = { id, name, email };
      } else {
        state.users.push({ id: nanoid(), name, email });
      }
    }
  }
});

export const { adduser } = UserSlice.actions;
export default UserSlice.reducer;
