import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";
import Footer from "@/components/Footer";

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const { toast } = useToast();

  const handleSubmitSuccess = () => {
    // Automatically switch to admin view after successful submission
    setShowAdmin(true);
  };

  const toggleAdmin = () => {
    setShowAdmin(!showAdmin);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header showAdmin={showAdmin} toggleAdmin={toggleAdmin} />

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {!showAdmin ? (
            <div className="text-center mb-8 fade-in">
              <h2 className="text-3xl font-bold tracking-tight">
                Share Your Feedback
              </h2>
              <p className="text-muted-foreground mt-2">
                We value your thoughts and suggestions. Please take a moment to
                let us know what you think!
              </p>
            </div>
          ) : (
            <div className="text-center mb-8 fade-in">
              <h2 className="text-3xl font-bold tracking-tight">Admin View</h2>
              <p className="text-muted-foreground mt-2">
                Review all submitted feedback entries
              </p>
            </div>
          )}

          <div className="mt-8">
            {showAdmin ? (
              <FeedbackList />
            ) : (
              <FeedbackForm onSubmitSuccess={handleSubmitSuccess} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
