import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import resumePreview from "@/assets/resume-preview.png";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const ResumeModal = ({ open, onClose }: ResumeModalProps) => {
  const isMobile = useIsMobile();

  const handleDownload = () => {
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
          {isMobile ? (
            <div className="w-full h-full flex flex-col items-center p-4">
              <img
                src={resumePreview}
                alt="Resume Preview"
                className="w-full max-w-md object-contain rounded-lg shadow-lg"
              />
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Tap the download button above to get the full PDF
              </p>
            </div>
          ) : (
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
              className="w-full h-full min-h-[90vh]"
              title="Resume"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
