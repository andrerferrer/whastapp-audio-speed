const interval = setInterval(() => {

  const header = document.querySelector("._1QUKR");
  if(header){
    console.log(header)
    clearInterval(interval)
    
    const button = document.createElement("button")

    button.innerHTML = "1x"
    button.classList.add("speed-btn")

    const changeSpeedTo = (speed, button) => {
      event.currentTarget.innerHTML = `${speed}x`;
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio)=>{
        audio.playbackRate = speed;
      })
    }

    button.addEventListener("click", () => {
     if (button.innerHTML === "1x") {
      changeSpeedTo(1.5, button)
     } else if (button.innerHTML === "1.5x") {
      changeSpeedTo(2, button)
     } else if (button.innerHTML === "2x") {
      changeSpeedTo(1, button)
     }
    })

    header.appendChild(button)
  }
});