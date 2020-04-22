export interface Tool {
  id: string;
  title: string;
  photos: [{
    photoLarge: string;
    photoSmall: string;
  }];
  description: string;
  category: string;
  price: number;
  postDate: Date;
  quantity: number;
}
