import { createSlice } from "@reduxjs/toolkit";

export const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: "",
  reducers: {
    /* return implicito */
    setNameTrainer: (state, action) => action.payload,
  },
});

/* exportar acciones  */
export const { setNameTrainer } = nameTrainerSlice.actions;

/* Guardar slice dentro de la store  */
export default nameTrainerSlice.reducer;
