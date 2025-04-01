import { create } from 'zustand';

const useGameStore = create((set) => ({
    games: [],
    loading: false,
    error: null,
    game: {},

    fetchGames: async () => {
        set({ loading: true, error: null });

        try {
            const res = await fetch("http://localhost:4000/games")
            if (!res.ok) throw new Error('failed to fetch games');

            const data = await res.json();
            set({ games: data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    getGameById: async (id) => {
        set({ loading: true, error: null });
        try {
            const res = await fetch(`http://localhost:4000/games/${id}`)
            if (!res.ok) throw new Error('failed to fetch the game');
            const data = await res.json();
            set({ game: data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    }

}));

export default useGameStore;