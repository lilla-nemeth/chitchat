type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

export { AppStore, RootState, AppDispatch };
