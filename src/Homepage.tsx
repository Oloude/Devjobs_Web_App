import JobContainer from "./JobContainer"
import data from '../src/data.json'


function Homepage() {

  return (
    <section className="flex flex-col gap-6">
        <JobContainer jobs={data}/>
    </section>
  )
}

export default Homepage