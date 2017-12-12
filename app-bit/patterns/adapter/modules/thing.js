class Thing {
    constructor(name, avatar, kind) {
        this.name = name;
        this.avatar = avatar;
        this.kind = kind;
    }
    getData() {
        return `${this.kind}: ${this.name}\n${this.avatar}\n`
    }
}

export default Thing;