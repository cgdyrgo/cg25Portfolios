import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import StudentGrid from "@/components/StudentGrid";
import StudentDetail from "@/components/StudentDetail";
import MobileModal from "@/components/MobileModal";
import { students } from "@/data/students";

const Index = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleStudentClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleCloseModal = () => {
    setActiveIndex(null);
  };

  if (isMobile) {
    return (
      <div className="w-screen h-screen bg-background overflow-hidden">
        <StudentGrid activeIndex={activeIndex} onStudentClick={handleStudentClick} />
        {activeIndex !== null && (
          <MobileModal student={students[activeIndex]} onClose={handleCloseModal} />
        )}
      </div>
    );
  }

  // Desktop: 50/50 split
  return (
    <div className="w-screen h-screen bg-background overflow-hidden flex">
      {/* Left panel: detail or empty */}
      <div className="w-1/2 h-full bg-background flex items-center justify-center">
        {activeIndex !== null ? (
          <div className="w-full h-full p-2">
            <StudentDetail student={students[activeIndex]} />
          </div>
        ) : null}
      </div>

      {/* Right panel: grid */}
      <div className="w-1/2 h-full">
        <StudentGrid activeIndex={activeIndex} onStudentClick={handleStudentClick} />
      </div>
    </div>
  );
};

export default Index;
