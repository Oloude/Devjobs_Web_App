import { LuDot } from "react-icons/lu";
import { useNavigate } from "react-router";

type JobProps = {job : {
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
}}

function Job({job} : JobProps) {
    const navigate = useNavigate()
  return (
    <section onClick={()=> navigate(`/${job.id}`)} className="bg-white dark:bg-veryDarkBlue rounded-md h-57 w-full flex flex-col justify-center relative gap-2 pl-8 pr-4 mt-6.25">
      <div className="w-12.5 h-12.5 rounded-xl flex items-center justify-center left-8 -top-6.25 absolute" style={{backgroundColor : job.logoBackground}}>
        <img src={job.logo} alt="" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-darkGrey text-body">{job.postedAt} ago</span>
        <div className="flex items-end gap-1 text-darkGrey text-body">
          <LuDot className="w-5 h-5" /> {job.contract}
        </div>
      </div>
      <h3 className="text-h3 text-veryDarkBlue font-bold dark:text-white">
       {job.position}
      </h3>
      <span className="text-darkGrey text-body">{job.company}</span>
      <p className="text-h4 font-bold text-blue mt-7">{job.location}</p>
    </section>
  );
}

export default Job;
