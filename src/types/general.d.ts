export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  originalPrice: number;
  offerPercentage: number;
  stocks: number;
  images: string[];
  isPublished: boolean;
  rating: number;
  ratingCount: number;
  features: string[];
};

export interface ICategory {
  id: string;
  name: string;
  image: string;
};

export interface IOrder {
  id: string;
  products: IOrderItem[];
  dateOfOrder: string;
  fulfillmentStatus: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentStatus: 'pending' | 'complete';
  shippingAddress: IOrderAddress;
  total: number;
};

export interface IOrderItem {
  product: IProduct;
  quantity: number;
};

export interface IOrderAddress {
  name: string;
  houseName: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  phoneNumber: string;
}