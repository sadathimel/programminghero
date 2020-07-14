var student = {
    id: 12,
    phone: 123456,
    name: 'sadat'
}
var student2 = {
    id: 13,
    phone: 1234567,
    name: 'sadat himel'
}

var phonePropName = 'phone';
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];
student2.phone = 3453645;
student2["phone"] = 666666;
student2.cinema = "ogni"
console.log(phoneNo1);
console.log(student2)