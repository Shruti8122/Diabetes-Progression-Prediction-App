import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

function Home() {
    return (
        <div className="py-16 px-6">
            <Hero/>

            <Features/>

            <HowItWorks/>
        </div>
    )
}

export default Home; 