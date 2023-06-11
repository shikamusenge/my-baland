const formData = document.querySelector("#contact-form-data");
const Msg = document.querySelector(".Msg");
const [name, email, phone] = formData.querySelectorAll("input");
const message = formData.querySelector("#message");
formData.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(name.value + email.value + phone.value + message.value);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shikamusenge720@gmail.com",
    Password: "F281003AEF102D9189CD73C477F0F1EE66D4",
    To: "shikamusenge720@gmail.com",
    From: email.value,
    Subject: "{>RSP NEW MY BLAND-MESSAG ",
    Body: `From:${email.value} <br>
    Names: ${email.value} <br>
    Names: ${phone.value} <br>
    Message:${message.value}
           `,
  }).then((res) => {
    Msg.innerText = res;
    console.log(res);
    Msg.style.visibility = "visible";
    clearMessage();
  });
});
const clearMessage = () => {
  setTimeout(() => {
    Msg.style.visibility = "hidden";
  }, 1000);
};
