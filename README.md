## Trailscan

Trailscan is an app built for hikers. It utilizes sessions to allow users to sign up and stay signed in. It also allows users to add new trails to the app and review trails they've hiked.

## Features

<img src="public/Trailscan-GIF.gif" alt="app.gif">
<a href="https://youtu.be/exQ-k43C1ZE" alt="app video">Click here for a demo video of the app.</a>

Users can:

- View a list of all the available trails
- Add new trails to the list
- View a trail's specific details like length, difficulty, conditions, and user reviews
- Sign up and login/logout using sessions
- Create/edit/delete reviews for trails they've hiked

## Available Scripts

## Backend

You will ned Postgresql installed and running to run this app locally.

### `bundle`

Installs all of the ruby gems associated with backend.

### `rails db:migrate`

Runs the migrations to setup the database

### `rails db:seed`

Seeds the database

### `rails db:reset`

Resets the database

### `rails s`

Runs the database server on localhost:3000

## Client

### `npm i`

Installs the packages required to run the client

### `npm start --prefix client`

Runs the client development server on localhost:4000

## For Contributors
If you'd like to contribute to this project, you may clone this repo and submit your changes for approval to codybarker.or@gmail.com

##  Support
e: codybarker.or@gmail.com

## Project Status
In development and unlicensed

## Author
Cody Barker

 #Make a custom route that takes an argument of a number. Use that number to find all trails shorter than that number. Once you have identified the trails that are shorter than that length, grab the users associated with those trails. You should render back an array of user objects. It doesn't matter if you send back associated reviews or trails with the users, that's up to you. If there are no trails that meet the length criterion send back an object with key "error" and a relevant message, including the number used in the search.

    # def short_trails_users
    #     trails = Trail.all.where("length < ?", params[:num])
    #     if trails.any?
    #         users = trails.map { |trail| trail.users}
    #         render json: users.flatten.uniq.to_json
    #     else
    #         if params[:num] == "1"
    #             render json: {error: "No trails are shorter than #{params[:num]} mile long."}, status: :not_found
    #         else
    #             render json: {error: "No trails are shorter than #{params[:num]} miles long."}, status: :not_found
    #         end
    #     end
    # end