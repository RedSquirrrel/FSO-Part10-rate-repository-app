import { gql } from "@apollo/client";

export const AUTH_USER = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;

export const REGISTER_NEW_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;
