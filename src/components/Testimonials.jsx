import React from "react";
import Testimonial from "./Testimonial";
import amine from "../assets/amine.png";
import hanaa from "../assets/hanaa.png";

const Testimonials = () => {
  return (
    <section className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      <Testimonial
        img={amine}
        name="Amine Djoudi"
        role="Lead Designer"
        testimonial="“I’ve had the chance to work with Ismail, a highly skilled self-taught developer with an impressive grasp of a wide range of technologies. He’s  extremely reliable when it comes to deadlines—he treats them seriously and always delivers on time.”"
      />

      <Testimonial
        img={hanaa}
        name="Hanaa Ch."
        role="ENSIA Student"
        testimonial="“Ismail isn’t just a developer — he’s the kind of developer who can write clean code faster than most people can type their passwords. When it comes to cybersecurity, he’s the digital bodyguard you didn’t know you needed.”"
      />

      <Testimonial
        img={amine}
        name="Amine Djoudi"
        role="Lead Designer"
        testimonial="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"
      />

      <Testimonial
        img={amine}
        name="Amine Djoudi"
        role="Lead Designer"
        testimonial="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"
      />
    </section>
  );
};

export default Testimonials;
