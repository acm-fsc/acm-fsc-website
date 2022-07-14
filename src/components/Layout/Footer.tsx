const footers = [
  {
    id: 1,
    title: "FAQ",
  },
  {
    id: 2,
    title: "Discord",
  },
  {
    id: 3,
    title: "Slack",
  },
  {
    id: 4,
    title: "FSC",
  },
];

const Footer = () => {
  return (
    <footer className="my-4 font-bold text-lg ">
      <div className="flex justify-evenly">
        {footers.map((footer) => (
          <div key={footer.id}>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-100">
              {footer.title}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-100">Copyright © 2022</div>
    </footer>
  );
};

export default Footer;
