import { Hero, Logo, Latest } from "@/components/Home";

import { latests } from "@/data/latests";

const Home = () => {
  return (
    <>
      <Logo />
      <Hero />
      <Latest title="Latest News/Events" data={latests} />
      <Latest title="Latest Blogs" data={latests} />
    </>
  );
};

export default Home;
