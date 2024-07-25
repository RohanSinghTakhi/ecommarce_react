import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./redux"; // Assuming you exported the default reducer

export const store = configureStore({
  reducer: {
    user: UserSlice,
  }
});
