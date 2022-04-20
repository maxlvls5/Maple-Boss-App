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


puts 'creating bosses'
Boss.create(name: 'Hard Darknell', image: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807273/darknellATTK_uqccfe.gif", level: 265, hp: "160T", drop: "Arcane equipment (weapon/shoulder), and Commanding Force Earring" )
Boss.create(name: 'Hard Lucid', image: 'https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807317/lucidATTK_npkn6r.gif', level: 230, hp: 'phase 1 - 41T, phase 2 - 41T, phase 3 - 13T', drop: 'Lucidroid, Dreamy Belt, Arcane equipment (glove/shoes/cape/weapon' )
Boss.create(name: 'Black Mage', image: 'https://res.cloudinary.com/dtglqdhwm/image/upload/v1650396243/blackmageGIF_oaod65.gif', level: 265, hp: "phase 1 - 126T, phase 2 - 115.5T, phase 3 - 157.5T, phase 4 - 135T", drop: "Genesis Badge, Arcane equipment (glove/shoes/cape/weapon)")
Boss.create(name: 'Verus Hilla', image: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807533/vhilla_kcrszq.gif", level: 250, hp: "176T", drop: "Source of Suffering, Arcane equipment (glove/shoes/cape/weapon)")
Boss.create(name: 'Chaos Gloom', image: 'https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807673/gloom_bvpdbo.png', level: 255, hp: "114.6T", drop: "Endless Terror, Arcane equipment (weapon/shoulder" )
Boss.create(name: 'Hard Damien', image:'https://res.cloudinary.com/dtglqdhwm/image/upload/v1650394975/damiengif_wzo7pe.gif', level: 210, hp: "phase 1 - 25.2T, phase 2 - 10.8T", drop: "Magic Eyepatch, Ruin Force Sheild, Damienroid, Absolab equipment (shoulder/weapon")
Boss.create(name: 'Hard Lotus', image: 'https://res.cloudinary.com/dtglqdhwm/image/upload/v1650395407/lotus_ezcgzh.png', level: 210, hp: "phase 1 - 1.7T, phase 2 - 7T, phase 3 - 24.5T", drop: "Lotusroid, Berserked, Absolab equipment (glove/cape/shoe/weapon")
Boss.create(name: 'Hard Seren', image:'https://res.cloudinary.com/dtglqdhwm/image/upload/v1650396243/serenGIF_vbdqhs.gif', level: 275, hp: "phase 1 - 126T, phase 2 - 330T", drop: "Mitra's Nodestone, Mitra's Rage(Archer/Pirate/Warrior/Mage/Theif")


puts 'creating guides'
Guide.create(title: "Hard Darknell", details: '850 Arcaness Force/Power (ARC) is needed to deal normal damage during the battle. As such, you deal 10% more damage if your ARC is 935-1104, 30% more damage if your ARC is at 1105-1274, and 50% more damage if your ARC is at 1275 or more (note that ARC is only available in increments of 5). You must be in a party of 1-6 players in order to fight him, and each player will have a Death Count of 5; if all players reach 0, then the battle will end and everyone will be kicked out. The battle has a time limit of 30 minutes.', boss_id: 1, user_id: 1)