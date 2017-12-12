import axios from "axios";

class Repos {
    constructor() { }
    fetchDataFromSite(notifyThingMaker) {
        axios.get("https://api.github.com/search/repositories?q=explore")
            .then(response => notifyThingMaker(response));
    }
}

export default Repos;