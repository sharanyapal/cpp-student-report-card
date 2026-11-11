/* Browser adaptation of Visual C++ 2010/student-report-card-project.cpp.
   Percentage and grade thresholds are taken directly from the C++ calculate() method. */
window.runProject = async function (ui) {
  let students = ui.load('students', []);
  const save = () => ui.save('students', students);
  const find = rollno => students.find(s => s.rollno === rollno);
  function report(s) {
    ui.line('Roll number of student : ' + s.rollno);
    ui.line('Name of student : ' + s.name);
    ui.line('Marks in Physics : ' + s.p_marks);
    ui.line('Marks in Chemistry : ' + s.c_marks);
    ui.line('Marks in Maths : ' + s.m_marks);
    ui.line('Marks in English : ' + s.e_marks);
    ui.line('Marks in Computer Science : ' + s.cs_marks);
    ui.line('Percentage of student is : ' + s.per.toFixed(2));
    ui.line('Grade of student is : ' + s.grade);
  }
  async function getData(existing) {
    const rollno = existing ? existing.rollno : await ui.int('Enter The roll number of student:',1,999999);
    const name = await ui.text('Enter The Name of student:',49);
    const p_marks = await ui.int('Enter marks in physics out of 100:',0,100);
    const c_marks = await ui.int('Enter marks in chemistry out of 100:',0,100);
    const m_marks = await ui.int('Enter marks in maths out of 100:',0,100);
    const e_marks = await ui.int('Enter marks in english out of 100:',0,100);
    const cs_marks = await ui.int('Enter marks in computer science out of 100:',0,100);
    const per = (p_marks+c_marks+m_marks+e_marks+cs_marks)/5.0;
    const grade = per>=60?'A':per>=50?'B':per>=33?'C':'F';
    return {rollno,name,p_marks,c_marks,m_marks,e_marks,cs_marks,per,grade};
  }
  function all() {
    ui.head('DISPLAY ALL RECORD');
    if (!students.length) { ui.line('No student records found.'); return; }
    students.forEach(s => { ui.rule();report(s); });
  }
  function classResult() {
    ui.head('ALL STUDENTS RESULT');
    ui.line('R.No  Name                 P    C    M    E    CS  %age   Grade');
    ui.rule('=',65);
    students.forEach(s => ui.line(String(s.rollno).padEnd(6)+s.name.slice(0,18).padEnd(21)+[s.p_marks,s.c_marks,s.m_marks,s.e_marks,s.cs_marks].map(x=>String(x).padStart(4)).join('')+s.per.toFixed(2).padStart(8)+s.grade.padStart(8)));
    if (!students.length) ui.line('No student records found.');
  }
  async function resultMenu() {
    while (true) {
      ui.screen('RESULT MENU');
      ui.line('1. Class Result\n2. Student Report Card\n3. Back to Main Menu');
      const choice = await ui.int('Enter Choice (1/2/3)?',1,3);
      if (choice === 3) return;
      if (choice === 1) classResult();
      else {
        const roll = await ui.int('Enter Roll Number Of Student:',1,999999);
        const found = find(roll);
        if (found) report(found); else ui.line('record not exist');
      }
    }
  }
  async function entryMenu() {
    while (true) {
      ui.screen('ENTRY MENU');
      ui.line('1. CREATE STUDENT RECORD\n2. DISPLAY ALL STUDENTS RECORDS');
      ui.line('3. SEARCH STUDENT RECORD\n4. MODIFY STUDENT RECORD');
      ui.line('5. DELETE STUDENT RECORD\n6. BACK TO MAIN MENU');
      const choice = await ui.int('Please Enter Your Choice (1-6):',1,6);
      if (choice === 6) return;
      if (choice === 1) {
        const record = await getData();
        if (find(record.rollno)) ui.line('Roll number already exists.');
        else {students.push(record);save();ui.line('Student record Has Been Created');}
      } else if (choice === 2) all();
      else {
        const roll = await ui.int('Please Enter The roll number:',1,999999);
        const s = find(roll);
        if (!s) {ui.line('Record Not Found');continue;}
        if (choice === 3) report(s);
        else if (choice === 4) {Object.assign(s, await getData(s));save();ui.line('Record Updated');}
        else if (choice === 5) {
          const yes = await ui.pick('Delete record ' + roll + '? (y/n)', ['y','n']);
          if (yes === 'y') {students = students.filter(x=>x.rollno!==roll);save();ui.line('Record Deleted ..');}
        }
      }
    }
  }
  ui.head('STUDENT REPORT CARD PROJECT');
  while (true) {
    ui.screen('MAIN MENU');
    ui.line('01. RESULT MENU\n02. ENTRY/EDIT MENU\n03. EXIT');
    const choice = await ui.int('Please Select Your Option (1-3):',1,3);
    if (choice === 3) {ui.line('Goodbye!');return;}
    if (choice === 1) await resultMenu(); else await entryMenu();
  }
};
