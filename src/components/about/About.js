import { HiArrowRight } from "react-icons/hi";
import { bannerImg } from "../../assets/index";



function About() {
    return (


        <div className="w-full px-12  py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group" id="about" >
            <div className=" overflow-y-hidden">
                <div className="flex h-full flex-col gap-6 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">

                    <div className=" ">


                        <div className=" text-center">
                            <img
                                className="w-[30px] h-[40px] lgl:w-[200px] lgl:h-[100px] mx-auto"
                                src={bannerImg}
                                alt="bannerImg"
                            />
                            <h2 className="text-4xl font-bold">
                                Munirul Islam
                            </h2>
                            <span className="text-xl text-designColor"> Web Developer</span>
                        </div>

                        <h2 className="text-3xl text-designColor font-bold">
                            About Me
                        </h2>
                        <h2 className=" ">
                            I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic and goal-oriented, and I always work with an end goal in mind. Over the past years, I created 100s of websites for my clients. I pride myself on doing quality work and maintaining excellent communication. I am  work with  ReactJS, JavaScript, jquery, Html, Css, Tailwind,   bootstrap,
                        </h2>
                        <HiArrowRight className="text-designColor text-6xl font-bold pt-8" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;