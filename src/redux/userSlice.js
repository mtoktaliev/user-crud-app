import { createSlice } from "@reduxjs/toolkit";

export const users = [
  {
    name: "Maksat",
    email: "max@mail.ru",
    id: 1,
  },
  {
    name: "Umar",
    email: "umar@mail.ru",
    id: 2,
  },
  {
    name: "Amir",
    email: "amir@mail.ru",
    id: 3,
  },
];

const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uuser = state.find((user) => user.id === id);
      if (uuser) {
        uuser.name = name;
        uuser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uuser = state.find((user) => user.id === id);
      if (uuser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
