import { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  isActive: boolean;
  onClick: () => void;
}

const StudentCard = ({ student, isActive, onClick }: StudentCardProps) => {
  return (
    <div
      className="relative w-full h-full cursor-pointer group bg-black overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full">
        <img
          src={student.foto}
          alt={student.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-2 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <p className="text-foreground text-xs font-bold truncate" style={{ fontFamily: "'Comfortaa', cursive" }}>
          {student.name}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
