import GitHub from "@images/icons/socials/GitHub.astro"
import LinkedIn from "@images/icons/socials/LinkedIn.astro"
import BlueSky from "@images/icons/socials/BlueSky.astro"
import Dailydev from "@images/icons/socials/Dailydev.astro"
import Medium from "@images/icons/socials/Medium.astro"
import Dev from "@images/icons/socials/Dev.astro"
import Hashnode from "@images/icons/socials/Hashnode.astro"

const socialmedia = [
  {
    name: "GitHub",
    url: "https://github.com/malsebasmal",
    icon: GitHub,
    colors: {
      text: "#1f2328"
    }
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/antoniomaldonadotech",
    icon: LinkedIn,
    colors: {
      text: "#0a66c2"
    }
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/malsebasmal.bsky.social",
    icon: BlueSky,
    colors: {
      text: "#0085ff"
    }
  },
  {
    name: "DailyDev",
    url: "https://app.daily.dev/malsebasmal/upvoted",
    icon: Dailydev,
    colors: {
      text: "#ac1de4"
    }
  },
  {
    name: "Medium",
    url: "https://medium.com/@malsebasmal",
    icon: Medium,
    colors: {
      text: "black"
    }
  },
  {
    name: "Dev",
    url: "https://dev.to/malsebasmal",
    icon: Dev,
    colors: {
      text: "black"
    }
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@malsebasmal",
    icon: Hashnode,
    colors: {
      text: "#2563eb"
    }
  },
] as const

export default socialmedia