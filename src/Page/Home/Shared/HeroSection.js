import React from 'react';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../Components/Button/PrimaryButton';
import ProdSlide from '../../../Components/Product-Slide/ProdSlide';
import LoadingSpinner from '../../../Components/Spinner/LoadingSpinner';
import CarouselWrapper from 'easy-carousel-stack';
import EmptyData from '../../../Components/Error/EmptyData';

const HeroSection = () => {

    const bgImage ={
        backgroundImage:`url("https://i.ibb.co/M6QgL9f/digital-global-connection-network-technology-background-1017-23324.webp")`,
               height:'100vh',
               width:'100%',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
    };

    const {bannerImages,isLoading} = useSelector(state => state.addtionalImgs);

    return (
        <section className={`m-[5%]`}>
            <div className={`flex flex-col md:flex-row gap-5 items-center`}>

                {/* Text Section */}
                <div className={`basis-1/2 order-2 md:order-none`}>
                    <h2 className={`text-3xl dark:text-whitePrimary font-bold font-mincho`}>Tech <span className={`text-bluePrimary`}>City</span></h2>
                    <h5 className={`my-5 text-xl md:text-2xl font-medium dark:text-whitePrimary`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, deserunt! Autem dolore quos ex quisquam necessitatibus iure ipsum minima maiores, possimus odio vel impedit voluptate nulla laboriosam dolorem animi? Quidem.</h5>
                    <PrimaryButton>See Product</PrimaryButton>
                </div>

                {/* Image Slider Section */}
                <div className={`basis-1/2 order-1 md:order-none`}>
                    {
                        isLoading ?

                        <LoadingSpinner center={true}></LoadingSpinner> :

                        !bannerImages?.length ?

                        <EmptyData></EmptyData>

                        : <CarouselWrapper itemName={`banner-product`} slideButton={true} loop={true} duration={2}>
                            {
                                bannerImages.map((elm,id) => {
                                    return <ProdSlide key={id} imgPath={elm}></ProdSlide>
                                })
                            }
                        </CarouselWrapper>
                    }
                </div>
            </div>
        </section>
    );
};

export default HeroSection;