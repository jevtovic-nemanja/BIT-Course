import ReposThings from "./modules/reposThings";
import UsersThings from "./modules/usersThings";

const reposThings = new ReposThings();
const usersThings = new UsersThings();

const thingsService = reposThings;
// const thingsService = usersThings;

class Main {
    constructor() { }
    getThings() {
        thingsService.makeThings(things => {
            for (let i = 0; i < things.length; i++) {
                console.log(things[i].getData());
            }
        })
    }
}

const main = new Main();
main.getThings();