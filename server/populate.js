require("dotenv").config()
const robohashAvatars = require("robohash-avatars")
const _ = require("lodash")

const populateDB = async function () {
  const robots = ["Kittens", "Humans", "Robots", "Monsters", "DisembodiedHeads"]
  try {
    const avatarUrl = robohashAvatars.generateAvatar({
      background: robohashAvatars.BackgroundSets.RandomBackground1,
      characters: robohashAvatars.CharacterSets[_.sample(robots)],
      height: 400,
      width: 400
    })

    console.log(avatarUrl)
    console.log(avatarUrl2)
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  } finally {
    
  }
};

populateDB();
