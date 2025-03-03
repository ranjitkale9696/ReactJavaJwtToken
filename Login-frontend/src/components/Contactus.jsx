import Slider from "react-slick"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Add this style block
const forcedColorsStyle = `
  @media (forced-colors: active) {
    .slider-arrow {
      forced-color-adjust: none;
      background-color: ButtonFace;
      color: ButtonText;
    }
    .star-icon {
      forced-color-adjust: none;
      color: ButtonText;
    }
  }
`

// Helper function to convert YouTube watch URLs to embed URLs
const getYouTubeEmbedUrl = (url) => {
  const videoId = url.split("v=")[1]
  return `https://www.youtube.com/embed/${videoId}`
}

const Contactus = () => {
  const stories = [
    {
      videoUrl: "https://www.youtube.com/watch?v=HHoSZ4S55Ws",
      title: "INTRODUCTION TO LMS",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=HHoSZ4S55Ws",
      title: "Interview Questions for LMS",
    },
    // Add more stories here
  ]

  const reviews = [
    {
      name: "Maya Sharma",
      message:
        "I've been attending this university for the past three years, and I have never been disappointed with the level of education, support, and resources available. Each professor is brilliant and well-versed in their field.",
      rating: 5,
    },
    {
      name: "Rohan Patel",
      message:
        "The care and attention I received at this university were exceptional. The professors and staff went above and beyond to ensure I was comfortable and well-supported.",
      rating: 5,
    },
    {
      name: "Sarah Khan",
      message:
        "Studying here has been a fantastic experience. The faculty and staff are always ready to help, and the academic resources are top-notch. I couldn't have asked for a better place to learn.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      message:
        "I've learned so much from this university. The professors are passionate and knowledgeable, and the staff is incredibly supportive. It's a great environment for personal and academic growth.",
      rating: 5,
    },
  ]

  // Custom arrow components for the slider
  const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        // className={`${className} absolute right-2 top-1/2 z-10 cursor-pointer slider-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <ChevronRight className="w-8 h-8 text-orange-700 bg-white rounded-full p-1 absolute right-2 top-1/2 z-10 cursor-pointer" />
      </div>
    )
  }

  const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        // className={`${className} absolute left-2 top-1/2 z-10 cursor-pointer slider-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <ChevronLeft className="w-8 h-8 text-orange-700 bg-white rounded-full p-1 absolute left-2 top-1/2 z-10 cursor-pointer" />
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  }

  return (
    <>
      <style>{forcedColorsStyle}</style>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {/* Left Section - Student Experience Stories */}
          <div className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 p-4">
            <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">Student Experience Stories</h2>
            <p className="text-zinc-50 text-center mb-6">Hear directly from our students at LMS</p>
            <Slider {...settings}>
              {stories.map((story, index) => (
                <div key={index} className="px-2">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={getYouTubeEmbedUrl(story.videoUrl)}
                      className="w-full h-full"
                      title={story.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-zinc-50 text-center mt-3 font-medium">{story.title}</h3>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Section - Student Speaks */}
          <div className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 p-4">
            <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">Student Speaks</h2>
            <p className="text-zinc-50 text-center mb-6">Are you getting struggle to find your right course?</p>
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="px-2">
                  <div className="bg-sky-50 p-8 rounded-xl">
                    <div className="space-y-4">
                      <h3 className="text-2xl text-red-700 font-semibold text-center">{review.name}</h3>
                      <p className="text-gray-700 text-center leading-relaxed">{review.message}</p>
                      <div className="flex justify-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 star-icon" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus




// import Slider from "react-slick"
// import { ChevronLeft, ChevronRight, Star } from "lucide-react"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// // Helper function to convert YouTube watch URLs to embed URLs
// const getYouTubeEmbedUrl = (url) => {
//   const videoId = url.split("v=")[1]
//   return `https://www.youtube.com/embed/${videoId}`
// }

// const Contactus = () => {
//   const stories = [
//     {
//       videoUrl: "https://www.youtube.com/watch?v=HHoSZ4S55Ws",
//       // videoUrl: "https://www.youtube.com/watch?v=UdRza_PDCeU",
//       title: "INTRODUCTION TO LMS",
//     },
//     {
//       videoUrl: "https://www.youtube.com/watch?v=HHoSZ4S55Ws",
//       title: "Interview Questions for LMS",
//     },
//     // Add more stories here
//   ]

//   const reviews = [
//     {
//       name: "Maya Sharma",
//       message:
//         "I've been attending this university for the past three years, and I have never been disappointed with the level of education, support, and resources available. Each professor is brilliant and well-versed in their field.",
//       rating: 5,
//     },
//     {
//       name: "Rohan Patel",
//       message:
//         "The care and attention I received at this university were exceptional. The professors and staff went above and beyond to ensure I was comfortable and well-supported.",
//       rating: 5,
//     },
//     {
//       name: "Sarah Khan",
//       message:
//         "Studying here has been a fantastic experience. The faculty and staff are always ready to help, and the academic resources are top-notch. I couldn't have asked for a better place to learn.",
//       rating: 5,
//     },
//     {
//       name: "Arjun Mehta",
//       message:
//         "I've learned so much from this university. The professors are passionate and knowledgeable, and the staff is incredibly supportive. It's a great environment for personal and academic growth.",
//       rating: 5,
//     },
//   ]

//   // Custom arrow components for the slider
//   const NextArrow = (props) => {
//     const { className, style, onClick } = props
//     return (
//       <div
//         className={`${className} absolute right-2 top-1/2 z-10 cursor-pointer`}
//         style={{ ...style }}
//         onClick={onClick}
//       >
//         <ChevronRight className="w-8 h-8 text-orange-700 bg-white rounded-full p-1" />
//       </div>
//     )
//   }

//   const PrevArrow = (props) => {
//     const { className, style, onClick } = props
//     return (
//       <div
//         className={`${className} absolute left-2 top-1/2 z-10 cursor-pointer`}
//         style={{ ...style }}
//         onClick={onClick}
//       >
//         <ChevronLeft className="w-8 h-8 text-orange-700 bg-white rounded-full p-1" />
//       </div>
//     )
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="flex flex-col md:flex-row md:justify-center gap-8">
//         {/* Left Section - Student Experience Stories */}
//         <div className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 p-4">
//           <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">Student Experience Stories</h2>
//           <p className="text-zinc-50 text-center mb-6">Hear directly from our students at LMS</p>
//           <Slider {...settings}>
//             {stories.map((story, index) => (
//               <div key={index} className="px-2">
//                 <div className="aspect-video rounded-lg overflow-hidden">
//                   <iframe
//                     src={getYouTubeEmbedUrl(story.videoUrl)}
//                     className="w-full h-full"
//                     title={story.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <h3 className="text-zinc-50 text-center mt-3 font-medium">{story.title}</h3>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Right Section - Student Speaks */}
//         <div className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 p-4">
//           <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">Student Speaks</h2>
//           <p className="text-zinc-50 text-center mb-6">Are you getting struggle to find your right course?</p>
//           <Slider {...settings}>
//             {reviews.map((review, index) => (
//               <div key={index} className="px-2">
//                 <div className="bg-sky-50 p-8 rounded-xl">
//                   <div className="space-y-4">
//                     <h3 className="text-2xl text-red-700 font-semibold text-center">{review.name}</h3>
//                     <p className="text-gray-700 text-center leading-relaxed">{review.message}</p>
//                     <div className="flex justify-center gap-1">
//                       {[...Array(review.rating)].map((_, i) => (
//                         <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contactus



