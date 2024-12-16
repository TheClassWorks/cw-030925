let provincesData = {
  اصفهان: ["اصفهان", "کاشان", "شهرضا"],
  فارس: ["شیراز", "لار", "لامرد", "گراش", "جهرم"],
  خوزستان: ["اهواز", "آبادان", "ماهشهر"],
  تهران: ["مهرآباد", "فرودگاه امام", "کرج", "ورامین"],
  "خراسان رضوی": ["مشهد", "سبزوار", "چناران", "شاندیز", "طرقبه"],
};

let provincesSelectBox = document.getElementById("provinces");
let citySelectBox = document.getElementById("cities");
provincesSelectBox.addEventListener("change", () => {
  let citiesData = provincesData[provincesSelectBox.value];
  console.log(citiesData);
  console.log(provincesSelectBox.value);
  if (provincesSelectBox.value == "استان مقصد را انتخاب کنید ...") {
    citySelectBox.innerHTML = "";
    let newItem = document.createElement("option");
    newItem.textContent = "انتخاب کنید ...";
    citySelectBox.append(newItem);

    //راه دوم
    // citySelectBox.innerHTML = "<option>" + "انتخاب کنید ..." + "</option>";
  } else {
    citySelectBox.innerHTML = "";
    citiesData.forEach((city) => {
      let newItem = document.createElement("option");
      newItem.textContent = city;
      citySelectBox.append(newItem);

      //راه دوم
      //   citySelectBox.innerHTML += "<option>" + city + "</option>";
    });
  }
});

// *******************   part2: custom selectBox   ************************* //
let ostan = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه وبویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

let selectBtn = document.querySelector(".selectBtn");
let content = document.querySelector(".content");
let options = document.querySelector(".options");
let input = document.querySelector(".search input");

selectBtn.addEventListener("click", () => {
  content.classList.toggle("active");
  options.innerHTML = "";
  ostan.forEach((item) => {
    let newElem = document.createElement("li");
    newElem.innerText = item;
    options.append(newElem);
  });
});

input.addEventListener("keyup", () => {
  let items = ostan.filter((item) => item.includes(input.value));
  // console.log(items);
  options.innerHTML = "";
  items.forEach((element) => {
    let newElem = document.createElement("li");
    newElem.innerText = element;
    options.append(newElem);
  });
});

// let s="یزد"
// console.log(s.startsWith("ف"));

// let s = "اصفهان";
// console.log(s.includes("ف"));

// let a = [11, 3, -4, 19];
// console.log(a.filter((item) => item > 10));

// console.log(a.some((item) => item > 10));
