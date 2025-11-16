export class Products {
    brand! : string;
    description! : string;
    category! : Category;
    images!: string[];
    issueDate!: string;
    price!: Price;
    rating!: string;
    stock!: number;
    thumbnail!: string;
    title!: string;
    warranty!: string;
    _id!: string;
}

export class Price {
    current! : number;
    curency!: string;
    beforeDiscount!: number;
    discountPercentage!: number;
}

export class Category {
    id! : number;
    name! : string;
    image! : string;

}
