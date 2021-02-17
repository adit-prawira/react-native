import axios from "axios";

const SECRET_KEY =
    "eaDRVB7-_YKzA_r9q2babJ1Z8z7CekCr672ro9Uzjy2YgNUAa4OdgW95YWkVkE7A54n4Zj255NhBQDx3zwzmai9JpCqMjI6dIwgZmAXgIcTuOBi4dzkBRBtOHOcsYHYx";
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
    },
});
