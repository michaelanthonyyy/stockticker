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
    },

    addComment: function(comment) {
        return axios.post("/api/comments/", comment);
    },

    updateCommentById: function(id, content) {
        return axios.put("/api/comments/"+id, content);
    },

    getBusinessNews: function() {
        return axios.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=rBdT9Ta3VCBY52rY43X4LfdNrg58vknE");
    }
}