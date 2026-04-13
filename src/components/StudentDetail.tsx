import { Student } from "@/data/students";

interface StudentDetailProps {
  student: Student;
}

const StudentDetail = ({ student }: StudentDetailProps) => {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-[2fr_1.5fr_1.5fr] gap-1 p-1">
      {/* Row 1: Showreel spanning both columns */}
      <div className="col-span-2 bg-black overflow-hidden rounded-sm">
        {student.showreel ? (
          <video
            src={student.showreel}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <span className="text-muted-foreground text-xs">Showreel</span>
          </div>
        )}
      </div>

      {/* Row 2 Left: Bio + Portfolio Link */}
      <div className="bg-secondary rounded-sm p-3 flex flex-col justify-between overflow-hidden">
        <p className="text-foreground text-[0.65rem] leading-tight line-clamp-6 mb-2">
          {student.bio}
        </p>
        <a
          href={student.portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block self-start px-3 py-1.5 bg-primary text-primary-foreground text-[0.6rem] font-bold rounded-full transition-colors hover:bg-primary/80"
          style={{ fontFamily: "'Comfortaa', cursive" }}
        >
          Portfolio Link
        </a>
      </div>

      {/* Row 2 Right: Enlarged portrait with name */}
      <div className="relative bg-black overflow-hidden rounded-sm">
        <img
          src={student.foto}
          alt={student.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5">
          <p className="text-foreground text-xs font-bold" style={{ fontFamily: "'Comfortaa', cursive" }}>
            {student.name}
          </p>
        </div>
      </div>

      {/* Row 3: bild1 and bild2 */}
      <div className="bg-black overflow-hidden rounded-sm">
        <img
          src={student.bild1}
          alt={`${student.name} - Work 1`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-black overflow-hidden rounded-sm">
        <img
          src={student.bild2}
          alt={`${student.name} - Work 2`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StudentDetail;
