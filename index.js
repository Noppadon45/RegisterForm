function submit() {
  let firstnameDOM = document.querySelector("input[name=firstname]");
  let lastnameDOM = document.querySelector("input[name=lastname]");
  let agesDOM = document.querySelector("input[name=ages");
  let birthdayDOM = document.querySelector("input[name=birthday]");
  let genderDOM = document.querySelector("input[name=gender]:checked");
  let interestedDOM = document.querySelectorAll("input[name=interest]:checked");
  let descriptionDOM = document.querySelector("textarea[name=description]");

  let interested = "";

  for (let i = 0; i < interestedDOM.length; i++) {
    interested += interestedDOM[i].value;
    if (i != interestedDOM.length - 1) {
      interested += ",";
    }
  }
  let userAnswer = {
    firstname: firstnameDOM.value,
    lastname: lastnameDOM.value,
    ages: agesDOM.value,
    birthday: birthdayDOM.value,
    gender: genderDOM.value,
    interested: interested,
    description: descriptionDOM.value,
  };
  console.log(userAnswer);
}
