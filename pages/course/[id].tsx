import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

const GET_COURSE = gql`
  query GetCourse($id: ID!) {
    course(id: $id) {
      id
      title
      description
      duration
    }
  }
`;

const SingleCourse = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const { loading, error, data } = useQuery(GET_COURSE, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.course) return <p>No course found</p>;

  const { course } = data;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Duration: {course.duration} hours</p>
    </div>
  );
};

export default SingleCourse;
