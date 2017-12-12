import axios from "axios";

class Repos {
    constructor() { }
    fetchDataFromSite(notifyThingMaker) {
        axios.get("https://api.github.com/search/repositories?q=explore")
            .then(response => notifyThingMaker(response))
            .catch(response => console.log("GitHub server is not responding."));
    }
}

export default Repos;