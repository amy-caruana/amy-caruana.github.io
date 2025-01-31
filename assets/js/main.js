
// Get the canvas element
const Canvas = document.getElementById("Canvas3D");


let State = "Modern";

const MainButton = document.getElementById("MainButton");
const MainDiv = document.getElementById("MainDiv");

MainButton.onclick = function() {ChangeState();};

function ChangeState()
{
    // // Rotate arrow inside the main button
    // let Rotation = parseInt((MainButton.style.transform || "0").match(/\d+/)) + 180;
    // MainButton.style.transform = `rotateZ(${Rotation}deg)`;

    const spaceshipImage = document.getElementById("SpaceshipImage");

    let rotation = parseInt(spaceshipImage.dataset.rotation || "0") + 180;
    spaceshipImage.style.transform = `rotate(${rotation}deg)`;
    spaceshipImage.dataset.rotation = rotation;

    if (State === "Modern")
    {
        State = "Retro";
        MainDiv.classList.add("hidden");

        Canvas.focus();
        //requestAnimationFrame(UpdateScene);
    }

    else
    {
        State = "Modern";
        MainDiv.classList.remove("hidden");
    }

    //requestAnimationFrame(FadeAudio);
}


function NightMode(checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.documentElement.classList.add("light-ui");
      } else {
        document.documentElement.classList.remove("light-ui");
      }
    });
  
    // Always default to dark mode
    checkbox.checked = false;
    document.documentElement.classList.remove("light-ui");
  }
  
  var lightMode = document.getElementById('light-mode');
  NightMode(lightMode);
  
  
  
  


