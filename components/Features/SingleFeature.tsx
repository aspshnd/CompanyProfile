import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {

  const { icon, title, paragraph, listItems } = feature;
  
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-justify mb-4">
          {paragraph}
        </p>
        
        {listItems && listItems.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-sm font-medium text-body-color text-justify pr-[10px]">
            {listItems.map((item, index) => (
              <li key={index} className="marker:text-primary">
                <span className="ml-1 text-base text-body-color dark:text-body-color-dark">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SingleFeature;