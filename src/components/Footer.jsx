import React from "react";

const Footer = () => {
const currentYear = new Date().getFullYear();
return (
    <section className="flex flex-col items-center justify-center  mt-20 py-4">
        <article>
            <p>&copy; {currentYear} | Developed _ Deployed _ Maintained By Kimanxo</p>
        </article>
    </section>
);
};

export default Footer;
