import { create } from 'zustand';
import { v4 as uuidv4 } from "uuid";

const useUserStore = create((set) => ({
    users: [],
    user: {},

    getUsers: async () => {
        const res = await fetch("http://localhost:5000/users")
        if (!res.ok) throw new Error('failed to fetch games');
        const data = await res.json();
        set({ users: data });
    },

    getUserById: async (id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`)
        if (!res.ok) throw new Error('failed to fetch the game');
        const data = await res.json();
        set({ user: data, loading: false });
    },

    addUser: async (newUser) => {
        const userId = uuidv4(); // Generate a unique ID
        const userWithId = { id: userId, ...newUser }; // Add ID to user

        const res = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userWithId),
        });

        if (!res.ok) throw new Error("Failed to add the user");
        const data = await res.json();
        set((state) => ({ users: [...state.users, data] }));
    },
    updateUser: async (updatedUser) => {
        const res = await fetch(`http://localhost:5000/users/${updatedUser.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser)
        })
        if (!res.ok) throw new Error('failed to add the game');
        const data = await res.json();
        set((state) => ({
            users: state.users.map((user) => (user.id === id ? data : user)),
            user: data,
        }));
    },
    deleteUser: async (id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'Delete',
        })
        if (!res.ok) throw new Error('failed to add the game');
        set((state) => ({ users: state.users.filter((u) => u.id !== id) }));
    }

}));

export default useUserStore;