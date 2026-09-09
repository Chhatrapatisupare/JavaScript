function calculateGrade(){

let name=document.getElementById("name").value.trim();
let roll=document.getElementById("roll").value.trim();
let subject=document.getElementById("subject").value.trim();
let marks=Number(document.getElementById("marks").value);

// Form Validation
if(name=="" || roll=="" || subject==""){
alert("Please fill all fields");
return;
}

if(isNaN(marks) || marks<0 || marks>100){
alert("Marks must be between 0 and 100");
return;
}

let grade,status,remarks;

// Control Structures
if(marks>=90){
grade="A+";
status="PASS";
remarks="Outstanding";
}
else if(marks>=80){
grade="A";
status="PASS";
remarks="Excellent";
}
else if(marks>=70){
grade="B";
status="PASS";
remarks="Very Good";
}
else if(marks>=60){
grade="C";
status="PASS";
remarks="Good";
}
else if(marks>=50){
grade="D";
status="PASS";
remarks="Average";
}
else{
grade="F";
status="FAIL";
remarks="Needs Improvement";
}

let date=new Date().toLocaleString();

document.getElementById("result").innerHTML=`
<p><b>Name:</b> ${name}</p>
<p><b>Roll No:</b> ${roll}</p>
<p><b>Subject:</b> ${subject}</p>
<p><b>Marks:</b> ${marks}/100</p>
<p><b>Percentage:</b> ${marks}%</p>
<p><b>Grade:</b> ${grade}</p>
<p><b>Status:</b> ${status}</p>
<p><b>Remarks:</b> ${remarks}</p>
<p><b>Date:</b> ${date}</p>
`;
}
