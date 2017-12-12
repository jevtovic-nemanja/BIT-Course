class Thing {
    constructor(name, avatar, kind) {
        this.name = name;
        this.avatar = avatar;
        this.kind = kind;
    }
    getData() {
        return `<img src="${this.avatar}"> ${this.name}`;
    }
}

export default Thing;