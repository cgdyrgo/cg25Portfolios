import { Student } from "@/data/students";
import StudentDetail from "./StudentDetail";

interface MobileModalProps {
  student: Student;
  onClose: () => void;
}

const MobileModal = ({ student, onClose }: MobileModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal content with ~10% margin */}
      <div
        className="relative z-10 w-[80%] h-[80%] max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <StudentDetail student={student} />
      </div>
    </div>
  );
};

export default MobileModal;
