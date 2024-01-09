import { ReviewType } from '../types/review';

export const REVIEWS: ReviewType[] = [
  {
    id: 1,
    reviews:[
      {
        author: 'Kate Muir',
        text: 'Discerning travellers and Wes Anderson fans will luxuriate\n' +
    'in the glorious Mittel-European kitsch of one of the director&rsquo;s \n' +
    ' funniest and most exquisitely designed films in years.',
        date: new Date(2016, 12, 24),
        rating: '8,9',
      },
      {
        author: 'Bill Goodykoontz',
        text:
      'Anderson&rsquo;s films are too precious for some, but for those of\n' +
      'us willing to lose ourselves in them, they&rsquo;re a delight.\n' +
      '&raquo;The Grand Budapest Hotel&raquo; is no different, except\n' +
      'that he has added a hint of gravitas to the mix, improving the\n' +
      'recipe.',
        date: new Date(2015, 11, 18),
        rating: '8,0',
      },
      {
        author: 'Amanda Greever',
        text: 'I didn&rsquo;t find it amusing, and while I can appreciate the\n' +
      'creativity, it&rsquo;s an hour and 40 minutes I wish I could\n' +
      'take back.',
        date: new Date(2015,11,18),
        rating: '8,0',
      },
      {
        author: 'Matthew Lickona',
        text: 'The mannered, madcap proceedings are often delightful,\n' +
      'occasionally silly, and here and there, gruesome and/or\n' +
      'heartbreaking.',
        date: new Date(2016,12,20),
        rating: '7,2',
      }]
  }];
