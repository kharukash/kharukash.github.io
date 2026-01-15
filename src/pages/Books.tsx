import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Book {
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
}

const books: Book[] = [
  {
    title: "Book Title 1",
    author: "Author Name",
    description: "A brief description about this book and why it's meaningful to me.",
  },
  {
    title: "Book Title 2",
    author: "Author Name",
    description: "A brief description about this book and why it's meaningful to me.",
  },
  {
    title: "Book Title 3",
    author: "Author Name",
    description: "A brief description about this book and why it's meaningful to me.",
  },
  {
    title: "Book Title 4",
    author: "Author Name",
    description: "A brief description about this book and why it's meaningful to me.",
  },
  {
    title: "Book Title 5",
    author: "Author Name",
    description: "A brief description about this book and why it's meaningful to me.",
  },
  {
    title: "Book Title 6",
    author: "Author Name",
    description: "A brief description about this book and why it's meaningful to me.",
  },
];

const Books = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-heading font-bold text-foreground">Books</h1>
          <button
            onClick={() => navigate("/")}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-center mb-12"
          >
            Books that have shaped my thinking and perspective.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                {/* Book Image Placeholder */}
                <div className="aspect-[3/4] bg-secondary/50 flex items-center justify-center">
                  {book.imageUrl ? (
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-2 rounded bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">📚</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Book Cover</p>
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-primary mb-2">{book.author}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Books;
