import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { users: [{ id: 1, name: "User", email: "SignUp" }] };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        pass: action.payload.pass,
      };
      state.users.push(user);
    }
  }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
