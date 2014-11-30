json.array!(@addresses) do |address|
  json.extract! address, :id, :line1, :city, :pin
  json.url address_url(address, format: :json)
end
