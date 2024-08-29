const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.style.cssText = ["color: blue;"];
blueH3.innerText = "I'm a blue h3!";
container.appendChild(blueH3);

const borderedDiv = document.createElement("div");
borderedDiv.style.backgroundColor = "pink";
// These would cancel the pink backgroundColor
// borderedDiv.style.cssText = "border:1px solid black;";
// borderedDiv.setAttribute("style", "border:1px solid black;")
borderedDiv.style.border = "15px solid blue";

    // inside borderedDiv:
    const borderedH1 = document.createElement("h1");
    borderedH1.innerText = "I'm in a div";
    borderedDiv.appendChild(borderedH1);
    
    const borderedP = document.createElement("p");
    borderedP.innerText = "ME TOO!";
    borderedDiv.appendChild(borderedP);

container.appendChild(borderedDiv);


function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");
  
  btn.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "yellow";
  });

  // METHOD 3
  btn.addEventListener("click", alertFunction);

