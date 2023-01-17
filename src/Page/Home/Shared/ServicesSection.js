import React from 'react';
import ServiceCard from '../../../Components/Card/ServiceCard';
import ServiceHeader from '../../../Components/Utilities/ServiceHeader';

const ServicesSection = () => {

    const services = [
        {
            name:'Guarantee',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur sed, quos corrupti autem. Cum quo autem',
            serviceIcon: 'https://i.ibb.co/hXf0j9y/100-guarantee.png'
        },
        {
            name:'Delivery',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur sed, quos corrupti autem. Cum quo autem',
            serviceIcon: 'https://i.ibb.co/Rjqhvt0/delivery-service.png'
        },
        {
            name:'Discount',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur sed, quos corrupti autem. Cum quo autem',
            serviceIcon: 'https://i.ibb.co/hXf0j9y/100-guarantee.png'
        },
        {
            name:'Trusted Seller',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam aspernatur sed, quos corrupti autem. Cum quo autem',
            serviceIcon: 'https://i.ibb.co/NYxXYfc/trusted.png'
        },
    ];

    return (
        <section className={`m-[5%]`}>

            <ServiceHeader>Our Services</ServiceHeader>

            <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 justify-center`}>
                {
                    services.map((elm,id) => <ServiceCard key={id} servName={elm.name} servDesc={elm.desc} servImg={elm.serviceIcon}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default ServicesSection;