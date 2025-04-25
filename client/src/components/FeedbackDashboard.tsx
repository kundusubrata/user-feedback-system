import { useEffect, useState } from "react";
import axios from "axios";
import { Feedback, FeedbackCategory } from "../types/feedback";

export default function FeedbackDashboard() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [filters, setFilters] = useState({
    sortBy: "createdAt",
    order: "desc",
    category: FeedbackCategory.GENERAL,
  });

  useEffect(() => {
    const fetchFeedback = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/feedback", {
        params: {
          sortBy: filters.sortBy,
          order: filters.order,
          category: filters.category,
        },
      });
      setFeedback(res.data);
    };

    fetchFeedback();
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Feedback Dashboard</h2>
      <div className="flex gap-4 p-4">
        <div>
          <label htmlFor="category" className="text-sm font-medium">Category</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="input h-10"
          >
            <option value="GENERAL">General</option>
            <option value="FEATURE_REQUEST">Feature</option>
            <option value="BUG_REPORT">Bug</option>
            <option value="SUGGESTION">Suggestion</option>
          </select>
        </div>

        <div>
          <label htmlFor="sortBy" className="text-sm font-medium">
            Sort By
          </label>
          <select
            id="sortBy"
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            className="input h-10"
          >
            <option value="createdAt">Date</option>
          </select>
        </div>

        <div>
          <label htmlFor="order" className="text-sm font-medium">
            Order
          </label>
          <select
            id="order"
            name="order"
            value={filters.order}
            onChange={handleFilterChange}
            className="input h-10"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {feedback.map((fb) => (
          <div key={fb.id} className="border p-2 rounded-lg shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{fb.name}</h3>
              <span className="text-sm text-gray-600">{fb.category}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{fb.email}</p>
            <p className="mb-2">{fb.message}</p>
            <p className="text-xs text-gray-500">
              {new Date(fb.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
