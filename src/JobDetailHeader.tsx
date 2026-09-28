type HeaderProps = {
    company : string; website : string; logo : string; backgroundColor : string;
}

function JobDetailHeader({company, website, logo, backgroundColor} : HeaderProps) {
  return (
    <div className="bg-white dark:bg-veryDarkBlue rounded-md flex flex-col items-center justify-center relative mt-6.25 w-full h-51.25 gap-5 md:h-35 md:flex-row md:mt-0 md:justify-start md:pr-12">
        <div className="w-12.5 h-12.5 rounded-xl flex items-center justify-center left-1/2 -transalte-x-1/2 -top-6.25 absolute md:static md:transalate-x-0 md:top-0 md:left-0 md:w-35 md:h-35 md:rounded-l-md md:rounded-r-none" style={{backgroundColor :backgroundColor}}>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center md:items-start md:flex-1">
        <h1 className="text-h3 text-veryDarkBlue dark:text-white font-bold md:text-h2">{company}</h1>
        <span className="text-body text-darkGrey">{website}</span>
      </div>
      <div className="w-37 h-12 rounded-md bg-lightViolet/20 dark:bg-violet/20 flex items-center justify-center text-body text-blue font-bold">Company Site</div>
    </div>
  )
}

export default JobDetailHeader