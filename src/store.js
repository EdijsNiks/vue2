import { createStore } from 'vuex';
import songsList from "../src/assets/songs-list.json";

export const store = createStore({
    state: {
        all_songs: songsList,
        user: {
            first_name: 'name',
            last_name: 'surname',
            student_code: 'IT',
            logged_at: [],
            logged_in: false,
        },
    },
    mutations: {
        LOGGEDIN(state) {
            state.user.logged_in = true;
            const now = new Date();
            const timestamp = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
            state.user.logged_at.push(timestamp);
        },
        LOGGEDOUT(state) {
            state.user.logged_in = false;
        },
        RESET_USER(state) {
            state.user.first_name = 'name';
            state.user.last_name = 'surname';
            state.user.student_code = 'IT';
            state.user.logged_at = [];
            state.user.logged_in = false;
        },
        UPDATE_FIRST_NAME(state, firstName) {
            state.user.first_name = firstName;
        },
        UPDATE_LAST_NAME(state, lastName) {
            state.user.last_name = lastName;
        },
        UPDATE_STUDENT_CODE(state, studentCode) {
            state.user.student_code = studentCode;
        },
    },
    actions: {
        login({ commit }) {
            commit('LOGGEDIN');
        },
        logout({ commit }) {
            commit('LOGGEDOUT');
            localStorage.removeItem('user');
        },
        resetUser({ commit }) {
            commit('RESET_USER');
        },
        updateFirstName({ commit }, firstName) {
            commit('UPDATE_FIRST_NAME', firstName);
        },
        updateLastName({ commit }, lastName) {
            commit('UPDATE_LAST_NAME', lastName);
        },
        updateStudentCode({ commit }, studentCode) {
            commit('UPDATE_STUDENT_CODE', studentCode);
        },
    },
    getters: {
        isLoggedIn: state => state.user.logged_in,
    },
});

export function loginUser() {
    store.commit('LOGGEDIN');
}

export function logoutUser() {
    store.commit('LOGGEDOUT');
}

export function resetUser() {
    store.commit('RESET_USER');
}

export default store;