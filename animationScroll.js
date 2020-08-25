function particle({
  lifeTime = 10000,
  creationInterval = 400,
  container,
  maximumWidth = 50,
  additionalClass,
  bottomPadding = 0
}) {
  const section = document.querySelector(container),
    parent = document.querySelector(".preview"),
    colors = ["#2854aa", "#0a98b1", "#a1284d", "#8c43ff", "#9a3a63", "#5c46cd", "219174"],
    type = ["p", "t", "c"],
    figure = document.createElement("span"),
    figureColor = colors[Math.floor(Math.random() * colors.length)],
    figureType = type[Math.floor(Math.random() * type.length)],
    figureSize = (Math.random() * maximumWidth);
  if (additionalClass) figure.classList.add(additionalClass);
  figure.style.position = "absolute";
  figure.style.width = figure.style.height = figureSize + "px";
  let figureTop = Math.random() * innerHeight;
  if (figureTop >= parent.offsetHeight - bottomPadding) figureTop = parent.offsetHeight - bottomPadding;
  figure.style.left = Math.random() * innerWidth - 60 + "px";
  figure.style.top = figureTop + "px";
  figure.style.backgroundColor = figureColor;
  switch (figureType) {
    case "p":
      figure.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
      break;
    case "c":
      figure.style.borderRadius = "50%";
      break;
    case "t":
      figure.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
      break;
    default:
      figure.style.borderRadius = "50%";
      break;
  }
  if (Math.random() < 0.4) figure.style.boxShadow = `0 0 10px 20px ${figureColor}`;
  section.append(figure);
  setTimeout(() => {
    figure.remove();
  }, lifeTime);
  setTimeout(function () {
    particle({
      lifeTime: lifeTime,
      creationInterval: creationInterval,
      container: container,
      maximumWidth: maximumWidth,
      additionalClass: additionalClass,
      bottomPadding: bottomPadding
    });
  }, creationInterval);
}

// Usage example

// particle({
//   lifeTime: 10000,
//   creationInterval: 300,
//   container: ".container",
//   maximumWidth: 50,
//   additionalClass: "figure-animation",
//   bottomPadding: 150
// });