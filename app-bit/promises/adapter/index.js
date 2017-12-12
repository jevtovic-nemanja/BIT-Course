import axios from "axios";

class Thing {
    constructor(name, avatar, kind) {
        this.name = name;
        this.avatar = avatar;
        this.kind = kind;
    }
    getData() {
        return `${this.kind}: ${this.name}\n${this.avatar}\n`;
    }
}

axios.get("https://api.github.com/search/repositories?q=explore")
    .then(response => {
        let things = [];
        for (let i = 0; i < response.data.items.length; i++) {
            let element = response.data.items[i];
            things.push(new Thing(element.name, element.owner.avatar_url, "Repo"));
        }
        return things;
    })
    .then(things => {
        for (let i = 0; i < things.length; i++) {
            console.log(things[i].getData());
        }
    });