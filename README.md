# Gem Search UI
## Purpose
To create an app that renders [more info](https://github.com/fafafariba/gem-search-ui/blob/master/original-readme.md)

## Instructions
### View App browser
1. Clone repo
2. Run `bundle install` on the command line to set up Rails backend
3. Run `yarn` or `npm install` to set up React frontend
4. Start server `rails s` on the command line.
7. 
6. Go to `localhost:3000` in browswer

### RSpec Tests
From directory, run `bundle exec spec spec/requests/gems_spec.rb`

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
