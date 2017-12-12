import axios from "axios";

class Users {
    constructor() { }
    fetchDataFromSite(notifyThingMaker) {
        axios.get("https://api.github.com/search/users?q=marko")
            .then(response => notifyThingMaker(response));
    }
}

export default Users;