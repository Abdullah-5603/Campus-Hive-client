// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper/core';
// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css';

// SwiperCore.use([Swiper.Navigation, Swiper.Autoplay]);

// const Review = () => {
//     const { data: reviews = [] } = useQuery({
//         queryKey: ['candidate'],
//         queryFn: async () => {
//             const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/reviews`);
//             return response.data;
//         },
//     });

//     return (
//         <div className='w-full'>
//             <p className='text-center md:text-2xl text-xl font-bold mt-5 md:mt-10'>Popular Colleges</p>
//             <div className='w-1/4 md:w-1/12 bg-cyan-500 h-[3px] mx-auto mb-4 md:mb-6 mt-1'></div>
//             <Swiper autoplay={{ delay: 4000 }} navigation={true} loop={true} className="mySwiper">
//                 {reviews.map((review) => (
//                     <SwiperSlide  key={review._id}>
//                         <div className="flex flex-col items-center mx-24 my-16">
//                             <p className="py-8">{review.review}</p>
//                             <Rating style={{ maxWidth: 180 }} value={review.ratings} readOnly />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Review;
