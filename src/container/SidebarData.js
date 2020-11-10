
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";


const SidebarData = [
    {
        title: "home",
        path: '/admin',
        icons: <AiFillHome />,
        cName: "nav-text"
    },

    {
        title: "Product",
        path: '/product',
        icons: <AiOutlineShoppingCart />,
        cName: "nav-text"
    },
    {
        title: "Team",
        path: '/team',
        icons: <IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Messages",
        path: '/messages',
        icons: <BsFillEnvelopeOpenFill />,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: '/reports',
        icons: <IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Support",
        path: '/support',
        icons: <BiHelpCircle />,
        cName: "nav-text"
    },
]

export default SidebarData