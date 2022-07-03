import Time from "./Time";
import Title from "./Title";
import Type from "./Type";
import Duration from "./Duration";
import Image from "./Image";
import Isunseen from "./Isunseen";
import Direct from "./Direct";

const Section = ({
  time = "",
  title = "",
  type = "",
  duration = "",
  image = "",
  isUnseen,
  direct,
}) => {
  return (
    <>

      <section className="container">
          <div className="program_content">
              <div className="left">
        <Time time={time} />
        <Image image={image} />
        </div>
        <div className="rigth">
        <Title title={title} />
        <Type type={type} />
        <div className="little">
        <Duration duration={duration} />
        <Isunseen isUnseen={isUnseen} />
        <Direct direct={direct} />
        </div>
        </div>
       
        </div>
      </section>
    </>
  );
};

export default Section;
