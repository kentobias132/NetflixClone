
import DetailsComponent from "./component/detailsComponent";
import FaqContainer from "./component/faqcontainer";
import Footer from "./component/footer";

export default function Home() {

    return (
        <div>
            <FaqContainer />
            <Footer />
        </div>
    )
}

export default function Home() {
  return (
    <div className=" h-screen">
      <div className="relative h-full">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url(bg-image.png)",
            zIndex: -1,
          }}
        >
          <div className="absolute inset-0 mx-14 my-3">
            <div className="flex justify-between">
              <img className="w-15 h-12" src="Netflix_Logo.png" />
              <button className="bg-[#e50914] text-white rounded-md my-1 px-4 font-medium">
                Sign In
              </button>
            </div>
            <div className="text-white flex justify-center items-center h-full text-center">
              <div className="flex flex-col items-center">
                <h2 className="font-extrabold text-3xl">
                  Unlimited movies, TV shows, and more
                </h2>
                <h3 className="font-normal text-xl my-6">
                  Watch anywhere. Cancel anytime.
                </h3>
                <h3 className="font-normal text-lg">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className=" my-4 mx-4">
                  <input
                    type="text"
                    className="mr-3 mb-4 sm:mb-0 py-3 px-14 bg-black opacity-50 border border-[#a39f9e] text-[#a39f9e] w-full sm:w-7/12 "
                    placeholder="Email address"
                    name=""
                    id=""
                  />
                  <input
                    type="button"
                    placeholder="Get Started "
                    className="bg-[#e50914] py-3 px-5 font-bold   w-4/12"
                    value="Get Started "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsComponent
        heading="Enjoy on your TV"
        desc="  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more."
        img="frame1.png"
      />
      <DetailsComponent
        heading="Download your shows to watch offline"
        desc="Save your favorites easily and always have something to watch."
        img="frame3.png"
        flip={true}
      />
      <DetailsComponent
        heading="Watch everywhere"
        desc="  Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img="Frame 4.png"
      />
      <DetailsComponent
        heading="Create profiles for kids"
        desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img="frame5.png"
        flip={true}
      />
    </div>
  );
}
