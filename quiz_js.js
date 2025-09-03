// All Quiz Data
const quizzes = {
  c: [
    {q:"C is a ___ level language?",options:["High","Low","Middle","None"],answer:"Middle"},
    {q:"Which symbol is used to denote a preprocessor directive?",options:["#","$","@","%"],answer:"#"},
    {q:"What is the size of int in C (on most systems)?",options:["2 bytes","4 bytes","8 bytes","Depends on compiler"],answer:"4 bytes"},
    {q:"Which keyword is used to return a value in C?",options:["break","return","exit","continue"],answer:"return"},
    {q:"C language was developed by?",options:["Bjarne Stroustrup","James Gosling","Dennis Ritchie","Guido van Rossum"],answer:"Dennis Ritchie"},
    {q:"What is the default return type of main() in C?",options:["int","void","char","float"],answer:"int"},
    {q:"Which function is used to print in C?",options:["print()","echo()","printf()","cout"],answer:"printf()"},
    {q:"Which function is used to read input in C?",options:["scanf()","cin","input()","read()"],answer:"scanf()"},
    {q:"Which operator is used for pointer dereference?",options:["*","&","->","%"],answer:"*"},
    {q:"Header file for string functions?",options:["<math.h>","<string.h>","<stdio.h>","<stdlib.h>"],answer:"<string.h>"},
    {q:"Which keyword defines a constant?",options:["const","static","final","define"],answer:"const"},
    {q:"What is sizeof(char)?",options:["1","2","4","Depends"],answer:"1"},
    {q:"What is used to terminate a statement in C?",options:[".",";","}","!"],answer:";"},
    {q:"Which loop checks condition after execution?",options:["for","while","do while","none"],answer:"do while"},
    {q:"Default value of static int?",options:["0","garbage","null","1"],answer:"0"},
    {q:"Which specifier for float?",options:["%d","%c","%f","%s"],answer:"%f"},
    {q:"Which operator gives address?",options:["&","*","@","%"],answer:"&"},
    {q:"Which keyword allocates memory dynamically?",options:["malloc","alloc","new","create"],answer:"malloc"},
    {q:"C is a ___ typed language?",options:["Weak","Strong","Static","None"],answer:"Static"},
    {q:"Escape sequence for newline?",options:["\\t","\\n","\\r","\\0"],answer:"\\n"},
  ],
  java: [
    {q:"Java was developed by?",options:["Dennis Ritchie","James Gosling","Bjarne Stroustrup","Guido"],answer:"James Gosling"},
    {q:"Which keyword defines a class?",options:["def","class","struct","object"],answer:"class"},
    {q:"JVM stands for?",options:["Java Variable Machine","Java Virtual Machine","Joint Virtual Machine","None"],answer:"Java Virtual Machine"},
    {q:"Which is not OOP concept?",options:["Encapsulation","Polymorphism","Abstraction","Compilation"],answer:"Compilation"},
    {q:"Which keyword is used for inheritance?",options:["inherits","extends","implements","super"],answer:"extends"},
    {q:"Which method is entry point?",options:["main()","start()","run()","execute()"],answer:"main()"},
    {q:"Which keyword prevents inheritance?",options:["stop","static","final","sealed"],answer:"final"},
    {q:"Package keyword?",options:["pkg","package","import","include"],answer:"package"},
    {q:"Which access modifier is most restrictive?",options:["private","protected","public","default"],answer:"private"},
    {q:"Which is not a primitive type?",options:["int","float","String","char"],answer:"String"},
    {q:"Which is wrapper for int?",options:["Integer","Int","Num","Number"],answer:"Integer"},
    {q:"Which collection allows duplicates?",options:["Set","List","Map","None"],answer:"List"},
    {q:"Which keyword for interface?",options:["interface","class","struct","abstract"],answer:"interface"},
    {q:"Which exception is unchecked?",options:["IOException","RuntimeException","SQLException","FileNotFoundException"],answer:"RuntimeException"},
    {q:"Which operator compares values?",options:["=","==","===","<="],answer:"=="},
    {q:"Which method converts to string?",options:["toText()","toString()","convert()","stringify()"],answer:"toString()"},
    {q:"Which keyword for polymorphism?",options:["overload","override","extends","super"],answer:"override"},
    {q:"Thread class is in which package?",options:["util","lang","thread","io"],answer:"lang"},
    {q:"Which is used to handle exceptions?",options:["catch","handle","try-catch","error"],answer:"try-catch"},
    {q:"Java supports ___ inheritance?",options:["Multiple","Single","Both","None"],answer:"Single"},
  ],
  python: [
    {q:"Python was developed by?",options:["Dennis Ritchie","Guido van Rossum","James Gosling","Ken Thompson"],answer:"Guido van Rossum"},
    {q:"Python is a ___ typed language?",options:["Strong","Weak","Dynamic","Static"],answer:"Dynamic"},
    {q:"File extension of Python?",options:[".java",".c",".py",".exe"],answer:".py"},
    {q:"Which keyword defines a function?",options:["func","define","def","function"],answer:"def"},
    {q:"Which is mutable?",options:["tuple","list","string","int"],answer:"list"},
    {q:"Which function prints output?",options:["echo()","print()","printf()","output()"],answer:"print()"},
    {q:"Which symbol is used for comments?",options:["#","//","<!--","%"],answer:"#"},
    {q:"Which keyword for class?",options:["class","def","struct","object"],answer:"class"},
    {q:"Which is not core datatype?",options:["int","float","dict","char"],answer:"char"},
    {q:"Which function gives length?",options:["count()","len()","length()","size()"],answer:"len()"},
    {q:"Which keyword handles exceptions?",options:["catch","except","error","try"],answer:"except"},
    {q:"Which loop iterates over iterable?",options:["for","while","do","loop"],answer:"for"},
    {q:"Which module for random numbers?",options:["math","random","os","sys"],answer:"random"},
    {q:"Which keyword exits loop?",options:["stop","break","exit","end"],answer:"break"},
    {q:"Which operator is floor division?",options:["/","//","%","**"],answer:"//"},
    {q:"Which function converts to int?",options:["toInt()","convert()","int()","num()"],answer:"int()"},
    {q:"Which keyword for inheritance?",options:["super","inherits","extends","base"],answer:"super"},
    {q:"Which function takes input?",options:["read()","scan()","input()","cin"],answer:"input()"},
    {q:"Which operator checks identity?",options:["==","is","=","==="],answer:"is"},
    {q:"Which is immutable?",options:["list","set","tuple","dict"],answer:"tuple"},
  ]
};

