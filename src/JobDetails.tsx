import { useParams } from "react-router"
import JobDetail from "./JobDetail"
import JobDetailHeader from "./JobDetailHeader"
import data from '../src/data.json'


function JobDetails() {
    // let params = useParams()
    // let id = params.id
    const { id } = useParams<{ id: string }>();

    let job =   data.find(job => job.id === Number(id)) ?? data[0]

  return (
    <section className="flex flex-col gap-15">
        <div className="flex flex-col gap-6 -mt-12.5 px-4 max-w-182.5 mx-auto">
            <JobDetailHeader company={job?.company} website={job?.website} logo={job?.logo} backgroundColor={job?.logoBackground}/>
        <JobDetail jobDetail={job}/>
        </div>
        <footer className="bg-white  md:px-12 dark:bg-veryDarkBlue">
            <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between max-w-182.5 mx-auto">
            <div className="md:flex flex-col gap-3 hidden">
                <h3 className="text-h3 font-bold text-veryDarkBlue dark:text-white">{job.position}</h3>
                <span className="text-body text-darkGrey">So Digital Inc.</span>

            </div>
            <button className="rounded-md w-full px-6 md:w-auto h-12 flex items-center justify-center text-white bg-blue text-body font-semibold">Apply Now</button>
            </div>
        </footer>
        
    </section>
  )
}

export default JobDetails