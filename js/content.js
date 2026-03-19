const content_tags = Object.freeze({
	PRESENTABLE: "Presentable",
	ALL: "All",
	TECHNICAL: "Highly Technical",
	EXPERIMENT: "Experiments",
	STEAM: "On Steam!",

	GAME_JAM: "Game Jams",
	MISC_GAME: "Misc Games",
	ELECTRONICS: "Electronics",
	AUDIO: "Audio",
	TOOL: "Tools",
	NETWORKING: "Networking",

	CUSTOM_ENGINE: "Custom Engines",
	GODOT: "Godot",
	UNITY: "Unity",
	GAMEMAKER: "GameMaker",
	P5JS: "p5.js",
});

const tag_groups = [
	[
		content_tags.PRESENTABLE,
		content_tags.ALL,
		content_tags.STEAM,
	],
	[
		content_tags.GAME_JAM,
		content_tags.TECHNICAL,
		content_tags.EXPERIMENT,
		content_tags.ELECTRONICS,
		content_tags.AUDIO,
		content_tags.TOOL,
		content_tags.NETWORKING,
		content_tags.MISC_GAME,
	],
	[
		content_tags.CUSTOM_ENGINE,
		content_tags.GODOT,
		content_tags.UNITY,
		content_tags.GAMEMAKER,
		content_tags.P5JS,
	]
];

