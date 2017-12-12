import ReposThings from "./modules/reposThings";
import UsersThings from "./modules/usersThings";

const reposThings = new ReposThings();
const usersThings = new UsersThings();

// const thingsService = reposThings;
const thingsService = usersThings;

class Main {
    constructor() { }
    getThings() {
        thingsService.makeThings(things => {
            for (let i = 0; i < things.length; i++) {
                let data = things[i].getData();
                $("ol").append(`<li>${data}</li>`);
            }
            $("span").append(` ${things[0].kind}`);
        });
    }
}

const main = new Main();
main.getThings();