
class GemsController < ApplicationController

	def show
		@gem = Gems.search(params[:name]).first
		if @gem
			render json: { name: @gem["name"], info: @gem["info"], dependencies: @gem["dependencies"] }, status: :ok
		else
			render json: { errors: ["Gem not found"] }, status: :not_found
		end
	end
end
