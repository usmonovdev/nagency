import Container from "./Container.vue"
import NavbarLarge from "./navbar/NavbarLarge.vue"
import NavbarSmall from "./navbar/NavbarSmall.vue"
import FooterBottom from "./FooterBottom.vue"

// HOME
import HomeFirstIndex from "./home/main/Index.vue"
import HomeSecondIndex from "./home/service/Index.vue"
import HomeThirdIndex from "./home/works/Index.vue"
import HomeFourthIndex from "./home/team/Index.vue"
import HomeFifthIndex from "./home/solutions/Index.vue"
import HomeSixtyIndex from "./home/projects/Index.vue"
import HomeSeventhIndex from "./home/testimonals/Index.vue"
import HomeEightyIndex from "./home/contact-us/Index.vue"

// ABOUT
import AboutFirstIndex from "./about/main/Index.vue"
import AboutSecondIndex from "./about/albert/Index.vue"
import AboutThirdIndex from "./about/data/Index.vue"
import AboutFourthIndex from "./about/visions/Index.vue"

// SERVICE
import ServiceFirstIndex from "./service/services/Index.vue"

// TESTIMONIALS
import TestimonialFirstIndex from "./testimonial/theySays/TheySays.vue"

// TEAM
import TeamFirstIndex from "./team/ourTeam/OurTeam.vue"
import TeamSecondIndex from "./team/join/Join.vue"
import TeamThirdIndex from "./team/send-cv/Send.vue"

// UI COMPONENTS
import PinkButton from "../ui-components/PinkButton.vue"
import BlueButton from "../ui-components/BlueButton.vue"
import TitleInfo from "../ui-components/TitleInfo.vue"
import TitleName from "../ui-components/TitleName.vue"
import BigNavigationText from "../ui-components/BigNavigationText.vue"
import SmallNavigationText from "../ui-components/SmallNavigationText.vue"

export default [
    Container, NavbarLarge, NavbarSmall, FooterBottom, PinkButton, BlueButton, HomeFirstIndex, HomeSecondIndex, 
    TitleInfo, TitleName, HomeThirdIndex, HomeFourthIndex, HomeFifthIndex, HomeSixtyIndex, HomeSeventhIndex,
    HomeEightyIndex, BigNavigationText, SmallNavigationText, AboutFirstIndex, AboutSecondIndex, AboutThirdIndex,
    AboutFourthIndex, ServiceFirstIndex, TestimonialFirstIndex, TeamFirstIndex, TeamSecondIndex, TeamThirdIndex
]