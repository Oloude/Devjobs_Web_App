import Job from "./Job";

type JobsProps =  {jobs :{
 id: number;
 company: string;
 logo: string;
 logoBackground: string;
 position: string;
 postedAt: string;
 contract: string;
 location: string;
 website: string;
 apply: string;
 description: string;
 requirements: {
 content: string;
 items: string[];
 };
 role: {
 content: string;
 items: string[];
 };
}[]}

function JobContainer({jobs} : JobsProps) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {jobs.map(job  => <Job key={job.id} job={job}/>)}
  </div>;
}

export default JobContainer;
