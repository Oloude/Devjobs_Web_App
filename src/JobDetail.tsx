import { LuDot } from "react-icons/lu";

type JobDetailProps = {
  jobDetail: {
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
  };
};

function JobDetail({ jobDetail }: JobDetailProps) {
  return (
    <section className="bg-white dark:bg-veryDarkBlue flex flex-col gap-6 px-4 py-6 rounded-md md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-darkGrey text-body">
            {jobDetail.postedAt} ago
          </span>
          <div className="flex items-end gap-1 text-darkGrey text-body">
            <LuDot className="w-5 h-5" /> {jobDetail.contract}
          </div>
        </div>
        <h3 className="text-h3 md:text-h1 text-veryDarkBlue font-bold dark:text-white">
          {jobDetail.position}
        </h3>

        <p className="text-h4 font-bold text-blue">{jobDetail.location}</p>
      </div>
      <button className="rounded-md w-full md:w-auto px-5 h-12 flex items-center justify-center text-white bg-blue text-body font-semibold">Apply Now</button>
     </div>
      <p className="text-darkGrey text-body">{jobDetail.description}</p>
      <div className="flex flex-col gap-7">
        <h3 className="text-h3 text-veryDarkBlue dark:text-white font-bold">Requirements</h3>
        <p className="text-darkGrey text-body">{jobDetail.requirements.content}</p>
        <ul className="flex flex-col gap-2 list-disc marker:text-blue list-inside ">
            {
                jobDetail.requirements.items.map(item => <li key={item} className="text-darkGrey text-body">{item}</li>)
            }
        </ul>
      </div>
      <div className="flex flex-col gap-7">
        <h3 className="text-h3 text-veryDarkBlue dark:text-white font-bold">What You Will Do</h3>
        <p className="text-darkGrey text-body">{jobDetail.role.content}</p>
        <ol className="flex flex-col gap-2 list-decimal marker:text-blue list-inside ">
            {
                jobDetail.role.items.map(item => <li key={item} className="text-darkGrey text-body">{item}</li>)
            }
        </ol>
      </div>
    </section>
  );
}

export default JobDetail;
