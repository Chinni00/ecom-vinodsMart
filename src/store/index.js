import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Reducer";

const store = configureStore({
    reducer:{cart:cartSlice.reducer}
})

export default store;