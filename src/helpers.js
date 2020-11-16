function getRandomFace(){
   let result =  Math.floor(Math.random() * 2) === 0 ? "tails" : "heads"
   return result
}

export { getRandomFace }