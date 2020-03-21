const path = require("path");

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStep("step-1")
				.addDescriptionFromMdFile(path.join(__dirname, "step-1/description/README.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-1/code/init-file.hbs", "init-file.txt")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
			.addStep("step-2")
				.addCode("step-2/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/cool")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-3")
				.addCode("step-3/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
					.withPartial("partial_1", "step-3/code/features/cool/CoolFeature_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-3/code/features/cool/CoolFeature_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-3/code/features/cool/CoolFeature_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-3/code/service/ValidationService.hbs", "service/ValidationService.js")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/cool-validation")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-4")
				.addCode("step-4/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
					.withPartial("partial_1", "step-4/code/features/cool/CoolFeature_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/cool")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
	.write(path.join(__dirname, "playbook.json"));