import { User } from './user';

export class Message {

    constructor(private _nameFrom: string, private _to: User, private _text: string) { }

    get nameFrom(): string {
        return this._nameFrom;
    }

    get to(): User {
        return this._to;
    }

    get text(): string {
        return this._text;
    }

    toJson(): any {
        return {
            nameFrom: this._nameFrom,
            to: this._to,
            text: this._text
        }
    }
}