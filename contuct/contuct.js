const formData = document.querySelector("#contact-form-data");
const Msg = document.querySelector(".Msg");
const [name, email, phone] = formData.querySelectorAll("input");
const message = formData.querySelector("#message");
const submitBtn = formData.querySelector("#submit-btn-contuct");
formData.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(name.value + email.value + phone.value + message.value);
  submitBtn.innerHTML = `
  <img src="./../images/R (1).gif" alt="Loading........" srcset="" height="30px" />
  `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shikamusenge@test.comm",
    Password: "9C006BCFB5224F1BDCD6F4F31241E46781FF",
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
    submitBtn.innerHTML = "send";
    // clearMessage();
  });
});
const clearMessage = () => {
  setTimeout(() => {
    Msg.style.visibility = "hidden";
  }, 1000);
};
