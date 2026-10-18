import GitHub from "@images/icons/socials/GitHub.astro"
import LinkedIn from "@images/icons/socials/LinkedIn.astro"
import BlueSky from "@images/icons/socials/BlueSky.astro"
import Dailydev from "@images/icons/socials/Dailydev.astro"
import Dev from "@images/icons/socials/Dev.astro"
import Hashnode from "@images/icons/socials/Hashnode.astro"
import PeerList from "@images/icons/socials/PeerList.astro"

const socialmedia = [
  {
    name: "GitHub",
    url: "https://github.com/malsebasmal",
    icon: GitHub,
    colors: { light: "#181717", dark: "#f0f6fc" },
    copyTemplate: "💻 Check out my code on {name} ➭ {url}"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/antoniomaldonadotech",
    icon: LinkedIn,
    colors: { light: "#0a66c2", dark: "#0a66c2" },
    copyTemplate: "🤝 Connect with me on {name} ➭ {url}"
  },
  {
    name: "PeerList",
    url: "https://peerlist.io/malsebasmal/posts",
    icon: PeerList,
    colors: { light: "#00AA45", dark: "#00AA45" },
    copyTemplate: "🟩 View my work & projects on {name} ➭ {url}"
  },
  {
    name: "DailyDev",
    url: "https://daily.dev/malsebasmal",
    icon: Dailydev,
    colors: { light: "#ac1de4", dark: "#ac1de4" },
    copyTemplate: "🚀 See what I read on {name} ➭ {url}"
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/malsebasmal.bsky.social",
    icon: BlueSky,
    colors: { light: "#0085ff", dark: "#0085ff" },
    copyTemplate: "☁️ Follow me on {name} ➭ {url}"
  },
  {
    name: "Dev",
    url: "https://dev.to/malsebasmal",
    icon: Dev,
    colors: { light: "#0a0a0a", dark: "#f1f5f9" },
    copyTemplate: "👨‍💻 Read my articles on {name} ➭ {url}"
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@malsebasmal",
    icon: Hashnode,
    colors: { light: "#2563eb", dark: "#2563eb" },
    copyTemplate: "🌐 Read my blog posts on {name} ➭ {url}"
  },
] as const

export default socialmedia