
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LockKeyhole } from "lucide-react";

const AdminHeaderLink = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="text-gray-500 hover:text-journal-navy"
      onClick={() => navigate("/admin/login")}
    >
      <LockKeyhole className="mr-1 h-4 w-4" />
      Admin
    </Button>
  );
};

export default AdminHeaderLink;
