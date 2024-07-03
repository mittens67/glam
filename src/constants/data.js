import images from './images';

const awards = [
  {
    imgUrl: images.award02,
    title: 'Salon of Distinction',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Excellence in Beauty Care',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Indian Hair Dressing Awards',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const makeup = [
  {
    title: 'Party Makeup',
    price: '1499',
    tags: 'Artist'
  },
  {
    title: 'Party Makeup',
    price: '2499',
    tags: 'Expert'
  },
  {
    title: 'Party Makeup',
    price: '1999',
    tags: 'Sr Artist'
  },
  {
    title: 'Hairdo',
    price: '899',
    tags: 'Artist'
  },
  {
    title: 'Hairdo',
    price: '1499',
    tags: 'Expert'
  },
  {
    title: 'Hairdo',
    price: '1199',
    tags: 'Sr Artist'
  }
]

const packages = [
  {
    title: 'Bridal Makeover',
    price: '6299',
    tags: 'Makeup, Hairdo, Saree draping, Manicure - Artist'
  },
  {
    title: 'Bridal Makeover',
    price: '14399',
    tags: 'Makeup, Hairdo, Saree draping, Manicure - Expert'
  },
  {
    title: 'Bridal Makeover',
    price: '11199',
    tags: 'Makeup, Hairdo, Saree draping, Manicure - Sr Artist'
  },
  {
    title: 'HD Airbrush Bridal Makeover',
    price: '20199',
    tags: 'Expert'
  },
  {
    title: 'HD Airbrush Bridal Makeover',
    price: '15299',
    tags: 'Sr Artist'
  },
]

export default { makeup, packages, awards };
