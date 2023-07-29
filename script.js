// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

const getLessonNames = (subjects) => {
    let namesArr = [];
    let lessonNames = '';

    for (let subject in subjects) {
        namesArr.push(subject);
        lessonNames = namesArr.join(', ');
    }

    return lessonNames;
};

console.log(getLessonNames(subjects));


const sumOfPeople = (subjects) => {
    let sum = 0;

    for (let subject of Object.values(subjects)) {
       let studentsTeachers = subject.students + subject.teachers;
       sum += studentsTeachers;
    }

    return sum;
}

console.log(sumOfPeople(subjects));


const studentsAverage = (subjects) => {
    let sum = 0;
    let allLessons = Object.keys(subjects).length

    for (let subject of Object.values(subjects)) {
        let students = subject.students;
        sum += students;
    }

    return sum / allLessons;
}

console.log(studentsAverage(subjects));


const lessonsArr = (subjects) => {
    let lessonsArr = [];
    let lesson = Object.keys(subjects);

    lesson.map(item => {
        let obj = {[item]: subjects[item]};
        lessonsArr.push(obj);
    })

    return lessonsArr
}

console.log(lessonsArr(subjects));


const subjectsArr = (subject) => {
    const subjectsArr = Object.entries(subjects).map(([subjectName, subjectData]) => ({
        subjectName,
        ...subjectData
      }));

      subjectsArr.sort((left, right) => right.teachers - left.teachers);

      const sortedSubjectNames = subjectsArr.map(({subjectName}) => subjectName);

      return sortedSubjectNames;
}

console.log(subjectsArr(subjects));





