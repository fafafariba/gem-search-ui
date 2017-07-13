require 'rails_helper'

RSpec.describe "RubyGems API", type: :request do
	let(:valid_name) { "bcrypt" }
	let(:name) { "bcrypt" }
	let(:info) {
		"    bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project\n    for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling\n    passwords.\n"
	}
	let(:dependencies) {
		["rake-compiler", "rdoc", "rspec"]
	}
	let(:invalid_name) { "parser-" }

	describe "GET /gems" do
		
		context "when the name matches a Gem" do 
			
			before { get "/gems/#{valid_name}" }
			
			it "returns Gem name" do
				expect(json_res["name"]).to match(name)
			end 
			
			it "returns Gem info " do
				expect(json_res["info"]).to match(info)
			end
			
			it "returns Gem dependencies" do
				expect(json_res["dependencies"]).to match(dependencies)
			end

			it "returns status code 200" do
				expect(response).to have_http_status(200)
			end
		end

		context "when the name doesn't match any Gem" do
		
			before { get "/gems/#{invalid_name}" }
			
			it "returns an error" do
				expect(json_res["errors"]).to include(/Gem not found/)
			end

			it "returns status code 404" do
				expect(response).to have_http_status(404)
			end
		end
	end
end
