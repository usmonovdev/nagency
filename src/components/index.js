import Container from "./Container.vue"
import NavbarLarge from "./navbar/NavbarLarge.vue"
import NavbarSmall from "./navbar/NavbarSmall.vue"
import FooterBottom from "./FooterBottom.vue"

// HOME 
// FIRST COMPONENTS
import HomeFirstIndex from "./home/main/Index.vue"
import HomeSecondIndex from "./home/service/Index.vue"
import HomeThirdIndex from "./home/works/Index.vue"
import HomeFourthIndex from "./home/team/Index.vue"
import HomeFifthIndex from "./home/solutions/Index.vue"

// UI COMPONENTS
import PinkButton from "../ui-components/PinkButton.vue"
import BlueButton from "../ui-components/BlueButton.vue"
import TitleInfo from "../ui-components/TitleInfo.vue"
import TitleName from "../ui-components/TitleName.vue"

export default [
    Container, NavbarLarge, NavbarSmall, FooterBottom, PinkButton, BlueButton, HomeFirstIndex, HomeSecondIndex, 
    TitleInfo, TitleName, HomeThirdIndex, HomeFourthIndex, HomeFifthIndex
]