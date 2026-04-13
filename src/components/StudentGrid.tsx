import { getGridCells, LOGO_CELL_COUNT } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentGridProps {
  activeIndex: number | null;
  onStudentClick: (index: number) => void;
}

const StudentGrid = ({ activeIndex, onStudentClick }: StudentGridProps) => {
  const cells = getGridCells();

  return (
    <div className="w-full h-full grid grid-cols-5 grid-rows-6 gap-[2px] bg-black p-[2px]">
      {cells.map((cell, i) => {
        if (cell.type === "student") {
          return (
            <div key={`student-${cell.index}`} className="aspect-[3/4] min-h-0 min-w-0">
              <StudentCard
                student={cell.student}
                isActive={activeIndex === cell.index}
                onClick={() => onStudentClick(cell.index)}
              />
            </div>
          );
        }
        if (cell.type === "logo") {
          return (
            <div
              key="logo"
              className={`col-span-${LOGO_CELL_COUNT} flex items-center justify-center bg-black`}
              style={{ gridColumn: `span ${LOGO_CELL_COUNT}` }}
            >
              <span
                className="text-foreground text-lg font-bold tracking-widest opacity-60"
                style={{ fontFamily: "'Comfortaa', cursive" }}
              >
                CG25 PORTFOLIOS
              </span>
            </div>
          );
        }
        // empty
        return <div key={`empty-${i}`} className="bg-black" />;
      })}
    </div>
  );
};

export default StudentGrid;
