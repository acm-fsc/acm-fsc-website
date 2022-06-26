import Hero from "@/components/home/hero";
import Latest from "@/components/home/latest";
import Logo from "@/components/home/logo";

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
