user1 = User.create(
    name: "Cody Barker",
    password: "test",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://drive.google.com/file/d/1cC33jvMiEGkogPrKZJLx8pNg1MBWCHpT/view?usp=drive_link"
    )

user2 = User.create(
    name: "Kelli Radwanski",
    password: "test",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://drive.google.com/file/d/1cLj3R8nPia15lqXHYjEhQqtdqNazCPUt/view?usp=drive_link"
    )

user3 = User.create(
    name: "Ben Buckingham",
    password: "test",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://drive.google.com/file/d/1ofr-vRnuxg_8VtfLLxAgzp43cDuScIRW/view?usp=drive_link"
    )

Trail.create(
    name: "Little Lake",
    average_rating: nil,
    number_of_reviews: 0,
    difficulty: "Easy",
    length: 2.3,
    description: "A gentle loop hike around a charming lake.",
    dogs_allowed: "Yes",
    family_friendly: "Yes",
    trailhead_coordinates: "45.47643118135615, -122.65444792465081"
)

Trail.create(
    name: "Miner's Peak",
    average_rating: nil,
    number_of_reviews: 0,
    difficulty: "Moderate",
    length: 5.1,
    description: "An out-and-back to Miner's peak, full of beautiful views.",
    dogs_allowed: "Yes",
    family_friendly: "No",
    trailhead_coordinates: "45.41632616732002, -121.94616054112697"
)

Trail.create(
    name: "Devastation Point",
    average_rating: nil,
    number_of_reviews: 0,
    difficulty: "Hard",
    length: 9.7,
    description: "A challenging out-and-back to the summit of Devastation Mountain. Not for the fait of heart but worth the stellar view!",
    dogs_allowed: "No",
    family_friendly: "No",
    trailhead_coordinates: "45.373111905749575, -121.69610755615261"
)

user1.reviews.create(
    trail_id: 1,
    date: "2023-05-10",
    trail_rating: 4,
    condition: "Great",
    content: "I love this trail! Great for the whole family!"
)

user1.reviews.create(
    trail_id: 2,
    date: "2023-05-10",
    trail_rating: 4,
    condition: "Muddy",
    content: "Fun hike but the trail was a bit muddy."
)

user1.reviews.create(
    trail_id: 3,
    date: "2022-08-10",
    trail_rating: 5,
    condition: "Great",
    content: "So hard but totally worth the summit! Can't wait to do it again next year!"
)

user2.reviews.create(
    trail_id: 1,
    date: "2023-06-01",
    trail_rating: 4,
    condition: "Great",
    content: "Lovely! So fun for the kids."
)

user2.reviews.create(
    trail_id: 2,
    date: "2023-04-10",
    trail_rating: 4,
    condition: "Muddy",
    content: "I had so much fun hiking this with my boyfriend. Wonderful view at the top!"
)

user2.reviews.create(
    trail_id: 3,
    date: "2022-08-11",
    trail_rating: 5,
    condition: "Great",
    content: "What a workout!"
)

user3.reviews.create(
    trail_id: 1,
    date: "2023-06-18",
    trail_rating: 4,
    condition: "Great",
    content: "Pretty but short."
)

user3.reviews.create(
    trail_id: 2,
    date: "2023-07-6",
    trail_rating: 5,
    condition: "Great",
    content: "Worth the trip!"
)

user3.reviews.create(
    trail_id: 3,
    date: "2022-09-01",
    trail_rating: 5,
    condition: "Great",
    content: "What an awesome hike. Very challening but definitely worth it."
)