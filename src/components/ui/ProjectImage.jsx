import { ImageIcon } from "lucide-react";
import { useState } from "react";

export default function ProjectImage({ src, alt, projectNumber }) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      {!hasError ? (
        <img
          src={imageSrc}
          alt={alt}
          onError={() => setHasError(true)}
          className="aspect-video w-full object-cover object-top"
        />
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 px-4 text-center text-gray-400">
          <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
          <p className="text-xs leading-relaxed md:text-sm">
            Project {projectNumber} 이미지
            <br />
            <span className="text-gray-400">
              public/images/project-{projectNumber}.png
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
