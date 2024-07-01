import { create } from "zustand";
import { persist } from "zustand/middleware"

const INITIAL_STATE = {
  favorites: [],
};

export type LikeItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
}

type LikeType = {
  favorites: LikeItemType[];
};

type ActionTypes = {
  addToFavorites:(item:LikeItemType)=> void;
  removeFromFavorites:(item:LikeItemType)=> void;
}

export const useLikeStore = create(persist<LikeType & ActionTypes>( (set, get) => ({
  favorites: INITIAL_STATE.favorites,

    addToFavorites(item) {
        set((state) => ({ favorites: [...state.favorites, item] }))
    },
    removeFromFavorites(item) {
        set((state) => ({
          favorites: state.favorites.filter( (like) => like.id !== item.id ),
        }));
    }
}), {name: "like", skipHydration: true} ))