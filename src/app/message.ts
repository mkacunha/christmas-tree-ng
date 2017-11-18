import { User } from './user';

export class Message {

    constructor(private _from: User, private _to: User, private _text: string) { }

    get from(): User {
        return this._from;
    }

    get to(): User {
        return this._to;
    }

    get text(): string {
        return this._text;
    }

    toJson(): any {
        return {
            from: this._from,
            to: this._to,
            text: this._text
        }
    }
}