export class Animal {
    constructor(public id: number,
        public name: string,
        public latinName: string,
        public yearOfBirth: number,
        public shortDescription: string,
        public longDescription: string,
        public imageUrl: string,
        public medicine: string,
        public isFed: boolean,
        public lastFed: Date,
    ) { }
}