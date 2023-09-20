import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface TestData {
  id: string;
  name: string;
}
interface StateProp {
  users: TestData[];
}
const initialState: StateProp = {
  users: [{ id: "sid1213", name: "siddharth" }],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTest: (state, action: PayloadAction<TestData>) => {
      const data = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.users.push(data);
    },
  },
});

export const { addTest } = testSlice.actions;
export default testSlice.reducer;
