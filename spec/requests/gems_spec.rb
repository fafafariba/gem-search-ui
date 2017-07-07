require 'rails_helper'
require 'byebug'

RSpec.describe "RubyGems API", type: :request do
	let(:valid_name) { "bcrypt" }
	let(:name) { "bcrypt" }
	let(:info) {
		"    bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project\n    for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling\n    passwords.\n"
	}
	let(:dependencies) {
		{"development"=>[{"name"=>"rake-compiler", "requirements"=>"~> 0.9.2"}, {"name"=>"rdoc", "requirements"=>"~> 3.12"}, {"name"=>"rspec", "requirements"=>">= 3"}], "runtime"=>[]}
	}
	let(:invalid_name) { "asdff" }

	describe "GET /gems" do
		
		context "when the name matches a Gem" do 
			
			before { get "/gems/#{valid_name}" }
			
			it "returns Gem name" do
				expect(json_res["name"]).to match(name)
			end 
			
			it "returns Gem info " do
				expect(JSON.parse(response.body)["info"]).to match(info)
			end
			
			it "returns Gem dependencies" do
				expect(JSON.parse(response.body)["dependencies"]).to match(dependencies)
			end

			it "returns status code 200" do
				expect(response).to have_http_status(200)
			end
		end

		context "when the name doesn't match any Gem" do
		
			before { get "/gems/#{invalid_name}" }
			
			it "returns an error" do
				debugger
				expect(JSON.parse(response.body)["errors"]).to include(/Gem not found/)
			end

			it "returns status code 404" do
				expect(response).to have_http_status(404)
			end
		end
	end
end
