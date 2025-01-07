const fname = document.getElementById('fname');
const femail = document.getElementById('femail');
const fsubject = document.getElementById('fsubject');
const fmessage = document.getElementById('fmessage');
const submit = document.getElementById('submit');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>message: </h1>${fmessage.value}
    <br>
    <h1>email: </h1>${femail.value}
    <br>
    <h1>subject: </h1>${fsubject.value}
    `;

    Email.send({
        SecureToken: "3c7f3bd1-7808-4cc1-9e10-1405bf944cbc", //add your token here
        To: 'ahmadbaba_@outlook.com',
        From: "ahmadadnanbaba@gmail.com",
        Subject: "This is the subject",
        Body: ebody
    }).then(
        message => alert(message)
    );

    //

    /*function sendEmail() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ahmadadnanbaba@gmail.com",
            Password: "B23146A35F453407327D008D4E04DEEE81DB",
            To: 'ahmadbaba_@outlook.com',
            From: 'ahmadadnanbaba@gmail.com', // put a real email address that is verified
            Port: '2525',
            Subject: "This is the subject",
            Body: "And this is the body"

        }).then(
            message => {
                alert("mail sent successfully");
                console.log(message);
            }
        );

    }*/
});