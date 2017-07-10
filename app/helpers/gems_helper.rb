module GemsHelper

	def exact_name_match?
		@gems.each do |gem|
			if gem["name"] == params[:name]
				return { name: gem["name"], info: gem["info"], dependencies: extract_deps(gem["dependencies"]) }
			end
		end
		nil
	end

	def extract_deps(deps)
		dep_names = []
		deps["development"].each do |dep|
			dep_names << dep["name"]
		end
		deps["runtime"].each do |dep|
			dep_names << dep["name"]
		end
		dep_names
	end
end
