burrows = [
  {
      title: 'Dogs',
      about: 'This burrow is all about cute doggos',
      image: 'https://i.pinimg.com/564x/8d/91/71/8d917130ae03e28ddfd5cb9464df47e5.jpg'
  },
  {
    title: 'Cats',
    about: 'This burrow is all about cute cats',
    image: 'https://media.istockphoto.com/photos/lilac-british-cat-with-a-blue-coat-looking-up-the-cat-opened-his-a-picture-id1142665470?k=20&m=1142665470&s=612x612&w=0&h=z0l2XceUwtBEJD48n7ZuxQsWzdl4OlJ0Wn4hrsKadtY='
  },
  {
    title: 'Steak',
    about: 'All about juicy steaks!',
    image: 'https://www.fifteenspatulas.com/wp-content/uploads/2021/08/Grilled-Ribeye-1-1.jpg'
  },
  {
    title: 'Cartoons',
    about: 'Burrow dedicated to any cartoons!',
    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/ed-edd-n-eddy.jpg'
  }
]

burrows.each do |each_burrow|
  Burrow.create each_burrow
  puts "creating burrow #{each_burrow}"
end 
