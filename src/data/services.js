import Plan from "@/assets/icon/plan.svg"
import Thinking from "@/assets/icon/thinking.svg"
import SEO from "@/assets/icon/filter.svg"
import Business from "@/assets/icon/business.svg"
import Brand from "@/assets/icon/brand.svg"
import Development from "@/assets/icon/development.svg"

// ADV PHOTO
import adv_plan from "@/assets/image/service/service-1.jpg"
import adv_thinking from "@/assets/image/service/service-2.jpg"
import adv_seo from "@/assets/image/service/service-3.jpg"
import adv_business from "@/assets/image/service/service-4.jpg"
import adv_brand from "@/assets/image/service/service-5.jpg"
import adv_team from "@/assets/image/service/service-6.jpg"

const service = [
    {
        name: "Consultant Plan",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        photo: `${Plan}`,
        adv_photo: adv_plan,
        left: true,
        id: 1,
    },
    {
        name: "Design Thingking",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        photo: `${Thinking}`,
        adv_photo: adv_thinking,
        left: false,
        id: 2,
    },
    {
        name: "SEO Marketing",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        photo: `${SEO}`,
        adv_photo: adv_seo,
        left: true,
        id: 3,
    },
    {
        name: "Business Advisor",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        photo: `${Business}`,
        adv_photo: adv_business,
        left: false,
        id: 4,
    },
    {
        name: "Brand Personal",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        photo: `${Brand}`,
        adv_photo: adv_brand,
        left: true,
        id: 5,
    },
    {
        name: "Development",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        photo: `${Development}`,
        adv_photo: adv_team,
        left: false,
        id: 6,
    },
];

export default service