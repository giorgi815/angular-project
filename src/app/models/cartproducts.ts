export class Price {
  current!: number;
  beforeDiscount!: number;
}

export class Total {
  price!: Price;
  quantity!: number;
  products!: number;
}

export class Product {
  quantity!: number;
  pricePerQuantity!: number;
  beforeDiscountPrice!: number;
  productId!: string;
}

export class Order {
  _id!: string;
  userId!: string;
  createdAt!: string;
  total!: Total;
  products!: Product[];
}
