const goalsForm = document.querySelector(".goalsForm");
const goalName = document.querySelector("#goalname");
const goalDescription = document.querySelector("#goaldescription");

const goalsDisplayDiv = document.querySelector(".goalsDisplayDiv");

let goalsArr = JSON.parse(localStorage.getItem("goals")) || [];

function displayGoals() {
  goalsDisplayDiv.innerHTML = "";
  goalsArr.forEach((elm, idx) => {
    goalsDisplayDiv.innerHTML += `<div class="bg-[var(--secondary)] rounded-xl relative p-3 flex gap-3 items-center">
                        <div class="w-full">
                            <p class="">${elm.goalNameVal}</p>
                            <p class="mt-2 border-t">${elm.goalDescriptionVal}</p>
                        </div>
                        <div class="w-10">
                            <button
                                onclick="deleteGoal('${idx}')" class="bg-[var(--primary)] p-3 rounded-xl hover:bg-[var(--primary-hover)] hover:scale-110 transition duration-300 cursor-pointer"><i
                                    class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>`;
  });
}

goalsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let goalNameVal = goalName.value.trim();
  let goalDescriptionVal = goalDescription.value.trim();

  if (goalNameVal === "" || goalDescriptionVal === "") {
    alert("please Enter your goal");
    return;
  }

  let goalsObj = {
    goalNameVal,
    goalDescriptionVal,
  };
  goalsArr.push(goalsObj);
  localStorage.setItem("goals", JSON.stringify(goalsArr));
  displayGoals();
  goalsForm.reset();
});

let deleteGoal = (idx) => {
  goalsArr.splice(idx, 1);
  localStorage.setItem("goals", JSON.stringify(goalsArr));
  displayGoals();
};

displayGoals();
