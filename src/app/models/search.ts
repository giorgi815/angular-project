export class SearchProducts {
  total!: number;
  limit!: number;
  page!: number;
  sortedBy!: string;
  sortedDirection!: string;
  skip!: number;
  products!: Search[]
}

export class Products {
  price!: Price
}

export class Search {
  page_size!: number;
  page_index!: number;
  keywords!: string;
  category_id!: string;
  brand!: string;
  rating!: number;
  price_min!: number;
  price_max!: number;
  sort_by!: "rating" | "price" | "isse_date" | "title";
  sort_direction!: "asc" | "desc";
}

export class Price {
  current!: number;
  currency!: string;
  beforeDiscount!: number;
  discountPercentage!: number;
}

