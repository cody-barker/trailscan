user1 = User.create!(
    username: "codybarker",
    password: "test",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://i.imgur.com/XyCqP8l.jpg"
    )

user2 = User.create!(
    username: "kelliradwanski",
    password: "test",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://i.imgur.com/M24RM1O.jpg"
    )

user3 = User.create!(
    username: "benbuckingham",
    password: "test",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://i.imgur.com/oxz0elk.jpg"
    )

Trail.create!(
    name: "Little Lake",
    difficulty: "Easy",
    length: 2.3,
    description: "A gentle loop hike around a charming lake.",
    dogs_allowed: "Yes",
    family_friendly: "Yes",
    trailhead_coordinates: "45.47643118135615, -122.65444792465081",
    photo: "https://photos.thedyrt.com/photo/39419/photo/oregon-little-crater-lake-campground_e22fadabdb692a2cf4504f749b3372ea.jpg?auto=webp&width=1482"
)

Trail.create!(
    name: "Miner's Peak",
    difficulty: "Moderate",
    length: 5.1,
    description: "An out-and-back to Miner's peak, full of beautiful views.",
    dogs_allowed: "Yes",
    family_friendly: "No",
    trailhead_coordinates: "45.41632616732002, -121.94616054112697",
    photo: "https://oregonwild.org/sites/default/files/featured-imgs/ZipMt.Jefferson.jpg"
)

Trail.create!(
    name: "Devastation Point",
    difficulty: "Hard",
    length: 9.7,
    description: "A challenging out-and-back to the summit of Devastation Mountain. Not for the fait of heart but worth the stellar view!",
    dogs_allowed: "No",
    family_friendly: "No",
    trailhead_coordinates: "45.373111905749575, -121.69610755615261",
    photo: "https://hikingproject.com/assets/photos/hike/7049528_medium_1555541583.jpg?cache=1688773247"
)

user1.reviews.create!(
    trail_id: 1,
    date: "2023-05-10",
    trail_rating: 4,
    condition: "Great",
    content: "I love this trail! Great for the whole family!"
)

user1.reviews.create!(
    trail_id: 2,
    date: "2023-05-10",
    trail_rating: 4,
    condition: "Muddy",
    content: "Fun hike but the trail was a bit muddy."
)

user1.reviews.create!(
    trail_id: 3,
    date: "2022-08-10",
    trail_rating: 5,
    condition: "Great",
    content: "So hard but totally worth the summit! Can't wait to do it again next year!"
)

user2.reviews.create!(
    trail_id: 1,
    date: "2023-06-01",
    trail_rating: 4,
    condition: "Great",
    content: "Lovely! So fun for the kids."
)

user2.reviews.create!(
    trail_id: 2,
    date: "2023-04-10",
    trail_rating: 4,
    condition: "Muddy",
    content: "I had so much fun hiking this with my boyfriend. Wonderful view at the top!"
)

user2.reviews.create!(
    trail_id: 3,
    date: "2022-08-11",
    trail_rating: 5,
    condition: "Great",
    content: "What a workout!"
)

user3.reviews.create!(
    trail_id: 1,
    date: "2023-06-18",
    trail_rating: 4,
    condition: "Great",
    content: "Pretty but short."
)

user3.reviews.create!(
    trail_id: 2,
    date: "2023-07-6",
    trail_rating: 5,
    condition: "Great",
    content: "Worth the trip!"
)

user3.reviews.create!(
    trail_id: 3,
    date: "2022-09-01",
    trail_rating: 5,
    condition: "Great",
    content: "What an awesome hike. Very challening but definitely worth it."
)