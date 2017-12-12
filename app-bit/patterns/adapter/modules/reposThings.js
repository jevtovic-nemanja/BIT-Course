import Thing from "./thing";
import Repos from "./repos";

class ReposThings {
    constructor() { }
    makeThings(printData) {
        const repos = new Repos();
        repos.fetchDataFromSite(response => {
            let things = [];
            for (let i = 0; i < response.data.items.length; i++) {
                let element = response.data.items[i];
                things.push(new Thing(element.name, element.owner.avatar_url, "Repo"));
            }
            printData(things);
        })
    }
}

export default ReposThings;