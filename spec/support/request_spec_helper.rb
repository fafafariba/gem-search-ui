module RequestSpecHelper
	 def json_res
    JSON.parse(response.body)
  end
end 