user1 = User.create(
    name: "Cody Barker",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://drive.google.com/file/d/1cC33jvMiEGkogPrKZJLx8pNg1MBWCHpT/view?usp=drive_link"
)

user2 = User.create(
    name: "Kelli Radwanski",
    city: "Portland",
    state: "Oregon",
    profile_image: "https://drive.google.com/file/d/1cLj3R8nPia15lqXHYjEhQqtdqNazCPUt/view?usp=drive_link"
)

user3 = User.create(
    name: "Ben Buckingham",
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

