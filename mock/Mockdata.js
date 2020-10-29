export const slidesData = [
  {
    id: 1,
    catchyText: "Relaxed",
    title: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't Worry! Find the best outfit here!",
    backgroundColor: "#BFEAF5",
    picture: {
      src: require("../assets/1.png"),
      height: 3583,
      width: 2513
    }
  },
  {
    id: 2,
    catchyText: "Playful",
    title: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardobe? Explore hundreds of outfit ideas",
    backgroundColor: "#BEECC4",
    picture: {
      src: require("../assets/2.png"),
      height: 3744,
      width: 2791
    }
  },
  {
    id: 3,
    catchyText: "Excentric",
    title: "Your Style Your Way",
    description:
      "Create your unique & individual style annd look amazing everyday",
    backgroundColor: "#FFE4D9",
    picture: {
      src: require("../assets/3.png"),
      height: 3244,
      width: 2738

    }
  },
  {
    id: 4,
    catchyText: "Funky",
    title: "Looks Good Feels Good",
    description:
      "Discover the latest trends in fashion annd explore your personality",
    backgroundColor: "#FFDDDD",
    picture: {
      src: require("../assets/4.png"),
      height: 2551,
      width: 1757

    }
  },
];

export const WelcomeAsset = {
  src : require("../assets/5.png"),
  height: 5074,
  width: 3383,
}

const DesignAsset = [
  require("../assets/pattern1.png")
]



export const fonts = {
  "SFProdisplay-Regular" :require("../assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProdisplay-Bold" : require("../assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProdisplay-SemiBold" : require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProdisplay-Medium" : require("../assets/fonts/SF-Pro-Display-Medium.otf"),
}

const slideSource = slidesData.map((slide) => slide.picture.src)

export const imageAssets = [ ...slideSource, WelcomeAsset.src, DesignAsset]