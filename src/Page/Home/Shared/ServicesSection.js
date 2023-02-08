import React from 'react';
import ServiceCard from '../../../Components/Card/ServiceCard';
import HeaderName from '../../../Components/Utilities/HeaderName';

const ServicesSection = () => {

    const services = [
        {
            name:'Guarantee',
            desc: 'We are provide every product one year guarantee and always recheck the product before accept delivery confirmation.',
            serviceIcon: 'https://i.ibb.co/hXf0j9y/100-guarantee.png'
        },
        {
            name:'Delivery',
            desc: 'Our delivery time very impressive. as far as soon our team delivery your product with safely. delivery charge depending on product base and charge very light amount.',
            serviceIcon: 'https://i.ibb.co/Rjqhvt0/delivery-service.png'
        },
        {
            name:'Discount',
            desc: 'Only We are provide 95% product very immpressive discount. You can get expensive product 40% discounted chance. YAY!',
            serviceIcon: 'https://i.ibb.co/hXf0j9y/100-guarantee.png'
        },
        {
            name:'Trusted Seller',
            desc: "We are belived that trusted platform and mans can be make a Big beatiful environment. that's why our team never spam any ours customer.",
            serviceIcon: 'https://i.ibb.co/NYxXYfc/trusted.png'
        },
    ];

    return (
        <section className={`m-[5%]`}>

            <HeaderName>Our Services</HeaderName>

            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-center`}>
                {
                    services.map((elm,id) => <ServiceCard key={id} servName={elm.name} servDesc={elm.desc} servImg={elm.serviceIcon}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default ServicesSection;