interface CourseGoal {
	title: string;
	description: string;
}

function createCourse(title: string, desc: string): CourseGoal {
	const course: Partial<CourseGoal> = {};

	course.description = desc;
	course.title = title;

	return course as CourseGoal;
}


const names: Readonly<string[]> = ["anas", "jaidi"]

// names.push("anasss") // ERROR !!!!
// names.pop() // ERROR !!!!