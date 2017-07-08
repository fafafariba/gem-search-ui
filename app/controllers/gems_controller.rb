
class GemsController < ApplicationController
	include GemsHelper
	
	def show
		@gems = Gems.search(params[:name])
		gem = exact_name_match?
		if gem
			render json: gem, status: :ok
		else
			render json: { errors: ["Gem not found"] }, status: :not_found
		end
	end
end
