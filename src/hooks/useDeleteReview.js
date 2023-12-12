import { useMutation } from "@apollo/client";
import useMyReview from "./useMyReview";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const { refetch } = useMyReview();

  const deleteReview = async id => {
    if (result) {
      try {
        const { data } = await mutate({
          variables: {
            deleteReviewId: id,
          },
        });
        if (data.deleteReview) {
          refetch();
        }

        return data;
      } catch (error) {
        console.log("[ERROR IN CATCH]:", error);
      }
    }
  };
  return [deleteReview];
};

export default useDeleteReview;
