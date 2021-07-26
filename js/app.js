/*               --- Particle JS ---               */
particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles.js loaded - callback")
})

/*       --- Mid Heavy Timeline Animation ---       */
var basicTimeline = anime.timeline()
basicTimeline.reverse()
var TIME_MULTIPLIER = 1.3

function H() {
  // Make the line visible
  document.getElementById("hPath").style.display = "block"
  return {
    targets: "#hPath",
    translateX: 100,
    direction: "reverse",
    easing: "easeInOutExpo",
    duration: TIME_MULTIPLIER * 150,
    delay: TIME_MULTIPLIER * 100
  }
}

function Back(backTarget) {
  return {
    targets: backTarget,
    translateY: 212,
    translateX: -35,
    direction: "reverse",
    easing: "linear",
    duration: TIME_MULTIPLIER * 110
  }
}

function Front(frontTarget) {
  return {
    targets: frontTarget,
    translateY: -212,
    translateX: -35,
    direction: "reverse",
    easing: "linear",
    duration: TIME_MULTIPLIER * 110
  }
}

// This runs from the bottom up
basicTimeline
  // **End Here**
  .add(Front(`#frontPath5`))
  .add(Back(`#backPath5`))
  .add(H())

  .add(Front(`#frontPath4`))
  .add(Back(`#backPath4`))

  .add(Front(`#frontPath3`))
  .add(Back(`#backPath3`))

  .add(Front(`#frontPath2`))
  .add(Back(`#backPath2`))

  .add(Front(`#frontPath1`))
  .add(Back(`#backPath1`))
  .add({targets: 'p', color: 'rgba(214, 214, 214, 0)', duration: TIME_MULTIPLIER * 500})
// **Start Here**