const content = {
	projects: [
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//#region Jams!
		{
			name: 'Nonogueram',
			description:
				'<p>Nonogram Roguelike!</p>\
				<ul>\
					<li>Ongoing project</li>\
					<li>Reached the front page of itch.io!</li>\
					<li>Planned Steam release!!</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/nonogueram.gif',
			// major: true,
			for: "7DRL Challenge 2026",
			start_date: Date.UTC(2026, 2, 1),
			links: {
				"Steam": "https://store.steampowered.com/app/4537770",
				"itch.io": "https://jawdandev.itch.io/nonogueram",
			},
			tags: [content_tags.PRESENTABLE, content_tags.STEAM, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Spectrum Shift',
			description: 'Sonic inspired 2D platformer game!',
			thumbnail: '/media/thumbnails/jams/spectrum-shift.gif',
			pixelated: false,
			for: "Global Game Jam 2026",
			people: 2,
			start_date: Date.UTC(2026, 0, 26),
			end_date: Date.UTC(2026, 0, 30),
			links: {
				"itch.io": "https://jawdandev.itch.io/spectrum-shift",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Hot Honey Loop Lang',
			description: '<p>Game made in a custom language!</p>\
				<ul>\
					<li>The code of the game is shown in the background</li>\
					<li>The "hot path" of the code is presented visually!</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/hot-honey-loop-lang.gif',
			pixelated: false,
			for: "Langjam Gamejam 2025",
			start_date: Date.UTC(2025, 11, 14),
			end_date: Date.UTC(2025, 11, 21),
			links: {
				"itch.io": "https://jawdandev.itch.io/hot-honey-loop",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GAMEMAKER],
		},
		{
			name: 'DEADWEIGHT',
			description: 'Grappleathon Thief-Em-Up',
			thumbnail: '/media/thumbnails/jams/deadweight.gif',
			for: "Jingle Game Jam 2025",
			people: 4,
			start_date: Date.UTC(2025, 11, 2),
			end_date: Date.UTC(2025, 11, 9),
			links: {
				'itch.io': 'https://jawdandev.itch.io/deadweight',
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Forgotten Flora',
			description: 'Cosy farming semi-colony-sim',
			thumbnail: '/media/thumbnails/jams/forgotten-flora.gif',
			pixelated: false,
			for: "Comfy Jam: Autumn",
			people: 2,
			start_date: Date.UTC(2025, 9, 27),
			end_date: Date.UTC(2025, 10, 17),
			links: {
				'itch.io': 'https://jawdandev.itch.io/forgotten-flora',
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.UNITY],
		},
		{
			name: "Cluster Claw",
			description: '<p>Find parts and scrap together your ship!</p>\
				<ul>\
					<li>You can only die when all of your parts have been lost</li>\
					<li>Fun to collected piece broken off of you mid-combat</li>\
					<li>Won <strong>55th in Innovation</strong> out of 1391</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/cluster-claw.gif',
			for: "Ludum Dare 58",
			people: 3,
			start_date: Date.UTC(2025, 9, 3),
			end_date: Date.UTC(2025, 9, 6),
			links: {
				"itch.io": "https://jawdandev.itch.io/cluster-claw",
				"Ludum Dare 58": "https://ldjam.com/events/ludum-dare/58/cluster-claw",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: "Nib Nub Pillar",
			description: "Puzzle jigsaw incremental game",
			thumbnail: '/media/thumbnails/jams/nib-nub-pillar.png',
			for: "GMTK Game Jam 2025",
			people: 2,
			start_date: Date.UTC(2025, 6, 30),
			end_date: Date.UTC(2025, 7, 3),
			links: {
				'itch.io': 'https://hjmw.itch.io/the-nib-nub-pillar',
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: "Chicken RoII",
			description: '<p>3D platformer collectathon with weighty controls!</p>\
				<ul>\
					<li>Won the <strong>Best Use of Technology</strong> award</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/chicken-roii.gif',
			for: "UoP Jam 2025",
			people: 5,
			start_date: Date.UTC(2025, 5, 16),
			end_date: Date.UTC(2025, 5, 20),
			links: {
				'itch.io': 'https://jawdandev.itch.io/chicken-roii',
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: "S.S. Relationship",
			thumbnail: '/media/thumbnails/jams/ss-relationship.gif',
			for: "Dungeon Crawler Jam 2025",
			people: 3,
			start_date: Date.UTC(2025, 3, 14),
			end_date: Date.UTC(2025, 3, 20),
			links: {
				"itch.io": "https://jawdandev.itch.io/ss-relationship",
			},
			tags: [content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Goblin Hero',
			description: '<p>NDS autobattler roguelike!</p>\
				<ul>\
					<li>Made in a custom engine the NDS!</li>\
					<li>Runs both on emulators and native hardware!!</li>\
					<li>Required a lot of perfomance considerations</li>\
					<li>Won the <strong>Best Use of Modifier</strong> award</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/goblin-hero.gif',
			for: "MMU - Game a Week 6",
			start_date: Date.UTC(2025, 3, 7),
			end_date: Date.UTC(2025, 3, 14),
			links: {
				"itch.io": "https://jawdandev.itch.io/goblin-hero",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.TECHNICAL, content_tags.CUSTOM_ENGINE],
		},
		{
			name: 'Terrain Blotters',
			thumbnail: '/media/thumbnails/jams/terrain-blotters.gif',
			description: 'Terriain splatting and digging PvP game\
				<ul>\
					<li>Terrain is split into chunks</li>\
					<li>Terrain is built using marching cubes!</li>\
					<li>Flexible destruction / building system</li>\
					<li>Won the <strong>Technical Achievement</strong> award</li>\
				</ul>',
			for: "MMU - Game a Week 5",
			start_date: Date.UTC(2025, 2, 27),
			end_date: Date.UTC(2025, 2, 31),
			links: {
				"itch.io": "https://jawdandev.itch.io/terrain-blotters",
				"Marching Cubes Writeup": "https://github.com/jawdan-dev/Marching-Cubes-Table",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.TECHNICAL, content_tags.GODOT],
		},
		{
			name: 'Rosetta Puzzle',
			description: '<p>MMO Rosetta Stone solving game-prototype!</p>\
				<ul>\
					<li>Non-suitable for long term support but perfect for a quick prototype!</li>\
					<li>Won the <strong>Best Use of Modifier</strong> award</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/rosetta-puzzle.gif',
			for: "MMU - Game a Week 4",
			start_date: Date.UTC(2025, 2, 14),
			end_date: Date.UTC(2025, 2, 17),
			links: {
				'itch.io': 'https://jawdandev.itch.io/rosetta-puzzle',
			},
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL, content_tags.GAME_JAM, content_tags.NETWORKING, content_tags.GAMEMAKER],
		},
		{
			name: 'Boidover',
			thumbnail: '/media/thumbnails/jams/boidover.gif',
			for: "MMU - Game a Week 3",
			start_date: Date.UTC(2025, 2, 1),
			end_date: Date.UTC(2025, 2, 3),
			links: {
				'itch.io': 'https://jawdandev.itch.io/boidover',
			},
			tags: [content_tags.GAME_JAM, content_tags.P5JS],
		},
		{
			name: 'System: WR3CK',
			description: '<p>Relationship-driven narrative game</p>\
				<ul>\
					<li>Made in a custom engine (Now known as "WR3CK Engine")</li>\
					<li>Immediate-mode everything + instanced-based rendering</li>\
					<li>Won the <strong>Technical Achievement</strong> award</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/system-wr3ck.png',
			for: "MMU - Game a Week 2",
			people: 2,
			start_date: Date.UTC(2025, 1, 10),
			end_date: Date.UTC(2025, 1, 17),
			links: {
				'itch.io': 'https://jawdandev.itch.io/system-wr3ck',
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.CUSTOM_ENGINE],
		},
		{
			name: 'Rollem',
			description: '<p>Hackathon entry</p>\
				<ul>\
					<li>Won the <strong>Community Voted</strong> award</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/rollem.png',
			for: "MMU - Innovation Jam 2025",
			people: 5,
			start_date: Date.UTC(2025, 0, 23),
			end_date: Date.UTC(2025, 0, 24),
			links: {
				"itch.io": "https://d-crossy.itch.io/rollem",
			},
			tags: [content_tags.GAME_JAM, content_tags.UNITY],
		},
		{
			name: 'Killing Time',
			description: 'Turn-based roguelike where everything costs time',
			thumbnail: '/media/thumbnails/jams/killing-time.png',
			for: "Jingle Game Jam 2024",
			people: 3,
			start_date: Date.UTC(2024, 11, 1),
			end_date: Date.UTC(2024, 11, 8),
			links: {
				"itch.io": "https://jawdandev.itch.io/killing-time",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GAMEMAKER],
		},
		{
			name: 'Motomon',
			thumbnail: '/media/thumbnails/jams/motomon.gif',
			for: "Ludum Dare 56",
			people: 3,
			start_date: Date.UTC(2024, 9, 4),
			end_date: Date.UTC(2024, 9, 7),
			links: {
				"itch.io": "https://jawdandev.itch.io/motomon",
				"Ludum Dare 56": "https://ldjam.com/events/ludum-dare/56/motomon",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Shader Laser House Invader',
			description: "Sokoban puzzle game where the boxes emit lasers and cast shadows",
			thumbnail: '/media/thumbnails/jams/shader-laser-house-invader.png',
			for: "Pirate Jam 15",
			people: 3,
			start_date: Date.UTC(2024, 6, 17),
			end_date: Date.UTC(2024, 6, 31),
			links: {
				"itch.io": "https://hjmw.itch.io/shader-laser-house-invader",
				"GitHub": "https://github.com/Cucumber-Maki/PirateJam15",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.NETWORKING, content_tags.GODOT],
		},
		{
			name: 'Dragon RoII',
			description: "Simple 3D platformer",
			thumbnail: '/media/thumbnails/jams/dragon-roii.gif',
			for: "UoP Jam 2024",
			people: 2,
			start_date: Date.UTC(2024, 5, 17),
			end_date: Date.UTC(2024, 5, 21),
			links: {
				"itch.io": "https://jawdandev.itch.io/dragon-roii",
				"GitHub": "https://github.com/Cucumber-Maki/UoP-2024",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Unpetrify',
			thumbnail: '/media/thumbnails/jams/unpetrify.png',
			for: "Ludum Dare 55",
			people: 2,
			start_date: Date.UTC(2024, 3, 13),
			end_date: Date.UTC(2024, 3, 16),
			links: {
				"itch.io": "https://jawdandev.itch.io/unpetrify",
				"Ludum Dare 55": "https://ldjam.com/events/ludum-dare/55/unpetrify",
			},
			tags: [content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Fsh',
			description: "Game where you're a no eye-d fish",
			thumbnail: '/media/thumbnails/jams/fsh.png',
			for: "FishFest",
			people: 3,
			start_date: Date.UTC(2024, 3, 2),
			end_date: Date.UTC(2024, 3, 9),
			links: {
				"itch.io": "https://jawdandev.itch.io/fsh",
			},
			tags: [content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: "Jester's Wing",
			thumbnail: '/media/thumbnails/jams/jesters-wing.png',
			for: "Global Game Jam 2024",
			people: 2,
			start_date: Date.UTC(2024, 0, 22),
			end_date: Date.UTC(2024, 0, 26),
			links: {
				"itch.io": "https://jawdandev.itch.io/jesters-wing",
			},
			tags: [content_tags.GAME_JAM, content_tags.GODOT],
		},
		{
			name: 'Sushi RoII',
			description: '<p>My first game jam!</p>\
				<ul>\
					<li>Collection of mini-games</li>\
					<li>Narrative-based</li>\
					<li>Won <strong>Best Art</strong> Award</li>\
				</ul>',
			thumbnail: '/media/thumbnails/jams/sushi-roii.gif',
			for: "UoP Jam 2023",
			start_date: Date.UTC(2023, 5, 19),
			end_date: Date.UTC(2023, 5, 24),
			links: {
				"itch.io": "https://jawdandev.itch.io/sushi-roii",
			},
			tags: [content_tags.PRESENTABLE, content_tags.GAME_JAM, content_tags.GAMEMAKER],
		},
		//#endregion

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//#region Misc Games
		{
			name: 'GravRiders',
			description: '<p>Fast-paced time-trialed 3D platformer where you can ride up any surface!</p>\
				<ul>\
					<li>Made during Tranzfuser 2025</li>\
					<li>Presented at Protoplay 2025 in Dundee!</li>\
					<li>Was responsible for the highly mathematical player controller!</li>\
				</ul>',
			thumbnail: '/media/thumbnails/misc-games/grav-riders.gif',
			pixelated: false,
			for: "Tranzfuser 2025",
			people: 3,
			start_date: Date.UTC(2025, 2, 16),
			end_date: Date.UTC(2025, 8, 22),
			links: {
				"Website": "https://gravriders.com",
				"Trazfuser Page": "https://tranzfuser.com/tranzfuser-teams/peachbread/",
			},
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.TECHNICAL, content_tags.UNITY]
		},
		{
			name: 'Unnamed Voxel Engine',
			description: '<p>C++ Voxel Terrain Generator & Renderer</p>\
				<ul>\
					<li>Multithreaded (with mutexes) chunk generation</li>\
					<li>Vertex-based ambient occulusion</li>\
				</ul>',
			thumbnail: '/media/thumbnails/misc-games/unnamedvoxelengine.png',
			start_date: Date.UTC(2024, 1, 10),
			end_date: Date.UTC(2024, 2, 8),
			links: {
				"itch.io": "https://jawdandev.itch.io/unnamedvoxelengine",
				"GithHub": "https://github.com/jawdan-dev/NoisyTerrainEngine"
			},
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.EXPERIMENT, content_tags.CUSTOM_ENGINE, content_tags.TECHNICAL]
		},
		{
			name: 'Godot Voxel Engine Prototype',
			description: 'Prototype biome-based voxel terrain generation for the <strong>Unnamed Voxel Engine</strong>',
			thumbnail: '/media/thumbnails/2020-2025/noisy-terrain.png',
			end_date: Date.UTC(2024, 1, 7),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL, content_tags.GODOT]
		},
		{
			name: 'Misc Vampire Game',
			description: "Failed prototype for GMTK 2022",
			thumbnail: '/media/thumbnails/misc-games/gmtk2022.gif',
			end_date: Date.UTC(2022, 6),
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.GAMEMAKER],
		},
		{
			name: 'Factory Game',
			description: "Small factory game inspired by Factorio and Mindustry",
			thumbnail: '/media/thumbnails/misc-games/factory.gif',
			end_date: Date.UTC(2020, 4, 9),
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.GAMEMAKER],
		},
		{
			name: 'Portal-Inspired Puzzle Game',
			thumbnail: '/media/thumbnails/misc-games/portal.gif',
			pixelated: false,
			end_date: Date.UTC(2019, 1, 6),
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.UNITY],
		},
		{
			name: 'Clusterfxck Chess',
			description: 'Chess with insane rules, such as breaking tiles and missiles',
			thumbnail: '/media/thumbnails/misc-games/clusterfxck-chess.gif',
			end_date: Date.UTC(2018, 9, 11),
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.GAMEMAKER],
		},
		{
			name: 'Isometric RPG',
			thumbnail: '/media/thumbnails/misc-games/iso-rpg.png',
			end_date: Date.UTC(2018, 7, 15),
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.GAMEMAKER],
		},
		{
			name: 'Ardure',
			description: '<p>My first GameMaker project!</p>\
				<ul>\
					<li>Made in the trial version of GameMaker: Studio 2</li>\
					<li>Weirdly optimised assets due the asset limitations</li>\
				</ul>',
			thumbnail: '/media/thumbnails/misc-games/ardure.gif',
			end_date: Date.UTC(2017, 11, 13),
			tags: [content_tags.PRESENTABLE, content_tags.MISC_GAME, content_tags.GAMEMAKER],
		},
		//#endregion

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//#region 2026
		{
			name: 'WR3CK Engine',
			description: '<p>Rapid-prototyping-friendly custom game engine</p>\
				<ul>\
					<li>Handles for memory-safe handling of dynamic assets</li>\
					<li>Immediate-mode renderering</li>\
					<li>Designed towards allowing things to just "work"!</li>\
					<li>Supports being made multi-threaded</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2026/wr3ck-engine.png',
			pixelated: false,
			// major: true,
			start_date: Date.UTC(2026, 0, 1),
			links: {
				'GitHub': 'https://github.com/jawdan-dev/WR3CK-Engine',
				'System: WR3CK (itch.io)': 'https://jawdandev.itch.io/system-wr3ck',
			},
			tags: [content_tags.PRESENTABLE, content_tags.TECHNICAL, content_tags.CUSTOM_ENGINE],
		},
		{
			name: 'Godot Depth Shader',
			description: '<p>Playing with a fake-depth shader in Godot</p>\
				<ul>\
					<li>Aligns perspective based on the camera</li>\
					<li>Uses 3D noise to determine inner shape!</li>\
					<li>Also, it looks good!!!!</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2026/depth-shader.gif',
			pixelated: false,
			end_date: Date.UTC(2026, 1, 6),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL, content_tags.GODOT],
		},
		{
			name: 'Immediate Gizmos',
			description: '<p>Godot 4 addon for drawing gizmos</p>\
				<ul>\
					<li>Grants immediate-mode rendering of primitive shapes and text!</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2026/immediate-gizmos.gif',
			pixelated: false,
			start_date: Date.UTC(2026, 0, 25),
			end_date: Date.UTC(2026, 1, 15),
			links: {
				"Godot Asset Library": "https://godotengine.org/asset-library/asset/4735",
				'GitHub': 'https://github.com/jawdan-dev/Immediate-Gizmos',
			},
			tags: [content_tags.PRESENTABLE, content_tags.TECHNICAL, content_tags.TOOL, content_tags.GODOT],
		},
		{
			name: 'Playing Music On Desmos',
			description: 'Silly quick music player for Desmos, built on <strong>WAV Generator</strong>',
			thumbnail: '/media/thumbnails/2026/desmos-music.png',
			end_date: Date.UTC(2026, 1, 1),
			links: {
				"Megolavania": "https://www.desmos.com/calculator/j0voimxbep",
				"Lag Train": "https://www.desmos.com/calculator/fdziaommsk",
			},
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.AUDIO, content_tags.TOOL],
		},
		//#endregion

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//#region 2020 - 2025
		{
			name: 'Game Development MSc Thesis',
			description: 'A Topology-less Neural Network\
				<ul>\
					<li>Custom neural network type</li>\
					<li>Trains on the GPU (via compute shaders)</li>\
					<li>Was used to train on player data to "mimic" a player</li>\
					<li>Not enough time / computation power for training within the time frame given</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2020-2025/msc_fyp.gif',
			start_date: Date.UTC(2025, 4, 15),
			end_date: Date.UTC(2025, 8, 22),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL, content_tags.TOOL, content_tags.GAMEMAKER],
		},
		{
			name: 'Computer Science BSc Dissertation',
			description: '"Typology-less" Neural Network prototype',
			thumbnail: '/media/thumbnails/2020-2025/bsc_fyp.jpg',
			start_date: Date.UTC(2022, 9, 19),
			end_date: Date.UTC(2023, 4, 5),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL],
		},
		{
			name: 'Advent of Code',
			description: 'Annual coding challenges for the first<br>12/24 days of December\
				<ul>\
					<li>2025: No Global Rankings :)</li>\
					<li>2024: Global Rank Average of 3,351 / 280k+</li>\
					<li>2023 Global Rank Average of 4,430 / 340k+</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2020-2025/aoc.gif',
			pixelated: false,
			start_date: Date.UTC(2025, 11, 1),
			end_date: Date.UTC(2025, 11, 12),
			tags: [content_tags.PRESENTABLE, content_tags.TECHNICAL],
		},
		{
			name: 'Pictopix (Puzzle Game) Solver',
			description: 'Annual coding challenges for the first<br>12/24 days of December\
				<ul>\
					<li>Read the screen for the grid and used a "similarity filter" to determine numbers</li>\
					<li>Solved nonograms via n-base counter to test every possible overlap</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2020-2025/pictopix-solver.gif',
			end_date: Date.UTC(2022, 4, 7),
			tags: [content_tags.PRESENTABLE],
		},
		{
			name: 'Instanced Renderer',
			description: "Benchmarked upto 10 million triangles with a single draw call",
			thumbnail: '/media/thumbnails/2020-2025/instanced-engine.png',
			end_date: Date.UTC(2023, 4, 7),
			tags: [content_tags.PRESENTABLE],
		},
		{
			name: 'Fourier WAV Analyser',
			description: 'Prototype fourier analyser made on a train',
			start_date: Date.UTC(2025, 8, 22),
			end_date: Date.UTC(2025, 8, 23),
			tags: [content_tags.EXPERIMENT, content_tags.AUDIO],
		},
		{
			name: 'Playing Music On Motors',
			thumbnail: '/media/thumbnails/2020-2025/motor-music.png',
			end_date: Date.UTC(2022, 9, 24),
			links: {
				"Megolavania": "/media/videos/motor_megolavania.mp4",
				"Lag Train": "/media/videos/motor_lag_train.mp4",
			},
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.ELECTRONICS, content_tags.AUDIO],
		},
		{
			name: 'WAV Generator',
			description: 'Generates .WAV files in C++',
			end_date: Date.UTC(2023, 2, 3),
			links: {
				"Megolavania": "/media/audio/wav_megolavania.wav",
				"Lag Train": "/media/audio/wav_lag_train.wav",
			},
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.AUDIO]
		},
		{
			name: 'Bounding Volume Hierarchy',
			description: 'Generates a BVH for 100,000 objects in 5ms',
			thumbnail: '/media/thumbnails/2020-2025/bvh.gif',
			pixelated: false,
			end_date: Date.UTC(2023, 9, 6),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL],
		},
		{
			name: 'JAStudio',
			description: 'Simple live-audio application using OpenAL',
			thumbnail: '/media/thumbnails/2020-2025/jas.gif',
			start_date: Date.UTC(2023, 11, 11),
			end_date: Date.UTC(2024, 0, 31),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.AUDIO, content_tags.CUSTOM_ENGINE],
		},
		{
			name: 'MenuSync',
			description: 'C sockets test with imgui for the frontend',
			thumbnail: '/media/thumbnails/2020-2025/menusync.gif',
			end_date: Date.UTC(2024, 9, 29),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.NETWORKING, content_tags.CUSTOM_ENGINE],
		},
		{
			name: '3D Printer Image Plotter',
			description: 'Converted images to GCode instructions for a 3D printer and drawn using a Sharpie with a custom head attachment',
			thumbnail: '/media/thumbnails/2020-2025/plotter.gif',
			pixelated: false,
			end_date: Date.UTC(2022, 2, 9),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.ELECTRONICS]
		},
		{
			name: 'DIY Synth',
			description:
				'<p>A DIY synthesizer made from two Teensy microcontrollers</p>\
				<ul>\
					<li>Digital-To-Analogue converter for audio output</li>\
					<li>Seperated microcontrollers for audio output and display</li>\
					<li>Mutliplexed rotary encoders for input</li>\
				</ul>',
			thumbnail: '/media/thumbnails/2020-2025/synth.png',
			pixelated: false,
			end_date: Date.UTC(2021, 7),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.ELECTRONICS, content_tags.AUDIO]
		},
		{
			name: 'RetroPie Handheld',
			description: 'Custom 3D-printed handheld RetroPie emulation console',
			thumbnail: '/media/thumbnails/2020-2025/retropie.png',
			pixelated: false,
			start_date: Date.UTC(2022, 2, 29),
			end_date: Date.UTC(2022, 4, 13),
			tags: [content_tags.PRESENTABLE, content_tags.ELECTRONICS]
		},
		{
			name: 'Custom Astrophotography Mount',
			description: 'Custom-made 3D-printed camera mount for astrophotography',
			thumbnail: '/media/thumbnails/2020-2025/astrophotography.jpg',
			pixelated: false,
			start_date: Date.UTC(2022, 5),
			end_date: Date.UTC(2023, 1, 9),
			tags: [content_tags.PRESENTABLE, content_tags.ELECTRONICS, content_tags.NETWORKING]
		},
		{
			name: 'Custom Keyboard',
			description: 'Designed my own keyboard PCB and ordered it to solder and put together myself!',
			thumbnail: '/media/thumbnails/2020-2025/keyboard.jpg',
			pixelated: false,
			end_date: Date.UTC(2024, 5, 6),
			tags: [content_tags.PRESENTABLE, content_tags.ELECTRONICS]
		},
		{
			name: 'Marching Squares',
			description: 'Intended for animations for showing the marching squares algorithm',
			thumbnail: '/media/thumbnails/2020-2025/marching-squares.png',
			pixelated: false,
			end_date: Date.UTC(2024, 0, 18),
			tags: [content_tags.P5JS]
		},
		{
			name: 'Flappy Bird Neural Network',
			description: 'Intended for animations for showing the marching squares algorithm',
			thumbnail: '/media/thumbnails/2020-2025/nn3-relu.gif',
			pixelated: false,
			end_date: Date.UTC(2020, 5, 15),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.P5JS]
		},
		//#endregion

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//#region Pre-2020
		{
			name: 'Marching Cubes in Unity',
			description: 'My first implementation of marching cubes after solving the algorithm',
			thumbnail: '/media/thumbnails/0-2020/unity-marching-cubes.gif',
			pixelated: false,
			end_date: Date.UTC(2019, 1, 25),
			links: {
				"Marching Cubes Writeup": "https://github.com/jawdan-dev/Marching-Cubes-Table",
			},
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TECHNICAL]
		},
		{
			name: 'C++ Software Renderer',
			description: 'cow',
			thumbnail: '/media/thumbnails/0-2020/cpp-software-renderer.gif',
			end_date: Date.UTC(2019, 1, 6),
			tags: [content_tags.PRESENTABLE, content_tags.CUSTOM_ENGINE]
		},
		{
			name: 'Computer Science A-Level NEA',
			thumbnail: '/media/thumbnails/0-2020/nea.gif',
			start_date: Date.UTC(2018, 8, 6),
			end_date: Date.UTC(2019, 5, 19),
			tags: [content_tags.PRESENTABLE, content_tags.CUSTOM_ENGINE]
		},
		{
			name: 'Procedural Physics-based Terrain Generator',
			description: 'Generates map objects based on how they interact physically',
			thumbnail: '/media/thumbnails/0-2020/trees.gif',
			end_date: Date.UTC(2019, 1, 24),
			tags: [content_tags.PRESENTABLE, content_tags.EXPERIMENT, content_tags.TOOL]
		},
		//#endregion

		////////////////////////////////////////////////////////////////////////////////////////////////////////////
	]
};

content.projects.sort((a, b) => {
	// Invalid date? To the top with ya!
	if (!a.start_date && !a.end_date) return -1;
	if (!b.start_date && !b.end_date) return 1;

	// Ongoing.
	if (!a.end_date && !b.end_date) return b.start_date - a.start_date;
	if (!a.end_date) return -1;
	if (!b.end_date) return 1;

	// Project is finished...Compare end dates!
	if (b.end_date != a.end_date)
		return b.end_date - a.end_date;

	// Same end date... Compare start dates!
	const a_date = a.start_date ? a.start_date : a.end_date;
	const b_date = b.start_date ? b.start_date : b.end_date;
	return b_date - a_date;
});