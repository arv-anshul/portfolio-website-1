let future_learning_laguage = [
  ["fa fa-check", "Python", "Advanced Level"],
  ["fa fa-check", "Shell Script", "Advanced Level"],
  ["fa fa-exclamation-circle", "JavaScript", "Advanced Level"],
  ["fa fa-exclamation-circle", "Java", "Currently Learning"],
];

let future_learning_pylib = [
  ["fa fa-check", "Numpy, Pandas & Seaborn", "Advanced Level"],
  ["fa fa-check", "Flask", "Beginner Level"],
  ["fa fa-exclamation-circle", "ML Algo", "Beginner Level"],
  ["fa fa-clock-o", "Django", "Beginner Level"],
  ["fa fa-exclamation-circle", "Natural Language Processing", "Beginner Level"],
  ["fa fa-clock-o", "Deep Learning", "Advanced Level"],
];

let future_learning_extras = [
  ["fa fa-check", "Github", "Beginner Level"],
  ["fa fa-exclamation-circle", "Github", "Advanced Level"],
  ["fa fa-check", "Stylus Extension", "Advanced Level"],
];

const progLang = document.querySelector("#progLang");
const dataScienceRelated = document.querySelector("#dataScienceRelated");
const extrasRow = document.querySelector("#extrasRow");

// progLang
for (const item of future_learning_laguage) {
  colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-md-4");

  futureDiv = document.createElement("div");
  futureDiv.setAttribute("class", "future-learning");
  colDiv.appendChild(futureDiv);

  iTag = document.createElement("i");
  iTag.setAttribute("class", `${item[0]}`);
  iTag.innerHTML = "&nbsp;";
  futureDiv.appendChild(iTag);

  spanTag = document.createElement("span");
  spanTag.setAttribute("class", "h5");
  spanTag.innerHTML = `${item[1]} <small>${item[2]}</small>`;
  futureDiv.appendChild(spanTag);

  progLang.appendChild(colDiv);
}

// dataScienceRelated
for (const item of future_learning_pylib) {
  colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-md-4");

  futureDiv = document.createElement("div");
  futureDiv.setAttribute("class", "future-learning");
  colDiv.appendChild(futureDiv);

  iTag = document.createElement("i");
  iTag.setAttribute("class", `${item[0]}`);
  iTag.innerHTML = "&nbsp;";
  futureDiv.appendChild(iTag);

  spanTag = document.createElement("span");
  spanTag.setAttribute("class", "h5");
  spanTag.innerHTML = `${item[1]} <small>${item[2]}</small>`;
  futureDiv.appendChild(spanTag);

  dataScienceRelated.appendChild(colDiv);
}

// extrasRow
for (const item of future_learning_extras) {
  colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-md-4");

  futureDiv = document.createElement("div");
  futureDiv.setAttribute("class", "future-learning");
  colDiv.appendChild(futureDiv);

  iTag = document.createElement("i");
  iTag.setAttribute("class", `${item[0]}`);
  iTag.innerHTML = "&nbsp;";
  futureDiv.appendChild(iTag);

  spanTag = document.createElement("span");
  spanTag.setAttribute("class", "h5");
  spanTag.innerHTML = `${item[1]} <small>${item[2]}</small>`;
  futureDiv.appendChild(spanTag);

  extrasRow.appendChild(colDiv);
}

let projects = [
  [
    "coldTurkey-img.png",
    "https://github.com/arv-anshul/ColdTurkeyBlocker-Pro",
    "Create Cold-Turkey-Blocker Repo",
    "Oct 2022",
  ],
  [
    "dotfiles-img.png",
    "https://github.com/arv-anshul/dotfiles",
    "Commit dotfiles on GitHub",
    "Nov 2022",
  ],
  [
    "myModules-img.png",
    "http://github.com/arv-anshul/myModules",
    "Create myModules repo on GitHub",
    "Nov 2022",
  ],
];

const project = document.getElementById("projects");

for (const item of projects.reverse()) {
  colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-md-4");

  imgTag = document.createElement("img");
  imgTag.setAttribute("src", `./images/${item[0]}`);
  imgTag.setAttribute("class", "img-responsive");
  colDiv.appendChild(imgTag);

  h3 = document.createElement("h3");
  h3.setAttribute("class", "h5");
  colDiv.appendChild(h3);

  link = document.createElement("a");
  link.setAttribute("href", `${item[1]}`);
  link.innerHTML = item[2];
  h3.appendChild(link);

  para = document.createElement("p");
  para.innerHTML = item[3];
  colDiv.appendChild(para);

  project.appendChild(colDiv);
}
