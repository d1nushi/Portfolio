            
const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
    
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/d1nushi">
            <img src="/github-icon.svg" alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/dinushi-wanniarachchi-98857a244/">
            <img src="/linkedin-icon.svg" alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default EmailSection;
