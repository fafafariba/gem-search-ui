module GemsHelper

	def exact_name_match?
		@gems.each do |gem|
			if gem["name"] == params[:name]
				return { name: gem["name"], info: gem["info"], dependencies: gem["dependencies"] }
			end
		end
		nil
	end

end
