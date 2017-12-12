import axios from "axios";

class Users {
    constructor() { }
    fetchDataFromSite(notifyThingMaker) {
        axios.get("https://api.github.com/search/users?q=marko")
            .then(response => notifyThingMaker(response))
            .catch(response => console.log("GitHub server is not responding."));
    }
}

export default Users;