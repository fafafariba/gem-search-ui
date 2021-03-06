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

## Tech and Tools
The app was created using Ruby on Rails, React-Redux, SCSS, Webpack, and Babel.

## App Design
React-Redux was selected as the frontend framework for its speed and ability to re-render after a change in state. 

### Component Hierarchy

```javascript
<App />
 <Nav/>
 <Favorites />
 <Search />
  <SearchBar />
  <Gems />
   <GemDependencies/>
```
### Store

```javascript
gem: {
  gem: {
    name: 'faker',
    info: 'Faker, a port of Data::Faker from Perl, is used to easily generate fake data: names, addresses, phone numbers, etc.',
    dependencies: ['i18n']
  errors: null
  }
}
```
### API Request

```javascript
$.ajax({
 method: 'GET',
 url: 'gems/faker'
})
 ```
 
## UI/UX
The app's layout is nearly pixel for pixel identical to the [Sketch file](https://github.com/fafafariba/gem-search-ui/blob/master/designs/fe-dev-test-june2017.sketch). Adjustments were made to the length of the search bar length to better accomodate browswer width and spacing was modified for consistency.

The app is also responsive for optimized tablet and mobile viewing.

### Tests
#### RSpec
From directory, run `bundle exec rspec spec/requests/gems_spec.rb`

#### Jest/Enzyme
From directory, run `yarn test` or `npm test`. To run individual tests, run `yarn test 'testName'` i.e. `yarn run 'reducers'`.

Note: Due to time constraints, only the `'reducers', 'actions', 'util', 'store'` tests were completed.

### Future Additions
- Complete Jest/Enzyme component testing
- Create user friendly submit button to replace magnifying glass when screen size decreases
- Modify navigation to be more readable for mobile and tablet viewing
- Add pagination for when gem dependencies or favorites containers overflow
- Add expiration date to data stored in local storage
