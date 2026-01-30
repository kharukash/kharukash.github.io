import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import aspireLogo from "@/assets/aspire-logo.png";

interface CareerPosition {
  title: string;
  duration: string;
  description?: string;
}

interface CareerGrowthModalProps {
  open: boolean;
  onClose: () => void;
  company: string;
  logo: string;
  positions: CareerPosition[];
}

const CareerGrowthModal = ({
  open,
  onClose,
  company,
  logo,
  positions,
}: CareerGrowthModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto scrollbar-thin">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              <img src={logo} alt={company} className="w-8 h-8 object-contain" />
            </div>
            <DialogTitle className="text-xl font-heading">{company}</DialogTitle>
          </div>
        </DialogHeader>

        {/* Career Timeline */}
        <div className="relative mt-4">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative flex gap-4 pb-6"
            >
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                {index !== positions.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              {/* Position content */}
              <div className="flex-1 pb-2">
                <h3 className="font-heading font-semibold text-foreground">
                  {position.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {position.duration}
                </p>
                {position.description && (
                  <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">
                    {position.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CareerGrowthModal;
