const formData = document.querySelector("#contact-form-data");
const Msg = document.querySelector(".Msg");
const [name, email, phone] = formData.querySelectorAll("input");
const message = formData.querySelector("#message");
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(name.value + email.value + phone.value + message.value);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shikamusenge",
    Password: "X-ray.123",
    To: "shikamusenge720@gmail.com",
    From: email.value,
    Subject: "{>RSP NEW MY BLAND-MESSAG ",
    Body: `From:${email.value} <br>
    Names: ${email.value} <br>
    Names: ${phone.value} <br>
    Message:${message.value}
           `,
  }).then((message) => {
    Msg.innerText = "Message sent successful";
    Msg.style.visibility = "visible";
    clearMessage();
  });
});
const clearMessage = () => {
  setTimeout(() => {
    Msg.style.visibility = "hidden";
  }, 1000);
};
