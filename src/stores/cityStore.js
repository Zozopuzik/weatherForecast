import {create} from 'zustand';

const useCityStore = create(set => ({
  cityInInput: '',
  setCityInInput: value => set({cityInInput: value}),
  selectedCity: '',
  setSelectedCity: value => set({selectedCity: value}),
  watchList: [],
  addToWatchList: city =>
    set(state => ({watchList: [...state.watchList, city]})),
  removeFromWatchList: city =>
    set(state => ({watchList: state.watchList.filter(item => item !== city)})),
  setWatchList: value => set({watchList: [...value]}),
}));

export default useCityStore;
