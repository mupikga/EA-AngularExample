import { User } from "./user";

export class Track {
    _id?: number;
    title: string;
    singer: string;
    year: number;
    duration: number;
    user: User;

    constructor(singer: string, title: string, year: number, duration: number, user: User) {
        this.duration = duration;
        this.title = title;
        this.singer = singer;
        this.year = year;
        this.user=user;
    }   
}
