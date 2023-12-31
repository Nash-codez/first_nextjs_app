import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br />
        <span className="blue_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        This is an open-source AI promting tool for modern the world to discover, create and share creative prompts.
      </p>

      <Feed />
    </section>
  )
}

export default Home