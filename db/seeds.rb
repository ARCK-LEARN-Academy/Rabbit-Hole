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

burrows = burrows.map do |each_burrow|
  puts "creating burrow #{each_burrow}"
  Burrow.create each_burrow
end

user = User.where(email: "test@example.com").first_or_create do |user|
  user.password = "password"
  user.password_confirmation = "password"
end

burrows.each do |burrow|
  3.times do |i|
    Post.create(
      title: "Post #{i} for #{burrow.title}",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      user: user,
      burrow: burrow
    )
  end
end
