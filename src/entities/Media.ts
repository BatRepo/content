export class Media {
    public id!: string;
    public assetId!: string;
    public nameAsset!: string;
    public description!: string;
    public file!: [];

    constructor(props: Omit<Media, 'id'>, _id?: string) {
        Object.assign(this, props);

        if (_id && _id != undefined) {
            this.id = _id;
        }
    }
}