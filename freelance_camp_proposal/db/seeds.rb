10.times do |proposal|
	Proposal.create!(
		customer: "Customer #{proposal}",
		portfolio_url: "http://davidhamaker.com",
		tools: "Ruby on Rails, Angular2, and PostGreSQL",
		estimated_hours: (70 + proposal),
		hourly_rate: 50,
		weeks_to_complete: 5,
		client_email: "david.hamaker@gmail.com",
	)
end

puts "10 proposals created"