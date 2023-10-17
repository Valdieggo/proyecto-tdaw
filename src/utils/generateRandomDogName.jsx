const generateRandomDogName = (length = 6) => {
  const characters = "abcdefghijklmnopqrstuvwxyz"; 
  let randomName = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const letter = characters.charAt(randomIndex);

    randomName += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
  }

  return randomName;
};

export default generateRandomDogName;
