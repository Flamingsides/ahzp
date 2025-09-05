import Card from "../Components/Card/Card";

interface Props {
  theme: string;
}

function HomepageCards({ theme }: Props) {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 100)
      document.getElementById("homepage-cards")!.style.transform = "none";
  });

  return (
    <div id="homepage-cards" className="homepage-cards container">
      <div className="row">
        <div className="col">
          <Card
            theme={theme}
            bgLight='url("/assets/oil-plant-bg.jpg")'
            bgDark='url("/assets/oil-plant-bg-night-lights.jpg")'
            title="Engineering"
            desc="AHZ Professionals Sdn Bhd is an emerging Engineering Software
          Applications Development, Implementation and Training resource in the
          industrial sectors across Malaysia. The company believes in innovation
          and usage of the latest technology methods to excel in the field of
          Industrial Automation, Instrumentation & Control Systems."
            link="/Engineering"
            linkText="Explore Engineering!"
          ></Card>
        </div>
        <div className="col">
          <Card
            theme={theme}
            bgLight='url("/assets/house-bg.jpg")'
            bgDark='url("/assets/oil-plant-bg.jpg")'
            title="Architecture"
            desc="AHZP prides itself for its diversified architectural services, lead by leading professionals, in areas of interioir design, town planning, construction, house renovation, etc. We have compelted successful projects in multiple countries with clients ranging from casual to professional. We prioritise ergonomic designs factoring in the 'Human-Environment Interaction'"
            link="/Architecture"
            linkText="Explore Architecture!"
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default HomepageCards;
