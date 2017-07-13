# Gem Search UI

## Purpose
To create an app with user interface that connects to RubyGems API using the wrapper [gem](https://github.com/rubygems/gems). Refer to the [original prompt](https://github.com/fafafariba/gem-search-ui/blob/master/original-readme.md) for more information.

## Instructions

### View App browser
Clone this repo.

On the command line:
- `bundle install` to set up Rails backend
- `yarn` or `npm install` to set up React frontend
- `rails s` to start server
- `yarn start` or `npm start` to launch Webpack
 
Go to `localhost:3000` in browser

## Features

### Tech and Tools
The app was created using Ruby on Rails, React-Redux, SCSS, Webpack, Babel.

### Design
The app's layout is nearly pixel for pixel identical to the Sketch file. Adjustments search bar length were made to better accomodate browswer width and spacing was modified for consistency.

The app is also responsive to optimize tablet and mobile viewing.

### RSpec Tests
From directory, run `bundle exec rspec spec/requests/gems_spec.rb`

### Jest/Enzyme Tests 
From directory, run `yarn test` or `npm test`. To run individual tests, run `yarn test 'testName'` i.e. `yarn run 'reducers'`.

Note: Due to time constraints, only the `'reducers', 'actions', 'util', 'store'` tests were completed.

### Future Additions
- Complete Jest/Enzyme component testing
- Create user friendly submit button to replace magnifying glass when screen size decreases
- Modify navigation to be more readable for mobile and tablet viewing
- Add pagination for when gem dependencies or favorites containers overflow
- Add expiration date to data stored in local storage
