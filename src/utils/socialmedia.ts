import LinkedIn from "@images/icons/socials/LinkedIn.astro"
import BlueSky from "@images/icons/socials/BlueSky.astro"
import Dailydev from "@images/icons/socials/Dailydev.astro"
import Medium from "@images/icons/socials/Medium.astro"
import Dev from "@images/icons/socials/Dev.astro"
import Hashnode from "@images/icons/socials/Hashnode.astro"

const socialmedia = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/antoniomaldonadotech",
    icon: LinkedIn,
    colors: {
      bg: "bg-[#0a66c2]"
    }
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/malsebasmal.bsky.social",
    icon: BlueSky,
    colors: ""
  },
  {
    name: "DailyDev",
    url: "https://app.daily.dev/malsebasmal/upvoted",
    icon: Dailydev,
    colors: ""
  },
  {
    name: "Medium",
    url: "https://medium.com/@malsebasmal",
    icon: Medium,
    colors: ""
  },
  {
    name: "Dev",
    url: "https://dev.to/malsebasmal",
    icon: Dev,
    colors: ""
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@malsebasmal",
    icon: Hashnode,
    colors: ""
  },
] as const

export default socialmedia