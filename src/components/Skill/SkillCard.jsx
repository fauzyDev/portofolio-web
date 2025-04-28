import React from "react";
import Image from "next/image";
import { Progress } from "@heroui/progress";

const SkillCard = ({ imgSrc, label, desc, progress, classes }) => {
  return (
    <li className={`flex items-center gap-3 mb-3 ring-1 ring-inset ring-sky-500 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ${classes}`}>
      <figure className="bg-zinc-700/50 flex items-center justify-center rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        {imgSrc && imgSrc ? <Image src={imgSrc} loading="lazy" width={32} height={32} alt="Skill Image" /> : null}
      </figure>
      <div className="max-w-md w-full">
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
        <div className="relative">
          <Progress
            color="primary"
            size="sm"
            classNames={{ track: "bg-gray-300 rounded-full" }}
            value={progress}
            aria-label="progress"
            showValueLabel={false} />
          <span className="absolute top-[-20px] right-0 text-sm text-white pr-2">
            {progress}%
          </span>
        </div>
      </div>
    </li>
  );
};

export default SkillCard;
