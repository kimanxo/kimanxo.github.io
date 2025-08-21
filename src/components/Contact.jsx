import React from 'react'
import mail from "./../assets/mail.svg"
import copy from "./../assets/copy.png"
import phone from "./../assets/phone.svg"
import telegram from "./../assets/telegram.svg"
import link from "./../assets/link.svg"
const Contact = () => {

const handleCopy = (what) => {
    const what2write = document.getElementById(what).textContent;
    navigator.clipboard.writeText(what2write);
    alert(`${what} copied to clipboard!`);

};

return (
  <section className='flex flex-col items-center justify-center gap-2 p-4'>
    <article className="flex items-center justify-center gap-4">
      <img src={mail} alt="mail" />
      <p id="email" className="font-bold text-[#030712] dark:text-[#D1D5DB]">
        kimanxo@yandex.ru
      </p>
      <img
        src={copy}
        alt="copy"
        className="cursor-pointer"
        onClick={() => handleCopy("email")}
      />
    </article>
    <article className="flex items-center justify-center gap-4">
      <img src={telegram} alt="telegram" className="w-12" />
      <p id="telegram" className="font-bold text-[#030712] dark:text-[#D1D5DB]">
        Ismail on Telegram !
      </p>
      <a href="https://t.me/kimanxo" target="_blank" rel="noopener noreferrer">
        <img src={link} alt="link" className="cursor-pointer" />
      </a>
    </article>
    <article className="flex items-center justify-center gap-4">
      <img src={phone} alt="phone" />
      <p id="phone" className="font-bold text-[#030712] dark:text-[#D1D5DB]">
        +Two-13-77-eight-66-9-One-9-Four
      </p>
      <img
        src={copy}
        alt="copy"
        className="cursor-pointer"
        onClick={() => handleCopy("phone")}
      />
    </article>
  </section>
);
}

export default Contact