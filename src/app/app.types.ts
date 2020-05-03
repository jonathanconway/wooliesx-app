export type Product = {
  productId: string;
  name: string;
  imageUrl: string;
  price: number;
  priceNotes: string;
};

export type Price = {
  currency: string;
  amount: number;
};
