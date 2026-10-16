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
    colors: { text: "#1f2328" },
    copyTemplate: "💻 Mira mi código en {name} ➭ {url}"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/antoniomaldonadotech",
    icon: LinkedIn,
    colors: { text: "#0a66c2" },
    copyTemplate: "🤝 Conecta conmigo en {name} ➭ {url}"
  },
  {
    name: "PeerList",
    url: "https://peerlist.io/malsebasmal/posts",
    icon: PeerList,
    colors: { text: "#00AA45" },
    copyTemplate: "🟩 Mira mi trabajo y proyectos en {name} ➭ {url}"
  },
  {
    name: "DailyDev",
    url: "https://daily.dev/malsebasmal",
    icon: Dailydev,
    colors: { text: "#ac1de4" },
    copyTemplate: "🚀 Descubre lo que leo en {name} ➭ {url}"
  },
  {
    name: "BlueSky",
    url: "https://bsky.app/profile/malsebasmal.bsky.social",
    icon: BlueSky,
    colors: { text: "#0085ff" },
    copyTemplate: "☁️ Sígueme en {name} ➭ {url}"
  },
  {
    name: "Dev",
    url: "https://dev.to/malsebasmal",
    icon: Dev,
    colors: { text: "black" },
    copyTemplate: "👨‍💻 Explora mis posts en {name} ➭ {url}"
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@malsebasmal",
    icon: Hashnode,
    colors: { text: "#2563eb" },
    copyTemplate: "🌐 Mis publicaciones en {name} ➭ {url}"
  },
] as const

export default socialmedia
