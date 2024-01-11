import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'



export const pageLinks = [
    {id:1, href: '#home', text:'home'},
    {id:2, href: '#about', text:'about'},
    {id:3, href: '#services', text:'services'},
    {id:4, href: '#tour', text:'tour'},

]
export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},

]

export const services =[
    {
    id:1,
    icon:'fas fa-wallet fa-fw' ,
    title:'saving money',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    },
     {
    id:2,
    icon:'fas fa-tree fa-fw' ,
    title:'endless hiking',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    },
     {
    id:3,
    icon:'fas fa-socks fa-fw' ,
    title:'amazing comfort',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    },
]

export const tours = [
    {
        id:1,
        image: tour1,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
        location:'china',
        duration: 6,
        cost: 2100
    },
    {
        id:2,
        image:tour2,
        date:'october 26th, 2022',
        title:'Best of Java',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
        location:'indonesia',
        duration: 10,
        cost: 5100
    },
    {
        id:3,
        image:tour3,
        date:'september 21st, 2024',
        title:'Explore hong cong ',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
        location:'hong cong',
        duration: 11,
        cost: 2600
    },
    {
        id:4,
        image:tour4,
        date:'january 21st, 2024',
        title:'Explore kenya ',
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
        location:'kenya',
        duration: 20,
        cost: 3200
    },
]