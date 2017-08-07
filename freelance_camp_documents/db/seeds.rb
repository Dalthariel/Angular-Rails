10.times do |d|
	FreelanceDocument.create!(
		title: "Document #{d}",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		file_url: "https://drive.google.com/file/d/0B6ttbFe18fNxelJvcVJxdThlQXc/view?usp=sharing",
		image_url: "https://s-media-cache-ak0.pinimg.com/originals/65/42/71/65427103e47f78c0a7f10de53f4b61fb.jpg",
	)
end

puts "10 documents created"