import create from "zustand";

const useStore = create((set) => ({
	name: "Aquib",
	counter: 0,
	setName: (name) => set({ name }),
	resetCounter: () => set({ counter: 0 }),
	toggleRunning: () => set((state) => ({ isRunning: !state.isRunning })),
	incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useStore;
