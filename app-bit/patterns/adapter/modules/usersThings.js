import Thing from "./thing";
import Users from "./users";

class UsersThings {
    constructor() { }
    makeThings(printData) {
        const users = new Users();        
        users.fetchDataFromSite(response => {
            let things = [];
            for (let i = 0; i < response.data.items.length; i++) {
                let element = response.data.items[i];
                things.push(new Thing(element.login, element.avatar_url, "User"));
            }
            printData(things);
        })
    }
}

export default UsersThings;