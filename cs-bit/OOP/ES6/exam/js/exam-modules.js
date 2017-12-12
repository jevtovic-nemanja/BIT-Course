const uiController = (() => {

    const DOMStrings = Object.freeze({
        spanMonth: ".exam-title-month",
        divTotalStudents: ".exam-total",
        divPassedCount: ".exam-passed-count",
        divPassedPercentage: ".exam-passed-percentage",
        divFailedCount: ".exam-failed-count",
        divFailedPercentage: ".exam-failed-percentage",
        selectSubject: ".add-subject",
        inputStudent: ".add-student-name",
        inputGrade: ".add-grade",
        buttonAdd: ".add-btn",
        divError: ".error",
        divPassedList: ".passed-list",
        divFailedList: ".failed-list",
        buttonDeleteFailed: ".failed-item-delete-btn",
        buttonDeletePassed: ".passed-item-delete-btn"
    });

    return {

        getDOMStrings() {
            return DOMStrings;
        },

        getInput() {
            const subjectElement = document.querySelector(DOMStrings.selectSubject);
            const selectedSubject = subjectElement[subjectElement.selectedIndex];
            const studentElement = document.querySelector(DOMStrings.inputStudent);
            const gradeElement = document.querySelector(DOMStrings.inputGrade);
            return {
                subject: selectedSubject.value,
                student: studentElement.value,
                grade: gradeElement.value
            }
        },

        showError({ student, grade }) {
            let errorMessage = "Unknown error!";
            if (!student) {
                errorMessage = "Please enter student name.";
            } else if (!grade) {
                errorMessage = "Please enter a grade";
            }
            document.querySelector(DOMStrings.divError).innerHTML = `<p>${errorMessage}</p>`;
        },

        clearFormData() {
            document.querySelector(DOMStrings.inputStudent).value = "";
            document.querySelector(DOMStrings.inputStudent).focus();
            document.querySelector(DOMStrings.inputGrade).value = "";
            document.querySelector(DOMStrings.divError).innerHTML = "";
        },

        displayMonth() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const monthIndex = new Date().getMonth();
            const month = monthNames[monthIndex];
            document.querySelector(DOMStrings.spanMonth).textContent = month;
        },

        displayList(exam) {
            const passedList = document.querySelector(DOMStrings.divPassedList);
            const failedList = document.querySelector(DOMStrings.divFailedList);

            let contentP = "";
            for (let i = 0; i < exam.listPassedStudents.length; i++) {
                contentP += `<div><div class="passed-item-description">${exam.listPassedStudents[i].name}</div>
                <div class="right clearfix">
                    <div class="passed-item-value">${exam.listPassedStudents[i].grade}</div>
                    <div class="item-delete">
                        <button class="passed-item-delete-btn">x</i>
                        </button>
                    </div>
                </div></div>`;
            }
            passedList.innerHTML = contentP;

            let contentF = "";
            for (let j = 0; j < exam.listFailedStudents.length; j++) {
                contentF += `<div class="failed-item-description">${exam.listFailedStudents[j].name}</div>
                <div class="right clearfix">
                    <div class="failed-item-value">${exam.listFailedStudents[j].grade}</div>
                    <div class="item-delete">
                        <button class="failed-item-delete-btn">x</i>
                        </button>
                    </div>
                </div>`;
            }
            failedList.innerHTML = contentF;
        },

        showStatistic({ totalNumberOfStudents, passedStudents, failedStudents, passedPercentage, failedPercentage }) {
            document.querySelector(DOMStrings.divTotalStudents).textContent = `Total students: ${totalNumberOfStudents}`
            document.querySelector(DOMStrings.divPassedCount).textContent = passedStudents;
            document.querySelector(DOMStrings.divFailedCount).textContent = failedStudents;
            document.querySelector(DOMStrings.divPassedPercentage).textContent = passedPercentage + "%";
            document.querySelector(DOMStrings.divFailedPercentage).textContent = failedPercentage + "%";
        }
    }
})();


