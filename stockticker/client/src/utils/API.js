import axios from "axios";

export default {
    getDailyStock: function(ticker) {
        return axios.get("/api/stocks/daily/"+ticker);
    }
}