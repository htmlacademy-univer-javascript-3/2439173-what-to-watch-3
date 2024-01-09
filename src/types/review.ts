export type InnerReviewType = {
  author: string;
  text: string;
  date: Date;
  rating: string;
};

export type ReviewType = {
  id: number;
  reviews: InnerReviewType[];
};
