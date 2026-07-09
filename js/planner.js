const plannerName = document.querySelectorAll(".plannername");

let plannedArr = JSON.parse(localStorage.getItem("plannedWork")) || [];

function displayPlan(){
  plannedArr.forEach((plan)=>{
    plannerName[plan.planedDivIndex].textContent = plan.planedVal;
  })
  localStorage.setItem("plannedWork" , JSON.stringify(plannedArr));
}

plannerName.forEach((elm, index) => {
  elm.addEventListener("focusout", (e) => {
    let planedDiv = elm.closest("div").children[0].textContent;
    let planedVal = e.target.textContent;
    let planedDivIndex = index;

    if (planedVal.trim() === "") return;
    let existingPlan = plannedArr.find((plann) => {
      return plann.planedDivIndex == planedDivIndex;
    });

    if (!existingPlan) {
      let planedObj = {
        planedDiv,
        planedVal,
        planedDivIndex,
      };
      plannedArr.push(planedObj);
    } else {
      existingPlan.planedVal = planedVal;
    }
    localStorage.setItem("plannedWork", JSON.stringify(plannedArr));
  });
  displayPlan();
});
