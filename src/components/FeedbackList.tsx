import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    // For this demo, we'll use localStorage
    const fetchFeedbacks = () => {
      const storedFeedbacks = localStorage.getItem("feedbacks");
      if (storedFeedbacks) {
        setFeedbacks(JSON.parse(storedFeedbacks));
      }
    };

    fetchFeedbacks();
    
    // Set up event listener for storage changes
    const handleStorageChange = () => {
      fetchFeedbacks();
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-12 fade-in">
        <h3 className="text-lg font-medium text-gray-600">No feedback submissions yet</h3>
        <p className="text-sm text-gray-500 mt-1">Submissions will appear here once received</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 fade-in">
      <h2 className="text-xl font-bold text-center mb-6">Submitted Feedback ({feedbacks.length})</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base text-gray-900">{feedback.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feedback.email}</p>
                </div>
                <time className="text-xs text-gray-500">
                  {format(new Date(feedback.timestamp), "PPp")}
                </time>
              </div>
            </div>
            <div className="p-4">
              <p className="whitespace-pre-wrap text-sm text-gray-700">{feedback.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
