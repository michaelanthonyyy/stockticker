import axios from "axios";

export default {
    getDailyStock: function(ticker) {
        return axios.get("/api/stocks/daily/"+ticker);
    },

    addUser: function(user) {
        return axios.post("/api/users/", user);
    },

    getUserByEmail: function(email) {
        return axios.get("/api/users/" + email);
    },

    updateUserByEmail: function(email, stocks) {
        return axios.put("/api/users/" + email, stocks);
    }
}