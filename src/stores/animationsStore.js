import {create} from 'zustand';
const useAnimationStore = create(set => ({
  isCityInputFocused: false,
  setCityInputFocused: () => set({isCityInputFocused: true}),
  setCityInputBlured: () => set({isCityInputFocused: false}),
}));

export default useAnimationStore;
