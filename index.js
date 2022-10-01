class Person{
    constructor(name, walk) {
        this.name = name
        this.walk = walk
    }
    get() {
        return this.name
    }
    set(name) {
        this.name = name
    }
}

class Programmer extends Person {
    get() {
        return super.get()
    }
    set(name) {
        super.set(name)
    }
}

const p1 = new Programmer('Anh Long', 'chạy bộ')
console.log(p1.get())
p1.set('Anh Nam')
console.log(p1.get())