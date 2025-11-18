export class SearchProducts {
  total!: number;
  limit!: number;
  page!: number;
  sortedBy!: string;
  sortedDirection!: string;
  skip!: number;
  products!: Products[]
}

class Products {
  price!: Price
}

class Price {
  current!: number;
  currency!: string;
  beforeDiscount!: number;
  discountPercentage!: number;
}