const createCardNode = () => {
    const imagen = document.createElement("img");
    imagen.setAttribute("alt", "avatar");
    imagen.src = "./assets/images/avatar-jessica.jpeg";
    const imageContainer = document.createElement("div");
    imageContainer.className = "Imagen";
    imageContainer.appendChild(imagen);
    
    const name = document.createElement("div");
    name.className = "Name";
    name.textContent = "Jessica Randall";
  
    const lugar = document.createElement("div");
    lugar.className = "lugar";
    lugar.textContent = "London, United Kingdom";
  
    const ocupacion = document.createElement("div");
    ocupacion.className = "Ocupacion";
    ocupacion.textContent = '"Front-end developer and avid reader."';
  
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    
    const githubButton = document.createElement("button");
    githubButton.textContent = "GitHub";
  
    const mentorButton = document.createElement("button");
    mentorButton.textContent = "Frontend Mentor";
  
    const linkedinButton = document.createElement("button");
    linkedinButton.textContent = "LinkedIn";
  
    const twitterButton = document.createElement("button");
    twitterButton.textContent = "Twitter";
  
    const instagramButton = document.createElement("button");
    instagramButton.textContent = "Instagram";
  
    buttonContainer.appendChild(githubButton);
    buttonContainer.appendChild(mentorButton);
    buttonContainer.appendChild(linkedinButton);
    buttonContainer.appendChild(twitterButton);
    buttonContainer.appendChild(instagramButton);
  
    const perfil = document.createElement("div");
    perfil.className = "Perfil";
    perfil.appendChild(imageContainer);
    perfil.appendChild(name);
    perfil.appendChild(lugar);
    perfil.appendChild(document.createElement("br"));
    perfil.appendChild(document.createElement("br"));
    perfil.appendChild(ocupacion);
    perfil.appendChild(buttonContainer);
  
    return perfil;
  };
  
  const mountNode = document.querySelector("#tarjetas");
  const addCardButton = document.createElement("button");
  addCardButton.textContent = "Añadir Tarjeta";
  addCardButton.id = "btnAñadirTarjeta";
  
  const addCard = () => {
    mountNode.appendChild(createCardNode());
  };
  
  addCardButton.addEventListener("click", addCard);
  mountNode.appendChild(addCardButton);
  