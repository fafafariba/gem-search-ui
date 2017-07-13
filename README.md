# Gem Search UI
## Purpose
To create an app that renders [more info](https://github.com/fafafariba/gem-search-ui/blob/master/original-readme.md)

## Instructions
### View App browser
Clone this repo.

On the command line:
- `bundle install` to set up Rails backend
- `yarn` or `npm install` to set up React frontend
- `rails s` to start server
- `yarn start` or `npm start` to launch Webpack
 
Go to `localhost:3000` in browser

### RSpec Tests
From directory, run `bundle exec rspec spec/requests/gems_spec.rb`

### Jest/Enzyme Tests 
From directory, run `yarn test` or `npm test`. To run individual tests, run `yarn test 'testName'` i.e. `yarn run 'reducers'`.

## Challenges

What to do about 'react-rails' gem that has many dependencies?

What to do about nav bar when favorite list is too long ?

How to set up components?
	- error search bar plus message so could add 'id = "errors" ' for CSS
	- search results together
		- could make dependencies their own component but would make favoriting more complicated
	
What if favorites list gets long ?
	Pagination.
