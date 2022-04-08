# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'destroying current db'
User.destroy_all
Guide.destroy_all
Boss.destroy_all


puts 'creating users'
User.create(username: 'Shane', password: 'password')

puts 'creating guides'
Guide.create(boss: 'Darknell', guide: '850 Arcane Force/Power (ARC) is needed to deal normal damage during the battle. As such, you deal 10% more damage if your ARC is 935-1104, 30% more damage if your ARC is at 1105-1274, and 50% more damage if your ARC is at 1275 or more (note that ARC is only available in increments of 5). You must be in a party of 1-6 players in order to fight him, and each player will have a Death Count of 5; if all players reach 0, then the battle will end and everyone will be kicked out. The battle has a time limit of 30 minutes.', reward: 'Commanding Force Earring')

puts 'creating bosses'
Boss.create(name: "Hard Darknell", image: "https://static.wikia.nocookie.net/maplestory/images/7/70/Boss_Teleport_-_Darknell.png/revision/latest/scale-to-width-down/250?cb=20190127084230", level: 265, hp: "160T", drop: "Arcane equipment (weapon/shoulder), and Commanding Force Earring" )
Boss.create(name: 'Hard Lucid', image: 'https://nxcache.nexon.net/umbraco/8375/lcpro_fb_1200x630m5n3ess.jpg', level: 230, hp: 'phase 1 - 41T, phase 2 - 41T, phase 3 - 13T', drop: 'Lucidroid, Dreamy Belt, Arcane equipment (glove/shoes/cape/weapon' )
Boss.create(name: 'Black Mage', image: 'http://nxcache.nexon.net/cms/2018/4242/header_banner-03.jpg', level: 265, hp: "phase 1 - 126T, phase 2 - 115.5T, phase 3 - 157.5T, phase 4 - 135T", drop: "Genesis Badge, Arcane equipment (glove/shoes/cape/weapon)")
Boss.create(name: 'Versus Hilla', image: "https://orangemushroom.files.wordpress.com/2018/07/worldselect-1-2-302.gif", level: 250, hp: "176T", drops: "Source of Suffering, Arcane equipment (glove/shoes/cape/weapon)")
Boss.create(name: 'Chaos Gloom', image: 'https://static.wikia.nocookie.net/maplestory/images/a/ac/Boss_Teleport_-_Gloom.png/revision/latest/scale-to-width-down/250?cb=20190127084230', level: 255, hp: "114.6T", drop: "Endless Terror, Arcane equipment (weapon/shoulder" )
