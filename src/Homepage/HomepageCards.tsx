import Card from "../Components/Card/Card";

interface Props {
  theme: string;
}

function HomepageCards({ theme }: Props) {
  return (
    <div className="homepage-cards container">
      <div className="row">
        <div className="col">
          <Card
            theme={theme}
            bgLight='url("/assets/oil-plant-bg-night-lights.jpg")'
            bgDark='url("/assets/oil-plant-bg.jpg")'
            title="Engineering"
            desc="TODO"
            link="/Engineering"
            linkText="Explore Engineering!"
          ></Card>
        </div>
        <div className="col">
          <Card
            theme={theme}
            bgLight='url("/assets/oil-plant-bg-night-lights.jpg")'
            bgDark='url("/assets/oil-plant-bg.jpg")'
            title="Architecture"
            desc="TODO"
            link="/Architecture"
            linkText="Explore Architecture!"
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default HomepageCards;
