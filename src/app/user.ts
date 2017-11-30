export class User {
    private _id: Number;

    private _hash: string;

    private _name: string;

    private _email: string;

    set id(id: Number) {
        this._id = id;
    }

    get id(): Number {
        return this._id;
    }

    set hash(hash: string) {
        this._hash = hash;
    }

    get hash(): string {
        return this._hash;
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set email(email: string) {
        this._email = email;
    }

    get email(): string {
        return this._email;
    }
}
