require 'rails_helper'
require 'byebug'

RSpec.describe "Gems API", type: :request do
	let(:valid_name) { "bcrypt" }
	let(:name) { "bcrypt" }
	let(:info) {
		"    bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project\n    for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling\n    passwords.\n"
	}
	let(:dependencies) {
		{ "development":[
			{"name":"rake-compiler","requirements":"~\u003e 0.9.2"},{"name":"rdoc","requirements":"~\u003e 3.12"},{"name":"rspec","requirements":"\u003e= 3"}
		],
		"runtime":[]
		}
	}
	let(:invalid_name) { "asdff" }

	describe "GET /gems" do
		
		context "when the name matches a Gem" do 
			
			before { get "/gems/#{valid_name}" }

			it "returns only one gem" do 
				debugger
				expect(JSON.parse(response.body).size).to be > 1
			end
			
			it "returns Gem name" do
				expect(JSON.parse(response.body).first["name"]).to match(name)
			end 
			
			it "returns Gem info " do
				expect(JSON.parse(response.body.first["info"])).to match(info)
			end
			
			it "returns Gem dependencies" do
				expect(JSON.parse(response.body.first["info"])).to match(dependencies)
			end

			it "returns status code 200" do
				expect(response).to have_http_status(200)
			end
		end

		context "when the name doesn't match any Gem" do
		
			before { get "/gems/#{invalid_name}" }
			
			it "returns an error" do
				expect(response.body).to match(/Gem not found/)
			end

			it "returns status code 404" do
				expect(response).to have_http_status(404)
			end
		end
	end
end