const dataController = (() => {
    const data = {
        subjects: [],
    };

    class Exam {
        constructor(name) {
            this.name = name;
            this.listPassedStudents = [];
            this.listFailedStudents = [];
        }

        addStudentToExam(student) {
            if (student.grade > 5) {
                this.listPassedStudents.push(student);
            } else {
                this.listFailedStudents.push(student);
            }
        }

        getData() {
            const totalNumberOfStudents = this.listFailedStudents.length + this.listPassedStudents.length;
            const passedStudents = this.listPassedStudents.length;
            const failedStudents = this.listFailedStudents.length;
            let passedPercentage;
            let failedPercentage;
            if (passedStudents) {
                passedPercentage = Math.round(passedStudents / totalNumberOfStudents * 100);
            } else {
                passedPercentage = "";
            }
            if (failedStudents) {
                failedPercentage = Math.round(failedStudents / totalNumberOfStudents * 100);
            } else {
                failedPercentage = "";
            }
            return {
                totalNumberOfStudents,
                passedStudents,
                failedStudents,
                passedPercentage,
                failedPercentage
            }
        }
    };

    class Student {
        constructor(name, grade) {
            this.name = name;
            this.grade = grade;
        }
        getData() {
            return {
                name: this.name,
                grade: this.grade
            };
        }
    };

    return {
        addExam(name) {
            let counter = 0;
            let index = -1;
            for (let i = 0; i < data.subjects.length; i++) {
                if (name === data.subjects[i].name) {
                    counter++;
                    index = i
                }
            }
            if (counter === 0) {
                const exam = new Exam(name);
                data.subjects.push(exam);
                return exam;
            } else {
                const exam = data.subjects[index];
                return exam;
            }
        },

        addStudent(name, grade) {
            const student = new Student(name, grade);
            return student;
        },

        getStatistic(exam) {
            return exam.getData();
        },

        deleteStudentFromExam(examName, studentName) {
            for (let k = 0; k < data.subjects.length; k++) {
                let subject = data.subjects[k];
                if (examName === subject.name) {
                    const exam = subject;
                    for (let i = 0; i < exam.listPassedStudents.length; i++) {
                        if (studentName === exam.listPassedStudents[i].name) {
                            delete exam.listPassedStudents[i];
                            exam.listPassedStudents.length--;
                        }
                    }
                    for (let j = 0; j < exam.listFailedStudents.length; j++) {
                        if (studentName === exam.listFailedStudents[j].name) {
                            delete exam.listFailedStudents[j];
                            exam.listFailedStudents.length--;
                        }
                    }
                    return exam;
                }
            }
        }
    }
})();


const mainController = ((uiCtrl, dataCtrl) => {

    function month() {
        return uiCtrl.displayMonth();
    };

    function setUpEventListeners() {
        const DOM = uiCtrl.getDOMStrings();

        document.querySelector(DOM.buttonAdd).addEventListener("click", addExam);
        document.addEventListener("keydown", event => {
            if (event.keyCode === 13) {
                addExam();
            }
        });
    };

    function addExam() {
        const DOM = uiCtrl.getDOMStrings();

        const { subject, student, grade } = uiCtrl.getInput();

        if (!student || !grade) {
            uiCtrl.showError({ student, grade });
            return;
        }

        const exam = dataCtrl.addExam(subject);
        const newStudent = dataCtrl.addStudent(student, grade);
        exam.addStudentToExam(newStudent);

        uiCtrl.clearFormData();

        uiCtrl.displayList(exam);

        const statistic = dataCtrl.getStatistic(exam);
        uiCtrl.showStatistic(statistic);

        setUpEventListenersDelete();
    };

    function setUpEventListenersDelete() {
        const DOM = uiCtrl.getDOMStrings();

        const passed = document.querySelectorAll(DOM.buttonDeletePassed);
        const failed = document.querySelectorAll(DOM.buttonDeleteFailed);

        if (passed) {
            for (let i = 0; i < passed.length; i++) {
                passed[i].addEventListener("click", deleteExam);
            }
        }
        if (failed) {
            for (let j = 0; j < failed.length; j++) {
                failed[j].addEventListener("click", deleteExam);
            }
        }
    };

    function deleteExam(event) {
        const DOM = uiCtrl.getDOMStrings();

        const eventElement = event.target;
        const studentName = eventElement.parentElement.parentElement.previousElementSibling.textContent;

        const subjectElement = document.querySelector(DOM.selectSubject);
        const selectedSubject = subjectElement[subjectElement.selectedIndex];
        const examName = selectedSubject.value;

        const exam = dataCtrl.deleteStudentFromExam(examName, studentName);

        uiCtrl.displayList(exam);

        const statistic = dataCtrl.getStatistic(exam);
        uiCtrl.showStatistic(statistic);

        setUpEventListenersDelete();
    };

    return {
        init() {
            month();
            setUpEventListeners();
            console.log("The app is now running.");
        }
    }
})(uiController, dataController);

mainController.init();