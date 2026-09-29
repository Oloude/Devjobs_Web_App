import JobContainer from "./JobContainer";
import data from "../src/data.json";
import Filter from "./Filter";

function Homepage() {
  return (
    <section className="flex flex-col gap-6 px-4 max-w-277.5 mx-auto w-full -mt-10">
      <Filter />
      <JobContainer jobs={data} />
    </section>
  );
}

export default Homepage;