let selectedQuiz = [];

// Start Quiz
function startQuiz(language) {
  selectedQuiz = quizzes[language];
  document.getElementById('languageSelect').style.display = "none";
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = "";
  selectedQuiz.forEach((item, index) => {
    let html = `<div class="question">
      <p>Q${index+1}. ${item.q}</p>`;
    item.options.forEach(opt => {
      html += `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`;
    });
    html += "</div>";
    quizDiv.innerHTML += html;
  });
  quizDiv.innerHTML += `<button type="button" class="btn" onclick="submitQuiz()">Submit</button>`;
  quizDiv.style.display = "block";
}

// Submit Quiz
function submitQuiz() {
  let score = 0;
  let userAnsHtml = "<h3>Your Answers:</h3>";
  selectedQuiz.forEach((item, index) => {
    const ans = document.querySelector(`input[name="q${index}"]:checked`);
    let userAnswer = ans ? ans.value : "Not Attempted";
    if (userAnswer === item.answer) {
      score++;
      document.getElementById("correctSound").play();
    } else {
      document.getElementById("wrongSound").play();
    }
    userAnsHtml += `<p class="userAnswer">Q${index+1}: ${item.q} <br> Your Answer: <b>${userAnswer}</b></p>`;
  });
  document.getElementById("submitSound").play();

  document.getElementById('quiz').style.display = "none";
  document.getElementById('result').style.display = "block";
  document.getElementById('score').innerText = score;
  document.getElementById('userAnswers').innerHTML = userAnsHtml;

  let msg = "";
  if (score > 15) {
    msg = "🎉 Congratulations! You're a Quiz Champion!";
  } else if (score > 10) {
    msg = "👏 Well done! You're a Quiz Whiz!";
  } else {
    msg = "🤗 Don't worry, it's all about learning! Better luck next time!";
  }
  document.getElementById('message').innerText = msg;
}

// Show Correct Answers
function showAnswers() {
  let html = "";
  selectedQuiz.forEach((item, index) => {
    html += `<p class="answer">Q${index+1}: <b>${item.answer}</b></p>`;
  });
  document.getElementById('answersList').innerHTML = html;
  document.getElementById('answersSection').style.display = "block";
}
