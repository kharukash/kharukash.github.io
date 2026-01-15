import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const ResumeModal = ({ open, onClose }: ResumeModalProps) => {
  const handleDownload = () => {
    // Create a link to download the resume
    // Replace this URL with actual resume file path when available
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ashish_Kharuk_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background">
        <DialogTitle className="sr-only">Resume</DialogTitle>
        
        {/* Header with buttons */}
        <div className="absolute top-0 right-0 z-10 flex items-center gap-2 p-4">
          <button
            onClick={handleDownload}
            className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            aria-label="Download resume"
          >
            <Download size={20} />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Resume Content */}
        <div className="w-full h-full pt-16 overflow-auto bg-secondary/30">
          {/* PDF Embed - Replace src with actual resume path */}
          <iframe
            src="/resume.pdf"
            className="w-full h-full min-h-[600px]"
            title="Resume"
          />
          
          {/* Fallback content if PDF doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center p-8 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">
                Resume preview will appear here.
              </p>
              <p className="text-sm text-muted-foreground">
                Add your resume.pdf to the public folder.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
