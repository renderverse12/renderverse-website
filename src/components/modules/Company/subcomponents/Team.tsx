import Page from "@/components/shared/Page";
import { Button } from "@/components/ui/button";
import { images } from "@/utils/constants";

const Team = () => {
  return (
    <Page styling="bg-[#111]">
      <section className="py-20 bg-[#111]">
        <h2
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-5xl font-bold text-center text-gray-200 leading-tight my-8 "
        >
          The Team
        </h2>

        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center">
            <img src={images.Team1} alt="" className="h-96" />
            <p className="font-bold text-lg text-gray-200">Syed Maaz</p>
            <p className="font-bold text-sm text-gray-300/80">Founder & CEO</p>
            <a
              href="https://www.linkedin.com/in/syed-maaz-hussaini-666b40343/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="link"
                className="flex items-center gap-2 text-gray-300/90"
              >
                <img src={images.LinkedIn} alt="LinkedIn" className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img src={images.Team2} alt="" className="h-96" />
            <p className="font-bold text-lg text-gray-200">Haseeb</p>
            <p className="font-bold text-sm text-gray-300/80">
              Lead Visualizer
            </p>
            <a
              href="https://www.linkedin.com/in/haseeb-hussaini-9a8485222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="link"
                className="flex items-center gap-2 text-gray-300/90"
              >
                <img src={images.LinkedIn} alt="LinkedIn" className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img src={images.Team3} alt="" className="h-96" />
            <p className="font-bold text-lg text-gray-200">Bilal</p>
            <p className="font-bold text-sm text-gray-300/80">Partner</p>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Team;
